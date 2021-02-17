import React, { useEffect, useState } from 'react';
import Display from './Display';

const Form = () => {

    const [year1, setYear1] = useState();
    const [year2, setYear2] = useState();
    const [generatedYear, setGeneratedYear] = useState();
    const [position, setPosition] = useState();
    const [page, setPage] = useState();
    const [isSubmit, setIsSubmit] = useState(false);

    const getYear1 = e => {
        setYear1(e.target.value);
        console.log(year1);
    };

    const getYear2 = e => {
        setYear2(e.target.value);
        console.log(year2);
    };

    const getGeneratedYear = e => {
        e.preventDefault();
        setGeneratedYear(Math.floor(Math.random() * (year2 * 1 - year1 * 1 + 1) + year1 * 1));
        setPosition(Math.floor(Math.random() * 1001));
        setIsSubmit(true);

    };

    const getPage = () => {
        setPage(Math.ceil(position * 1 / 40));
    }

    useEffect(() => {
        getPage();
    }, [position]);

    return (
        <div className="form-container">
            <form className="form" onSubmit={getGeneratedYear}>
                <input
                    className="input"
                    type="tel"
                    placeholder="Begining"
                    onChange={getYear1}
                />
                <input
                    className="input"
                    type="tel"
                    placeholder="End"
                    onChange={getYear2}
                />
                <button type="submit">Generate</button>
            </form>
            <Display
                isSubmit={isSubmit}
                position={position}
                generatedYear={generatedYear}
                page={page}
            />
        </div>
    );
}

export default Form;