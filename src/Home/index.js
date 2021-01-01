import React from 'react';
import FSection from "./yield_section";
import RevenueGrowth from "./revenue";
import Mapper from "./mapper";
import Recognition from "./recognition";
import PeopleSay from "./People_say";
import Resources from "./resources";
import './index.css';

const Home = () => {
    return (
            <div className='App'>
                <div className="appland-page  guten_elements">
                    <div className=''>
                        <div data-elementor-type="wp-page" data-elementor-id={21} className="elementor elementor-21" data-elementor-settings="[]">
                            <div className="elementor-inner">
                                <div className="elementor-section-wrap">
                                    <FSection/>
                                    <RevenueGrowth/>
                                    <Mapper/>
                                    <Recognition/>
                                    <PeopleSay/>
                                    <Resources/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Home;