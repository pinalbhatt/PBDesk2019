import React from 'react'
import Link from 'next/link'


class SkillCarouselItem extends React.Component {
    render() {
        const {skill} = this.props;
        return (
            <div className="item">
                <div className="col-lg-12">
                    <div className="single-works">
                        <img
                            src={require(`../../../images/skills/${skill.image}`)}
                            alt="{skill.title}"
                            height="150"
                        />
                        <div className="works-content">
                            <h3>
                                <Link href="#">
                                    <a>{skill.title}</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillCarouselItem
