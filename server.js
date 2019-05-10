const express = require('express')
const next = require('next')
const path = require('path');
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser')
const mailer = require('./mailer')

const dev = process.env.NODE_ENV !== 'production'

if (!dev && cluster.isMaster) {
    console.log(`Node cluster master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
        console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
  
} else {
    const app = next({ dir: '.', dev })
    const handle = app.getRequestHandler()

    app.prepare().then(() => {
        const server = express()

        if (!dev) {
            // Enforce SSL & HSTS in production
            server.use(function(req, res, next) {
                var proto = req.headers["x-forwarded-proto"];
                if (proto === "https") {
                    res.set({
                        'Strict-Transport-Security': 'max-age=31557600' // one-year
                    });
                    return next();
                }
                res.redirect("https://" + req.headers.host + req.url);
            });
        }
          
          // Static files
          // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
        server.use('/images', express.static(path.join(__dirname, 'images'), {
            maxAge: dev ? '0' : '365d'
        }));

        server.use(bodyParser.json())

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.post('/api/contact', (req, res) => {
            const { name, email, phone, subject, text } = req.body;
            mailer({name, email, phone, subject, text}).then(() => {
                res.send('success')
            }).catch(error => {
                res.status(422).send(error)
            });
        })

        const PORT = process.env.PORT || 3000;

        server.listen(PORT, (err) => {
            if (err) throw err
            console.log(`> Read on http://localhost:${PORT}`)
        });
    })

}