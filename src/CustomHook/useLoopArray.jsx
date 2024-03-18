import React, { useState } from 'react';

const useLoopArray = (array) => {
    const [internalArray, setInternalArray] = useState(array);
    const [index, setIndex] = useState(0);

    const setArray = (value) => {
        setInternalArray(value);
    };

    const next = () => {
        setIndex((prevIndex) =>
            prevIndex === internalArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? internalArray.length - 1 : prevIndex - 1
        );
    };

    return [index, next, prev, setArray];
};

export default useLoopArray;
