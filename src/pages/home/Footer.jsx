import React from 'react';
import '../../styles/footer.css'
import { NavLink } from 'react-router-dom';

function Footer(props) {
    return (
        <section className="ctm-pack-section ctm-pack-section-footer">
            <div className="ctm-pack-footer">
                <div className="ctm-pack-footer-sec ctm-pack-footer-sec1">
                    <h4 className="ctm-pack-footer-sec-heading">Other Links</h4>
                    <div className="ctm-pack-footer-sec-links">
                        <NavLink to={'/'}>About us</NavLink>
                        <NavLink to={'/'}>Contact us</NavLink>
                        <NavLink to={'/'}>Privacy Policy</NavLink>
                        <NavLink to={'/'}>Terms of Use</NavLink>
                    </div>
                </div>
                <div className="ctm-pack-footer-sec ctm-pack-footer-sec2">
                    <h4 className="ctm-pack-footer-sec-heading">Social Links</h4>
                    <div className="ctm-pack-footer-sec-links ">
                        <NavLink className="ctm-pack-social-links" to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <g clipPath="url(#clip0_23_1075)">
                                    <path d="M0 2.42669C0 1.17476 1.04031 0.160156 2.32389 0.160156H29.3206C30.6041 0.160156 31.6444 1.17476 31.6444 2.42669V29.5381C31.6444 30.79 30.6041 31.8046 29.3206 31.8046H2.32389C1.04031 31.8046 0 30.79 0 29.5381V2.42669ZM9.77616 26.6505V12.3611H5.02751V26.6505H9.77616ZM7.40282 10.409C9.05822 10.409 10.0886 9.31331 10.0886 7.94073C10.059 6.53849 9.0602 5.47247 7.43447 5.47247C5.80873 5.47247 4.74667 6.54047 4.74667 7.94073C4.74667 9.31331 5.77709 10.409 7.37118 10.409H7.40282ZM17.1098 26.6505V18.6702C17.1098 18.243 17.1414 17.8158 17.268 17.5112C17.6101 16.6588 18.3914 15.7747 19.7046 15.7747C21.4233 15.7747 22.1096 17.084 22.1096 19.0064V26.6505H26.8582V18.4546C26.8582 14.0639 24.5165 12.0229 21.3916 12.0229C18.872 12.0229 17.7426 13.4073 17.1098 14.3824V14.4318H17.0781L17.1098 14.3824V12.3611H12.3631C12.4224 13.702 12.3631 26.6505 12.3631 26.6505H17.1098Z" fill="url(#paint0_linear_23_1075)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_23_1075" x1="0.328498" y1="0.160156" x2="37.0124" y2="6.38" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B1B1B1" />
                                        <stop offset="0.0852" stopColor="#BDBDBD" />
                                        <stop offset="0.2551" stopColor="#EBE6E6" />
                                        <stop offset="0.431" stopColor="white" />
                                        <stop offset="0.621" stopColor="#F0F0F0" />
                                        <stop offset="0.8216" stopColor="#CBCBCB" />
                                        <stop offset="1" stopColor="#BEBEBE" />
                                    </linearGradient>
                                    <clipPath id="clip0_23_1075">
                                        <rect y="0.160156" width="31.6444" height="31.6444" rx="5.93333" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </NavLink>
                        <NavLink className="ctm-pack-social-links" to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.99044 2.24902C8.13719 2.24902 6.35979 2.98504 5.04909 4.29524C3.73839 5.60544 3.00169 7.38255 3.00098 9.23581V27.8744C3.00098 29.7281 3.73736 31.5059 5.04814 32.8167C6.35892 34.1275 8.13672 34.8638 9.99044 34.8638H28.629C30.4823 34.8631 32.2594 34.1264 33.5696 32.8157C34.8798 31.505 35.6158 29.7276 35.6158 27.8744V9.23581C35.6151 7.38301 34.8788 5.60631 33.5686 4.29619C32.2585 2.98607 30.4818 2.24973 28.629 2.24902H9.99044ZM30.6394 9.24654C30.6394 9.78045 30.4273 10.2925 30.0498 10.67C29.6723 11.0475 29.1602 11.2596 28.6263 11.2596C28.0924 11.2596 27.5804 11.0475 27.2029 10.67C26.8253 10.2925 26.6132 9.78045 26.6132 9.24654C26.6132 8.71264 26.8253 8.2006 27.2029 7.82307C27.5804 7.44554 28.0924 7.23345 28.6263 7.23345C29.1602 7.23345 29.6723 7.44554 30.0498 7.82307C30.4273 8.2006 30.6394 8.71264 30.6394 9.24654ZM19.3124 12.9721C17.8317 12.9721 16.4117 13.5603 15.3647 14.6073C14.3176 15.6543 13.7294 17.0744 13.7294 18.5551C13.7294 20.0358 14.3176 21.4558 15.3647 22.5029C16.4117 23.5499 17.8317 24.1381 19.3124 24.1381C20.7931 24.1381 22.2132 23.5499 23.2602 22.5029C24.3072 21.4558 24.8954 20.0358 24.8954 18.5551C24.8954 17.0744 24.3072 15.6543 23.2602 14.6073C22.2132 13.5603 20.7931 12.9721 19.3124 12.9721ZM11.0426 18.5551C11.0426 16.3625 11.9136 14.2597 13.464 12.7094C15.0144 11.159 17.1172 10.288 19.3097 10.288C21.5023 10.288 23.6051 11.159 25.1555 12.7094C26.7058 14.2597 27.5768 16.3625 27.5768 18.5551C27.5768 20.7477 26.7058 22.8504 25.1555 24.4008C23.6051 25.9512 21.5023 26.8222 19.3097 26.8222C17.1172 26.8222 15.0144 25.9512 13.464 24.4008C11.9136 22.8504 11.0426 20.7477 11.0426 18.5551Z" fill="url(#paint0_linear_23_1077)" />
                                <defs>
                                    <linearGradient id="paint0_linear_23_1077" x1="3.33955" y1="2.24902" x2="41.1484" y2="8.6596" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B1B1B1" />
                                        <stop offset="0.0852" stopColor="#BDBDBD" />
                                        <stop offset="0.2551" stopColor="#EBE6E6" />
                                        <stop offset="0.431" stopColor="white" />
                                        <stop offset="0.621" stopColor="#F0F0F0" />
                                        <stop offset="0.8216" stopColor="#CBCBCB" />
                                        <stop offset="1" stopColor="#BEBEBE" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </NavLink>
                        <NavLink className="ctm-pack-social-links" to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path d="M30.1667 3.24902H7.69869C5.11521 3.24902 3.00146 5.36277 3.00146 7.94625V30.4166C3.00146 33.0001 5.11521 35.1138 7.69869 35.1138H30.169C32.7525 35.1138 34.8662 33.0001 34.8662 30.4166V7.94625C34.8639 5.36277 32.7525 3.24902 30.1667 3.24902ZM29.8649 20.2565H26.0836V33.9371H20.4258V20.2565H17.5957V15.5405H20.4258V12.7104C20.4258 8.86338 22.0229 6.57466 26.5674 6.57466H30.3452V11.2895H27.9825C26.2163 11.2895 26.0989 11.9506 26.0989 13.1801L26.0836 15.5405H30.364L29.8649 20.2565Z" fill="url(#paint0_linear_23_1079)" />
                                <defs>
                                    <linearGradient id="paint0_linear_23_1079" x1="3.33225" y1="3.24902" x2="40.2716" y2="9.51217" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B1B1B1" />
                                        <stop offset="0.0852" stopColor="#BDBDBD" />
                                        <stop offset="0.2551" stopColor="#EBE6E6" />
                                        <stop offset="0.431" stopColor="white" />
                                        <stop offset="0.621" stopColor="#F0F0F0" />
                                        <stop offset="0.8216" stopColor="#CBCBCB" />
                                        <stop offset="1" stopColor="#BEBEBE" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </NavLink>
                        <NavLink className="ctm-pack-social-links" to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="48" viewBox="0 0 41 48" fill="none">
                                <g clipPath="url(#clip0_23_1081)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.3422 8.62598C22.0332 8.62598 23.7677 8.66949 25.4489 8.74069L27.4345 8.83562L29.3352 8.94835L31.1152 9.069L32.7409 9.19558C34.5052 9.33061 36.1653 10.0835 37.4293 11.3218C38.6932 12.56 39.48 14.2044 39.6513 15.9655L39.7304 16.8061L39.8787 18.6058C40.0172 20.4709 40.12 22.504 40.12 24.4482C40.12 26.3924 40.0172 28.4255 39.8787 30.2906L39.7304 32.0903C39.7047 32.3791 39.679 32.658 39.6513 32.9309C39.48 34.6923 38.6929 36.3369 37.4285 37.5752C36.1642 38.8135 34.5036 39.5662 32.7389 39.7008L31.1172 39.8254L29.3372 39.948L27.4345 40.0608L25.4489 40.1557C23.7476 40.2296 22.0451 40.2679 20.3422 40.2704C18.6394 40.2679 16.9368 40.2296 15.2356 40.1557L13.2499 40.0608L11.3493 39.948L9.56927 39.8254L7.94354 39.7008C6.17927 39.5658 4.51912 38.8129 3.25517 37.5746C1.99121 36.3364 1.20441 34.692 1.03319 32.9309L0.954075 32.0903L0.805742 30.2906C0.654516 28.3467 0.574034 26.3979 0.564453 24.4482C0.564453 22.504 0.667298 20.4709 0.805742 18.6058L0.954075 16.8061C0.979786 16.5173 1.0055 16.2384 1.03319 15.9655C1.20434 14.2047 1.99086 12.5606 3.25441 11.3224C4.51796 10.0841 6.17764 9.33106 7.94156 9.19558L9.56532 9.069L11.3453 8.94835L13.2479 8.83562L15.2336 8.74069C16.9355 8.66678 18.6388 8.62854 20.3422 8.62598ZM16.3867 19.6521V29.2443C16.3867 30.158 17.3756 30.7276 18.1667 30.2728L26.4733 25.4766C26.6541 25.3726 26.8042 25.2227 26.9086 25.0422C27.013 24.8616 27.068 24.6568 27.068 24.4482C27.068 24.2396 27.013 24.0348 26.9086 23.8542C26.8042 23.6737 26.6541 23.5238 26.4733 23.4198L18.1667 18.6256C17.9862 18.5214 17.7815 18.4666 17.5732 18.4666C17.3648 18.4667 17.1601 18.5216 16.9797 18.6258C16.7993 18.7301 16.6495 18.88 16.5454 19.0605C16.4413 19.241 16.3865 19.4457 16.3867 19.6541V19.6521Z" fill="url(#paint0_linear_23_1081)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_23_1081" x1="0.975076" y1="8.62598" x2="46.1203" y2="18.1941" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B1B1B1" />
                                        <stop offset="0.0852" stopColor="#BDBDBD" />
                                        <stop offset="0.2551" stopColor="#EBE6E6" />
                                        <stop offset="0.431" stopColor="white" />
                                        <stop offset="0.621" stopColor="#F0F0F0" />
                                        <stop offset="0.8216" stopColor="#CBCBCB" />
                                        <stop offset="1" stopColor="#BEBEBE" />
                                    </linearGradient>
                                    <clipPath id="clip0_23_1081">
                                        <rect width="40" height="47" fill="white" transform="translate(0.533203 0.482422)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </NavLink>
                    </div>
                </div>
                <div className="ctm-pack-footer-sec ctm-pack-footer-sec3">
                    <h4 className="ctm-pack-footer-sec-heading">Contact Us</h4>
                    <div className="ctm-pack-footer-sec-links">
                        <p className="ctm-pack-footer-email">
                            support@tutedude.com
                        </p>
                        <p className="ctm-pack-footer-phone">
                            +91 7988800474
                        </p>
                    </div>
                </div>
                <div className="ctm-pack-footer-sec ctm-pack-footer-sec4">
                    <h4 className="ctm-pack-footer-sec-heading">Registered Office</h4>
                    <div className="ctm-pack-footer-sec-links">
                        <div className="ctm-pack-footer-address">
                            <p>Suncity success tower,</p>
                            <p>sector 65, Gurugram,</p>
                            <p>Haryana, 122005</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;