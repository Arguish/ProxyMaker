import React, { useState } from 'react';
import FlexNormal from './FlexNormal';
import styled from 'styled-components';
import BaseCard from '../BaseCard';

const Split = ({ img, data, customName }) => {
    if (!data) {
        return;
    }

    const [card1, setcard1] = useState(data.card_faces[0]);
    const [card2, setcard2] = useState(data.card_faces[1]);
    return (
        <BaseCard data={data.colors}>
            <SplitDiv>
                <FlexNormal img={img} data={card1} />
                <FlexNormal img={img} data={card2} />
            </SplitDiv>
        </BaseCard>
    );
};

export default Split;

const SplitDiv = styled.div`
    position: absolute;
    bottom: 13%;
    left: -17%;
    border: 1px solid red;
    width: 390px;
    height: 290px;
    display: flex;
    flex-direction: row;
    transform: rotate(-90deg);
`;
