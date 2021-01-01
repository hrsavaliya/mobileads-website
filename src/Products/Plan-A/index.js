import React from 'react';
import Strategy from "./strategy";
import Journey from "./journey";
import Monetisation from "./monetisation";
import AdMob from "./adMob";
import Placement from "./placement";
import Mediation from "./mediation";
import Firebase from "./firebase";
import Work from "./work";
import Started from "./started";
import Gadmob from "./Gadmob";
import CaseStudeis from "./case_studies";

const Plan = () => {
    return(
        <>
            <div className="appland-page container guten_elements">
                <div className="sec-pad">
                    <div data-elementor-type="wp-page" data-elementor-id={8565} className="elementor elementor-8565" data-elementor-settings="[]">
                        <div className="elementor-inner">
                            <div className="elementor-section-wrap">
                                <Strategy/>
                                <Journey/>
                                <Monetisation/>
                                <AdMob/>
                                <Placement/>
                                <Mediation/>
                                <Firebase/>
                                <Work/>
                                <Started/>
                                <Gadmob/>
                                <CaseStudeis/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Plan;