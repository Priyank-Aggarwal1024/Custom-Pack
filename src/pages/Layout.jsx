import React from 'react';
import './layout.css'; // Assuming layout.css contains styles for Layout component
import Navbar from './home/Navbar';
import Testimonials from './home/Testimonials';
import Faq from './home/Faq';
import Footer from './home/Footer';
import Hero from './home/Hero';
import Refund from './home/Refund';
import Courses from './home/Courses';
import OtherCourses from './home/OtherCourses';
import CustomPackRefund from './home/CustomPackRefund';

function Layout(props) {


    return (
        <>
            <div className="ctm-pack-layout">
                <Navbar />
                <Hero />
                <Refund />
                <CustomPackRefund />
                <Courses />
                <OtherCourses />
                <Testimonials />
                <Faq />
                <Footer />
            </div>

            {/* Example of conditional bottom layout based on window width */}
            <div className="ctm-pack-layout-bottom">
                <div className="ctm-pack-hm-left">
                    <p className="ctm-pack-fw-700 ctm-pack-layout-price-bottom ctm-pack-text-pink ctm-pack-text-center">
                        <span className="ctm-pack-layout-bottom-large">4</span>
                        <span className="ctm-pack-layout-bottom-small">7</span>
                    </p>
                    <p className="ctm-pack-fw-700 ctm-pack-f-16 ctm-pack-text-pink ctm-pack-text-center" style={{ color: "#263238" }}>Selected Course</p>
                </div>
                <div className="ctm-pack-hm-middle">
                    <p className="ctm-pack-fw-700 ctm-pack-layout-price-bottom ctm-pack-text-pink ctm-pack-text-center">
                        <span className="ctm-pack-layout-bottom-large">₹1499</span>
                        <span className="ctm-pack-layout-bottom-small">₹2624</span>
                    </p>
                    <p className="ctm-pack-fw-700 ctm-pack-f-16 ctm-pack-text-pink ctm-pack-text-center" style={{ color: "#263238" }}>Total Price </p>
                </div>
                <div className="ctm-pack-hm-right">
                    <div className="ctm-pack-proceed ctm-pack-layout-proceed ctm-pack-text-white">Proceed</div>
                </div>
            </div>
        </>
    );
}

export default Layout;
