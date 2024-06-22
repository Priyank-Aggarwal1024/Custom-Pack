import React from 'react';
import '../../styles/coursecard.css';

function CourseCard({ item }) {
    return (
        <div className="ctm-pack-course-card-div">
            <div className="ctm-pack-ccd-left">
                <div className="ctm-pack-ccdl-left"><img src={item.img} alt={item.text} /></div>
                <div className="ctm-pack-ccdl-right">{item.text}</div>
            </div>
            <div className="ctm-pack-ccd-right">
                <div className="ctm-pack-ccdr-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <g clipPath="url(#clip0_181_1234)">
                            <path d="M15.9987 6.5C9.33203 6.5 3.6387 10.6467 1.33203 16.5C3.6387 22.3533 9.33203 26.5 15.9987 26.5C22.6654 26.5 28.3587 22.3533 30.6654 16.5C28.3587 10.6467 22.6654 6.5 15.9987 6.5ZM15.9987 23.1667C12.3187 23.1667 9.33203 20.18 9.33203 16.5C9.33203 12.82 12.3187 9.83333 15.9987 9.83333C19.6787 9.83333 22.6654 12.82 22.6654 16.5C22.6654 20.18 19.6787 23.1667 15.9987 23.1667ZM15.9987 12.5C13.7854 12.5 11.9987 14.2867 11.9987 16.5C11.9987 18.7133 13.7854 20.5 15.9987 20.5C18.212 20.5 19.9987 18.7133 19.9987 16.5C19.9987 14.2867 18.212 12.5 15.9987 12.5Z" fill="#800080" />
                        </g>
                        <defs>
                            <clipPath id="clip0_181_1234">
                                <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="ctm-pack-view">view</span>
                </div>
                <div className="ctm-pack-ccdr-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <g clipPath="url(#clip0_181_1239)">
                            <path d="M25.3346 17.8332H17.3346V25.8332H14.668V17.8332H6.66797V15.1665H14.668V7.1665H17.3346V15.1665H25.3346V17.8332Z" fill="#800080" />
                        </g>
                        <defs>
                            <clipPath id="clip0_181_1239">
                                <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="ctm-pack-add">Add</span>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
