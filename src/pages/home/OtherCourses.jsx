import React from 'react';
import '../../styles/othercourses.css'
const cards = [
    {
        icon: "./Main1.png",
        heading: "Creative Designer Combo pack",
        company: [
            {
                icon: "./Icon11.png",
                title: "Adobe Illustrator"
            },
            {
                icon: "./Icon12.png",
                title: "Adobe Photoshop"
            },
            {
                icon: "./Icon13.png",
                title: "Figma"
            },
            {
                icon: "./Icon14.png",
                title: "Adobe Premier pro"
            }
        ],
        price: "₹1,499",
        discount: "₹2,796",
        off: "45% OFF "
    },
    {
        icon: "./Main2.png",
        heading: "Data Scientist Combo Pack ",
        company: [
            {
                icon: "./Icon21.png",
                title: "SQL"
            },
            {
                icon: "./Icon22.png",
                title: "Machine learning"
            },
            {
                icon: "./Icon23.png",
                title: "Python"
            },
            {
                icon: "./Icon24.png",
                title: "DSA With Python"
            },
            {
                icon: "./Icon25.png",
                title: "Data Science"
            }
        ],
        price: "₹1,499",
        discount: "₹2,796",
        off: "45% OFF "
    },
    {
        icon: "./Main3.png",
        heading: "App developer Combo pack ",
        company: [
            {
                icon: "./Icon31.png",
                title: "JAVA"
            },
            {
                icon: "./Icon32.png",
                title: "Flutter"
            },
            {
                icon: "./Icon33.png",
                title: "React Native "
            },
            {
                icon: "./Icon34.png",
                title: "React JS"
            },
            {
                icon: "./Icon35.png",
                title: "App develop"
            }
        ],
        price: "₹1,499",
        discount: "₹2,796",
        off: "45% OFF "
    },
    {
        icon: "./Main4.png",
        heading: "Full Stack Combo pack ",
        company: [
            {
                icon: "./Icon41.png",
                title: "MERN"
            },
            {
                icon: "./Icon42.png",
                title: "React JS"
            },
            {
                icon: "./Icon43.png",
                title: "DSA With Python"
            },
            {
                icon: "./Icon44.png",
                title: "DevOPS"
            },
            {
                icon: "./Icon45.png",
                title: "Python"
            },
            {
                icon: "./Icon46.png",
                title: "DBMS"
            }
        ],
        price: "₹1,499",
        discount: "₹2,796",
        off: "45% OFF "
    },
    {
        icon: "./Main5.png",
        heading: "Business Combo pack",
        company: [
            {
                icon: "./Icon51.png",
                title: "Stock Market"
            },
            {
                icon: "./Icon52.png",
                title: "FRM"
            },
            {
                icon: "./Icon53.png",
                title: "Technical Research"
            },
            {
                icon: "./Icon54.png",
                title: "Financial Modelling valuation"
            }
        ],
        price: "₹1,499",
        discount: "₹2,796",
        off: "45% OFF "
    },
    {
        icon: "./Main6.png",
        heading: "Tech Geek Combo pack",
        company: [
            {
                icon: "./Icon61.png",
                title: "Python"
            },
            {
                icon: "./Icon62.png",
                title: "App develop"
            },
            {
                icon: "./Icon63.png",
                title: "Ethical Hacking"
            },
            {
                icon: "./Icon64.png",
                title: "JAVA"
            },
            {
                icon: "./Icon65.png",
                title: "Data Science"
            },
            {
                icon: "./Icon66.png",
                title: "MERN"
            }
        ],
        price: "₹1,499",
        discount: "₹2,796",
        off: "45% OFF "
    }
]
function OtherCourses(props) {
    return (
        <section className="ctm-pack-section ctm-pack-section-othercourses">
            <div className="ctm-pack-othercourses">
                <h2 className="ctm-pack-section-heading ctm-pack-card-section-heading">
                    <b>Interested</b> in our
                    <p>other courses <b>too ?</b></p>
                </h2>
                <div className="ctm-pack-cards">
                    {
                        cards.map((card, index) => {
                            return (
                                <div className="ctm-pack-container" key={index}>
                                    <div className="ctm-pack-other-card" >
                                        <div className="ctm-pack-card-top">
                                            <div className="ctm-pack-card-main-img">
                                                <img src={card.icon} alt={card.heading} />
                                            </div>
                                            <div className="ctm-pack-card-heading">
                                                <h3>{card.heading}</h3>
                                            </div>
                                        </div>
                                        <div className="ctm-pack-card-middle">
                                            {
                                                card.company.map((comp, idx) => {
                                                    return (
                                                        <div className="ctm-pack-card-company" key={`${index} ${idx}`}>
                                                            <div className="ctm-pack-card-company-img">
                                                                <img src={comp.icon} alt={comp.title} />
                                                                {/* {comp.icon} */}
                                                            </div>
                                                            <p className="ctm-pack-card-company-title">{comp.title}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="ctm-pack-card-bottom">
                                            <div className="ctm-pack-card-bottom-price">
                                                <p className="ctm-pack-card-price">{card.price}</p>
                                                <p className="ctm-pack-card-discount">{card.discount}</p>
                                                <p className="ctm-pack-card-off">{card.off}</p>
                                            </div>
                                            <div className="ctm-pack-bottom-validity">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                    <mask id="mask0_1_55" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="19">
                                                        <rect y="0.5" width="18" height="18" fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_1_55)">
                                                        <path d="M8.25073 13.2496H9.75073V8.74963H8.25073V13.2496ZM9.00073 7.24963C9.21323 7.24963 9.39136 7.17776 9.53511 7.03401C9.67886 6.89026 9.75073 6.71213 9.75073 6.49963C9.75073 6.28713 9.67886 6.10901 9.53511 5.96526C9.39136 5.82151 9.21323 5.74963 9.00073 5.74963C8.78823 5.74963 8.61011 5.82151 8.46636 5.96526C8.32261 6.10901 8.25073 6.28713 8.25073 6.49963C8.25073 6.71213 8.32261 6.89026 8.46636 7.03401C8.61011 7.17776 8.78823 7.24963 9.00073 7.24963ZM9.00073 16.9996C7.96323 16.9996 6.98823 16.8028 6.07573 16.409C5.16323 16.0153 4.36948 15.4809 3.69448 14.8059C3.01948 14.1309 2.48511 13.3371 2.09136 12.4246C1.69761 11.5121 1.50073 10.5371 1.50073 9.49963C1.50073 8.46213 1.69761 7.48713 2.09136 6.57463C2.48511 5.66213 3.01948 4.86838 3.69448 4.19338C4.36948 3.51838 5.16323 2.98401 6.07573 2.59026C6.98823 2.19651 7.96323 1.99963 9.00073 1.99963C10.0382 1.99963 11.0132 2.19651 11.9257 2.59026C12.8382 2.98401 13.632 3.51838 14.307 4.19338C14.982 4.86838 15.5164 5.66213 15.9101 6.57463C16.3039 7.48713 16.5007 8.46213 16.5007 9.49963C16.5007 10.5371 16.3039 11.5121 15.9101 12.4246C15.5164 13.3371 14.982 14.1309 14.307 14.8059C13.632 15.4809 12.8382 16.0153 11.9257 16.409C11.0132 16.8028 10.0382 16.9996 9.00073 16.9996ZM9.00073 15.4996C10.6757 15.4996 12.0945 14.9184 13.257 13.7559C14.4195 12.5934 15.0007 11.1746 15.0007 9.49963C15.0007 7.82463 14.4195 6.40588 13.257 5.24338C12.0945 4.08088 10.6757 3.49963 9.00073 3.49963C7.32573 3.49963 5.90698 4.08088 4.74448 5.24338C3.58198 6.40588 3.00073 7.82463 3.00073 9.49963C3.00073 11.1746 3.58198 12.5934 4.74448 13.7559C5.90698 14.9184 7.32573 15.4996 9.00073 15.4996Z" fill="#800080" fillOpacity="0.87" />
                                                    </g>
                                                </svg>
                                                <p className="ctm-pack-bottom-validity-para">You get a Refund Validity of <b>2 Years</b></p>
                                            </div>
                                            <p className="ctm-pack-bottom-know">Know More</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="ctm-pack-oc-bottomcard">

                    {/* <div className="ctm-pack-oc-bottomcards-1 ctm-pack-oc-bottomcards">
                        <svg className='ctm-pack-ot-bottomcards-design' xmlns="http://www.w3.org/2000/svg" width="367" height="381" viewBox="0 0 367 381" fill="none">
                            <g opacity="0.4">
                                <path d="M277.257 655.752C314.723 613.065 344.549 564.411 365.03 512.57C385.512 460.729 396.25 406.715 396.63 353.612C397.009 300.509 387.024 249.357 367.244 203.077C347.464 156.797 318.277 116.295 281.348 83.883C244.419 51.4713 200.473 27.7849 152.017 14.1762C103.562 0.567407 51.5474 -2.69718 -1.0575 4.56877C-53.6624 11.8347 -105.827 29.4889 -154.573 56.5234C-203.319 83.5579 -247.691 119.443 -285.157 162.13L-3.94996 408.941L277.257 655.752Z" fill="url(#paint0_linear_181_1039)" fillOpacity="0.3" />
                                <path d="M270.01 649.392C306.511 607.804 335.568 560.405 355.522 509.9C375.476 459.394 385.936 406.772 386.307 355.038C386.677 303.303 376.949 253.47 357.678 208.382C338.408 163.295 309.973 123.836 273.996 92.2599C238.019 60.6835 195.205 37.6075 147.998 24.3495C100.792 11.0914 50.117 7.91093 -1.1322 14.9896C-52.3814 22.0683 -103.202 39.2676 -150.691 65.6054C-198.181 91.9432 -241.41 126.904 -277.911 168.491L-3.94996 408.941L270.01 649.392Z" fill="url(#paint1_linear_181_1039)" fillOpacity="0.3" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_181_1039" x1="281.348" y1="83.883" x2="152.962" y2="207.347" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_181_1039" x1="281.348" y1="83.883" x2="152.962" y2="207.347" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="ctm-pack-ocb-off">
                            <p className='ctm-pack-fw-600'>45%</p>
                            <p className='ctm-pack-fw-700'>OFF</p>
                        </div>
                        <div className="ctm-pack-ocb-inner">
                            <div className="ctm-pack-ocb-heading">Customized course Pack</div>
                            <div className="ctm-pack-ocb-middle">
                                <div className="ctm-pack-ocb-middle-horizontal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <g opacity="0.7">
                                            <path d="M11.41 2.5547H20.1348C20.4254 2.55462 20.6481 2.55457 20.8429 2.57362C22.2276 2.70908 23.361 3.54162 23.8417 4.66308H7.70312C8.18374 3.54162 9.31715 2.70908 10.7019 2.57362C10.8966 2.55457 11.1194 2.55462 11.41 2.5547Z" fill="#800080" fillOpacity="0.87" />
                                            <path d="M8.65983 5.95898C6.92161 5.95898 5.49634 7.00863 5.0207 8.40113C5.01079 8.43015 5.00127 8.45934 4.99219 8.48865C5.48986 8.33794 6.0078 8.23948 6.5321 8.17227C7.88253 7.99914 9.58913 7.99923 11.5716 7.99934H20.1864C22.1688 7.99923 23.8755 7.99914 25.2259 8.17227C25.7501 8.23948 26.2681 8.33794 26.7657 8.48865C26.7567 8.45934 26.7472 8.43015 26.7372 8.40113C26.2616 7.00863 24.8363 5.95898 23.0981 5.95898H8.65983Z" fill="#800080" fillOpacity="0.87" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.9323 9.48145H11.6136C7.39525 9.48145 5.28607 9.48145 4.10131 10.7149C2.91654 11.9484 3.19529 13.8541 3.75281 17.6656L4.2815 21.2798C4.71871 24.2688 4.93731 25.7633 6.05876 26.6582C7.1802 27.5532 8.83422 27.5532 12.1423 27.5532H19.4036C22.7117 27.5532 24.3657 27.5532 25.4872 26.6582C26.6087 25.7633 26.8272 24.2688 27.2644 21.2798L27.7931 17.6656C28.3506 13.8542 28.6293 11.9484 27.4446 10.7149C26.2598 9.48145 24.1506 9.48145 19.9323 9.48145ZM18.9993 19.7962C19.6973 19.3636 19.6973 18.2434 18.9993 17.8108L14.785 15.1982C14.1066 14.7777 13.2731 15.325 13.2731 16.191V21.4161C13.2731 22.282 14.1066 22.8294 14.785 22.4089L18.9993 19.7962Z" fill="#800080" fillOpacity="0.87" />
                                        </g>
                                    </svg>
                                    <p className="ctm-pack-fw-400">Enroll Any{" "} <span className="ctm-pack-fw-700">4 Courses</span></p>
                                </div>
                                <div className="ctm-pack-ocb-middle-horizontal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <g opacity="0.7">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M27.5225 13.2048H2.52344V21.9544C2.52344 22.949 2.91851 23.9028 3.62174 24.606C4.32498 25.3092 5.27877 25.7043 6.27329 25.7043H23.7726C24.7671 25.7043 25.7209 25.3092 26.4242 24.606C27.1274 23.9028 27.5225 22.949 27.5225 21.9544V13.2048ZM13.2555 18.2046L13.4055 18.0533C13.6334 17.8178 13.7596 17.5021 13.757 17.1744C13.7544 16.8466 13.6231 16.533 13.3915 16.3011C13.16 16.0692 12.8465 15.9375 12.5188 15.9344C12.1911 15.9314 11.8752 16.0571 11.6393 16.2847L9.35317 18.5708C9.11884 18.8052 8.98721 19.1231 8.98721 19.4545C8.98721 19.786 9.11884 20.1039 9.35317 20.3383L11.6393 22.6232C11.7546 22.7426 11.8926 22.8378 12.0451 22.9033C12.1976 22.9688 12.3616 23.0033 12.5275 23.0047C12.6935 23.0062 12.8581 22.9745 13.0117 22.9117C13.1653 22.8488 13.3049 22.756 13.4223 22.6387C13.5396 22.5213 13.6324 22.3817 13.6953 22.2281C13.7581 22.0745 13.7898 21.9099 13.7883 21.744C13.7869 21.578 13.7524 21.414 13.6869 21.2615C13.6214 21.109 13.5261 20.971 13.4068 20.8557L13.2555 20.7045H18.7728C19.1043 20.7045 19.4222 20.5728 19.6567 20.3384C19.8911 20.104 20.0228 19.7861 20.0228 19.4545C20.0228 19.123 19.8911 18.8051 19.6567 18.5707C19.4222 18.3363 19.1043 18.2046 18.7728 18.2046H13.2555ZM6.27329 5.70508C5.27877 5.70508 4.32498 6.10015 3.62174 6.80339C2.91851 7.50662 2.52344 8.46041 2.52344 9.45493V10.7049H27.5225V9.45493C27.5225 8.46041 27.1274 7.50662 26.4242 6.80339C25.7209 6.10015 24.7671 5.70508 23.7726 5.70508H6.27329Z" fill="#800080" fillOpacity="0.87" />
                                        </g>
                                    </svg>
                                    <p className='ctm-pack-fw-400'>Avail <span className="ctm-pack-fw-700">100% REFUND</span> in <span className="ctm-pack-fw-700">1 Year</span></p>
                                </div>
                                <div className="ctm-pack-ocb-middle-horizontal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <g opacity="0.7">
                                            <path d="M15.023 27.8545C21.9264 27.8545 27.5225 22.2585 27.5225 15.355C27.5225 8.4515 21.9264 2.85547 15.023 2.85547C8.11947 2.85547 2.52344 8.4515 2.52344 15.355C2.52344 22.2585 8.11947 27.8545 15.023 27.8545ZM16.8979 10.3552C17.3079 10.9002 17.6016 11.5376 17.7416 12.2301H20.0228V14.105H17.7416C17.5253 15.1637 16.9499 16.1151 16.1129 16.7984C15.2759 17.4817 14.2285 17.8549 13.148 17.8549H12.9105L17.5604 22.5047L16.2354 23.8297L10.0231 17.6174V15.98H13.148C13.7298 15.9801 14.2972 15.7999 14.7723 15.4641C15.2473 15.1283 15.6065 14.6535 15.8004 14.105H10.0231V12.2301H15.8004C15.6064 11.6817 15.2471 11.207 14.7721 10.8712C14.2971 10.5355 13.7297 10.3552 13.148 10.3552H10.0231V8.48025H20.0228V10.3552H16.8979Z" fill="#800080" fillOpacity="0.87" />
                                        </g>
                                    </svg>
                                    <p className='ctm-pack-fw-400'>Price : <span className="ctm-pack-fw-700">₹ 1499</span>{" "}<span className="ctm-pack-fw-600 ctm-pack-td-lt ctm-pack-f-14">₹2796 </span></p>
                                </div>
                            </div>
                            <div className="ctm-pack-ocb-know">Know More</div>
                        </div>
                    </div> */}
                    <div className="ctm-pack-oc-bottomcards-2 ctm-pack-oc-bottomcards">
                        <svg className='ctm-pack-ot-bottomcards-design' xmlns="http://www.w3.org/2000/svg" width="367" height="381" viewBox="0 0 367 381" fill="none">
                            <g opacity="0.4">
                                <path d="M277.257 655.752C314.723 613.065 344.549 564.411 365.03 512.57C385.512 460.729 396.25 406.715 396.63 353.612C397.009 300.509 387.024 249.357 367.244 203.077C347.464 156.797 318.277 116.295 281.348 83.883C244.419 51.4713 200.473 27.7849 152.017 14.1762C103.562 0.567407 51.5474 -2.69718 -1.0575 4.56877C-53.6624 11.8347 -105.827 29.4889 -154.573 56.5234C-203.319 83.5579 -247.691 119.443 -285.157 162.13L-3.94996 408.941L277.257 655.752Z" fill="url(#paint0_linear_181_1039)" fillOpacity="0.3" />
                                <path d="M270.01 649.392C306.511 607.804 335.568 560.405 355.522 509.9C375.476 459.394 385.936 406.772 386.307 355.038C386.677 303.303 376.949 253.47 357.678 208.382C338.408 163.295 309.973 123.836 273.996 92.2599C238.019 60.6835 195.205 37.6075 147.998 24.3495C100.792 11.0914 50.117 7.91093 -1.1322 14.9896C-52.3814 22.0683 -103.202 39.2676 -150.691 65.6054C-198.181 91.9432 -241.41 126.904 -277.911 168.491L-3.94996 408.941L270.01 649.392Z" fill="url(#paint1_linear_181_1039)" fillOpacity="0.3" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_181_1039" x1="281.348" y1="83.883" x2="152.962" y2="207.347" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_181_1039" x1="281.348" y1="83.883" x2="152.962" y2="207.347" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#800080" />
                                    <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="ctm-pack-ocb-off">
                            <p className='ctm-pack-fw-600'>70%</p>
                            <p className='ctm-pack-fw-700'>OFF</p>
                        </div>
                        <div className="ctm-pack-ocb-inner">
                            <div className="ctm-pack-ocb-heading">All access course Pack</div>
                            <div className="ctm-pack-ocb-middle">
                                <div className="ctm-pack-ocb-middle-horizontal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <g opacity="0.7">
                                            <path d="M11.41 2.5547H20.1348C20.4254 2.55462 20.6481 2.55457 20.8429 2.57362C22.2276 2.70908 23.361 3.54162 23.8417 4.66308H7.70312C8.18374 3.54162 9.31715 2.70908 10.7019 2.57362C10.8966 2.55457 11.1194 2.55462 11.41 2.5547Z" fill="#800080" fillOpacity="0.87" />
                                            <path d="M8.65983 5.95898C6.92161 5.95898 5.49634 7.00863 5.0207 8.40113C5.01079 8.43015 5.00127 8.45934 4.99219 8.48865C5.48986 8.33794 6.0078 8.23948 6.5321 8.17227C7.88253 7.99914 9.58913 7.99923 11.5716 7.99934H20.1864C22.1688 7.99923 23.8755 7.99914 25.2259 8.17227C25.7501 8.23948 26.2681 8.33794 26.7657 8.48865C26.7567 8.45934 26.7472 8.43015 26.7372 8.40113C26.2616 7.00863 24.8363 5.95898 23.0981 5.95898H8.65983Z" fill="#800080" fillOpacity="0.87" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.9323 9.48145H11.6136C7.39525 9.48145 5.28607 9.48145 4.10131 10.7149C2.91654 11.9484 3.19529 13.8541 3.75281 17.6656L4.2815 21.2798C4.71871 24.2688 4.93731 25.7633 6.05876 26.6582C7.1802 27.5532 8.83422 27.5532 12.1423 27.5532H19.4036C22.7117 27.5532 24.3657 27.5532 25.4872 26.6582C26.6087 25.7633 26.8272 24.2688 27.2644 21.2798L27.7931 17.6656C28.3506 13.8542 28.6293 11.9484 27.4446 10.7149C26.2598 9.48145 24.1506 9.48145 19.9323 9.48145ZM18.9993 19.7962C19.6973 19.3636 19.6973 18.2434 18.9993 17.8108L14.785 15.1982C14.1066 14.7777 13.2731 15.325 13.2731 16.191V21.4161C13.2731 22.282 14.1066 22.8294 14.785 22.4089L18.9993 19.7962Z" fill="#800080" fillOpacity="0.87" />
                                        </g>
                                    </svg>
                                    <p className="ctm-pack-fw-400">Enroll all the{" "} <span className="ctm-pack-fw-700">25 Courses</span></p>
                                </div>
                                <div className="ctm-pack-ocb-middle-horizontal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <g opacity="0.7">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M27.5225 13.2048H2.52344V21.9544C2.52344 22.949 2.91851 23.9028 3.62174 24.606C4.32498 25.3092 5.27877 25.7043 6.27329 25.7043H23.7726C24.7671 25.7043 25.7209 25.3092 26.4242 24.606C27.1274 23.9028 27.5225 22.949 27.5225 21.9544V13.2048ZM13.2555 18.2046L13.4055 18.0533C13.6334 17.8178 13.7596 17.5021 13.757 17.1744C13.7544 16.8466 13.6231 16.533 13.3915 16.3011C13.16 16.0692 12.8465 15.9375 12.5188 15.9344C12.1911 15.9314 11.8752 16.0571 11.6393 16.2847L9.35317 18.5708C9.11884 18.8052 8.98721 19.1231 8.98721 19.4545C8.98721 19.786 9.11884 20.1039 9.35317 20.3383L11.6393 22.6232C11.7546 22.7426 11.8926 22.8378 12.0451 22.9033C12.1976 22.9688 12.3616 23.0033 12.5275 23.0047C12.6935 23.0062 12.8581 22.9745 13.0117 22.9117C13.1653 22.8488 13.3049 22.756 13.4223 22.6387C13.5396 22.5213 13.6324 22.3817 13.6953 22.2281C13.7581 22.0745 13.7898 21.9099 13.7883 21.744C13.7869 21.578 13.7524 21.414 13.6869 21.2615C13.6214 21.109 13.5261 20.971 13.4068 20.8557L13.2555 20.7045H18.7728C19.1043 20.7045 19.4222 20.5728 19.6567 20.3384C19.8911 20.104 20.0228 19.7861 20.0228 19.4545C20.0228 19.123 19.8911 18.8051 19.6567 18.5707C19.4222 18.3363 19.1043 18.2046 18.7728 18.2046H13.2555ZM6.27329 5.70508C5.27877 5.70508 4.32498 6.10015 3.62174 6.80339C2.91851 7.50662 2.52344 8.46041 2.52344 9.45493V10.7049H27.5225V9.45493C27.5225 8.46041 27.1274 7.50662 26.4242 6.80339C25.7209 6.10015 24.7671 5.70508 23.7726 5.70508H6.27329Z" fill="#800080" fillOpacity="0.87" />
                                        </g>
                                    </svg>
                                    <p className='ctm-pack-fw-400'>Avail <span className="ctm-pack-fw-700">100% REFUND</span> in <span className="ctm-pack-fw-700"> Lifetime</span></p>
                                </div>
                                <div className="ctm-pack-ocb-middle-horizontal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <g opacity="0.7">
                                            <path d="M15.023 27.8545C21.9264 27.8545 27.5225 22.2585 27.5225 15.355C27.5225 8.4515 21.9264 2.85547 15.023 2.85547C8.11947 2.85547 2.52344 8.4515 2.52344 15.355C2.52344 22.2585 8.11947 27.8545 15.023 27.8545ZM16.8979 10.3552C17.3079 10.9002 17.6016 11.5376 17.7416 12.2301H20.0228V14.105H17.7416C17.5253 15.1637 16.9499 16.1151 16.1129 16.7984C15.2759 17.4817 14.2285 17.8549 13.148 17.8549H12.9105L17.5604 22.5047L16.2354 23.8297L10.0231 17.6174V15.98H13.148C13.7298 15.9801 14.2972 15.7999 14.7723 15.4641C15.2473 15.1283 15.6065 14.6535 15.8004 14.105H10.0231V12.2301H15.8004C15.6064 11.6817 15.2471 11.207 14.7721 10.8712C14.2971 10.5355 13.7297 10.3552 13.148 10.3552H10.0231V8.48025H20.0228V10.3552H16.8979Z" fill="#800080" fillOpacity="0.87" />
                                        </g>
                                    </svg>
                                    <p className='ctm-pack-fw-400'>Price : <span className="ctm-pack-fw-700">₹ 4499</span>{" "}<span className="ctm-pack-fw-600 ctm-pack-td-lt ctm-pack-f-14"> ₹14,679  </span></p>
                                </div>
                            </div>
                            <div className="ctm-pack-ocb-know">Know More</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OtherCourses;