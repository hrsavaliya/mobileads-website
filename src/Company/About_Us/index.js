import React from 'react';
import Mission from "./mission";
import Mentor from "./mentors";
import Team from "./team";
import Innovation from "./innovation";

const About = () => {
    return (
        <>
            <div className="appland-page container guten_elements">
                <div className="sec-pad ">
                    <div data-elementor-type="wp-page" data-elementor-id={22} className="elementor elementor-22"
                         data-elementor-settings="[]">
                        <div className="elementor-inner">
                            <div className="elementor-section-wrap">
                                <Mission/>
                                <Mentor/>
                                <Team/>
                                <Innovation/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;