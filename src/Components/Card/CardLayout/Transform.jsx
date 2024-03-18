import React, { useEffect } from 'react';
import Normal from './Normal';
import styled from 'styled-components';
import useLoopArray from '../../../CustomHook/useLoopArray';

const Transform = ({ img, data, customName }) => {
    const [index, next, prev, setArray] = useLoopArray([]);
    if (!data) {
        return;
    }

    useEffect(() => {
        setArray(data.card_faces);
    }, [data]);

    console.log(data);
    return (
        <TransformDiv onClick={next}>
            {data && (
                <Normal
                    img={img}
                    data={data.card_faces[index]}
                    customName={customName}
                />
            )}
        </TransformDiv>
    );
};

export default Transform;

const TransformDiv = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
`;
