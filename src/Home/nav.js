import React from 'react';

const Nav = ({}) => (
    <nav className="navbar navbar-fixed-top " data-spy="affix" data-offset-top={70} >
        <div className="container-fluid menu_center">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only"> Toggle navigation </span>
                    <i className="lnr lnr-menu" />
                    <i className="lnr lnr-cross" />
                </button>
                <a className="navbar-brand" href="index.js">
                    <img src="../Assets/wp-content/uploads/2020/05/1_logo_1.png" data-rjs="https://greedygame.com/wp-content/uploads/2020/05/1_logo.png" alt="GreedyGame" />
                    <img src="../Assets/wp-content/uploads/2020/05/1_logo_1.png" data-rjs="https://greedygame.com/wp-content/uploads/2020/05/1_logo.png" alt="GreedyGame" />
                </a>
            </div>
            {/*========== Collect the nav links, forms, and other content for toggling ==========*/}
            <div id="bs-example-navbar-collapse-1" className="collapse navbar-right navbar-collapse">
                <ul id="nav" className="nav navbar-nav menu">
                    <li id="nav-menu-item-7990" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item">
                        <a href="/home" className="page-scroll main-menu-link">Home</a></li>
                    <li id="nav-menu-item-9939" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                        <a href="/products/plan-a" className="page-scroll main-menu-link">Products</a>
                        <ul role="menu" className=" sub-menu">
                            <li id="nav-menu-item-10495" className="sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-custom menu-item-object-custom">
                                <a href="/products/sdk" className="page-scroll sub-menu-link" >SDK X : Ad Revenue Optimization
                                    Platform</a></li>
                            <li id="nav-menu-item-9937" className="sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="/products/plan-a" className="page-scroll sub-menu-link">Plan A :
                                    Monetization-as-a-Service</a></li>
                            <li id="nav-menu-item-3922" className="sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="/products/advertise" className="page-scroll sub-menu-link">Kraken : Advertise with
                                    Us</a></li>
                        </ul>
                    </li>
                    <li id="nav-menu-item-3924" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="/success-stories" className="page-scroll main-menu-link">Success Stories</a></li>
                    <li id="nav-menu-item-4108" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="/blog" className="page-scroll main-menu-link">Blog</a></li>
                    <li id="nav-menu-item-7921" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                        <a href="/company/about" className="page-scroll main-menu-link">Company</a>
                        <ul role="menu" className=" sub-menu">
                            <li id="nav-menu-item-3925" className="sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="/company/about" className="page-scroll sub-menu-link">About Us</a></li>
                            <li id="nav-menu-item-7920" className="sub-menu-item  menu-item-odd menu-item-depth-1 menu-item menu-item-type-post_type menu-item-object-page">
                                <a href="/company/career" className="page-scroll sub-menu-link">Careers</a></li>
                        </ul>
                    </li>
                    <li id="nav-menu-item-6756" className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="https://console.greedygame.com/" className="page-scroll main-menu-link">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav;