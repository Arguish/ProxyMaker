import React from 'react';
import Normal from './Normal';

const Host = ({ img, data, customName }) => {
    return (
        <>
            <Normal
                key="normal"
                img={img}
                data={data}
                customName={customName}
            />
        </>
    );
};

export default Host;
