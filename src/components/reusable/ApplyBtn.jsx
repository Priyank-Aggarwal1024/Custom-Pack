import React from 'react';
import '../../styles/applybtn.css'
function ApplyBtn({ classes }) {
    return (
        <p className={`apply-now-btn ${classes}`}>
            Apply now for ₹ 2999
        </p>
    );
}

export default ApplyBtn;