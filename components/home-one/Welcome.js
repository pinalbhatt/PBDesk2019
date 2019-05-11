import React from 'react'
import * as Icon from "react-feather";

export default function Welcome() {
    return (
        <section className="boxes-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 text-center">
						<div className="section-title">
							<h2>Welcome to my desk!</h2>
							<div className="bar" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="about-content">

							<p>Hi Everyone! I’m <b>Pinal Bhatt</b> and I am a <em>Software Engineer & Developer</em>,
								so yes, always on learning ramp! I created this site to narrate my coding and technology & learning experiences.
								I am as self learner and I like sharing my experiments, ideas and experience with everyone by writing articles on latest technology and trends.
								I feel pleased and pride by sharing my knowledge and information that I have gained via Internet.
								And this site is my heartily attempt towards this.​</p>

						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">

							<p>On this site you’ll find interesting posts, articles, tutorials, news updates and links on Programming Concepts, Microservices,
								Cloud Computing, Serverless concepts, AWS, Google Cloud, JavaScript, NodeJS, TypeScript, Angular, Vue, React,
								GoLang, programming practices, blogging and other random thoughts and opinions.
								And ofcourse my tips for healthy eating and leaving! After all <b><em>Health Is Wealth!!!</em></b> <Icon.Smile /></p>

						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
