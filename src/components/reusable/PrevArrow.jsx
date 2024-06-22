import React from 'react';
import '../../styles/star.css';

function PrevArrow(props) {
    const { classN, style, onClick } = props;

    return (
        <div className={`ctm-pack-previous-arrow ctm-pack-${classN}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <path d="M16.6602 6.46338L9.55469 13.5689L16.6602 20.6745" stroke="#5D6165" strokeWidth="2.36851" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export default PrevArrow;
