import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
// import skills from './../../../data/skills_set2';
import SkillCarouselItem from './SkillCarouselItem';

const slideOptions = {
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
};

class SkillCarousel extends React.Component {
    render() {
        const skills = require(`./../../../data/skills_${this.props.skillSet}`);
        const items = skills.default
            .map(item => <SkillCarouselItem key={item.image} skill={item} />)
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
        return (
            <section className="works-area ptb-80 bg-f7fafd">

                <div className="row m-0">
                    {/* <div className="works-slides"> */}
                    <OwlCarousel
                        className="owl-theme"
                        {...slideOptions}
                    >
                        {items}
                    </OwlCarousel>
                </div>

                <div className="shape8 rotateme">
                    <img src={require("../../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../../images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../../images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../../images/shape4.svg")} alt="shape" />
                </div>
            </section>
        )
    }
}

export default SkillCarousel
