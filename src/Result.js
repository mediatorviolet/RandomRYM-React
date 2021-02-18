import React from 'react';

const Result = ({ position, generatedYear, page }) => {
    return (
        <div className="result">
            <hr />
            <p>Listen to album <b>n°{position}</b> of year <b>{generatedYear}</b></p>
            <a
                href={`https://rateyourmusic.com/charts/top/album/${generatedYear}/${page}/#pos${position}`}
                target="_blank"
            >
                RYM Chart
            </a>
        </div>
    );
}

export default Result;