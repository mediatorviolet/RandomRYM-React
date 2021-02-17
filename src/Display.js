import React from 'react';
import Result from './Result';

function Display({isSubmit, position, generatedYear, page}) {
    if (isSubmit) {
        return (<Result
            position={position}
            generatedYear={generatedYear}
            page={page}
        />
        );
    }
    return '';
}

export default Display;