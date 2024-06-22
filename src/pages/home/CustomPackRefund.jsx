import React from 'react';
import '../../styles/custompackrefund.css'
import RefundImg from '../../assets/100Refund.png'
function CustomPackRefund(props) {
    return (
        <section className="ctm-pack-section">

            <h2 className="ctm-pack-f-45 ctm-pack-fw-400 ctm-pack-text-black ctm-pack-text-center ctm-pack-ctmpr-heading">How to grab{" "} <span className="ctm-pack-fw-700 ctm-pack-text-pink"> 100% refund</span>{" "}successfully?</h2>
            <div className="ctm-pack-ctmpr-main">
                <div className="ctm-pack-ctmpr-left">
                    <div className="ctm-pack-ctmpr-left-p1">Complete all enrolled <span className="ctm-pack-text-pink ctm-pack-fw-700">4 courses</span> with assignment in <span className="ctm-pack-text-pink ctm-pack-fw-700">1 year</span> from the date of enrollment and get <span className="ctm-pack-text-pink ctm-pack-fw-700">100% Refund</span> in your source bank account.</div>
                    <div className="ctm-pack-ctmpr-left-p2">Also get the Industrial certificate of all <span className="ctm-pack-text-pink ctm-pack-fw-700">4 courses.</span></div>
                    <svg className="ctm-pack-ctmpr-left-design" xmlns="http://www.w3.org/2000/svg" width="343" height="193" viewBox="0 0 343 193" fill="none">
                        <g opacity="0.3">
                            <path d="M345.686 516.828C369.785 489.371 387.286 456.599 397.19 420.385C407.095 384.17 409.209 345.221 403.412 305.763C397.615 266.304 384.02 227.107 363.404 190.411C342.788 153.715 315.554 120.238 283.257 91.8919C250.96 63.5455 214.233 40.8848 175.172 25.2035C136.112 9.52219 95.4829 1.12746 55.6054 0.498569C15.7278 -0.130314 -22.6174 7.01897 -57.241 21.5382C-91.8646 36.0575 -122.089 57.6624 -146.187 85.1194L99.7495 300.974L345.686 516.828Z" fill="url(#paint0_linear_238_6707)" fillOpacity="0.3" />
                            <path d="M339.348 511.265C362.826 484.516 379.876 452.589 389.525 417.308C399.175 382.026 401.234 344.081 395.587 305.639C389.939 267.197 376.695 229.011 356.61 193.26C336.525 157.51 309.992 124.896 278.528 97.2801C247.063 69.6642 211.282 47.5874 173.229 32.3102C135.175 17.033 95.5928 8.85462 56.7429 8.24193C17.893 7.62926 -19.4641 14.5943 -53.1955 28.7394C-86.9268 42.8845 -116.372 63.9327 -139.849 90.6821L99.7495 300.974L339.348 511.265Z" fill="url(#paint1_linear_238_6707)" fillOpacity="0.3" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_238_6707" x1="283.257" y1="91.8919" x2="202.337" y2="173.262" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_238_6707" x1="283.257" y1="91.8919" x2="202.337" y2="173.262" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#800080" />
                                <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="ctm-pack-ctmpr-right">
                    <img src={RefundImg} alt="Grab 100% Refund Successfully" />
                </div>
            </div>
        </section>
    );
}

export default CustomPackRefund;