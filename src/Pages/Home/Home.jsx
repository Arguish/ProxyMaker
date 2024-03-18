import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageUpload from '../../Components/Card/ImageUpload';
import ImageDisplay from '../../Components/Card/ImageDisplay';

import CardSearch from '../../Components/CardSearch/CardSearch';

function Home() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [image, setImage] = useState(null);
    const [action, setaction] = useState(0);

    return (
        <AppDiv>
            <Header>Proxy Maker</Header>
            <HomeDiv>
                <CardSearch
                    selectCallback={setSelectedCard}
                    actionCallback={setaction}
                />

                <ScrollDiv>
                    <ImageDisplay
                        img={image}
                        componenteSeleccionado={selectedCard}
                        action={action}
                    />
                    <ImageUpload imgCallBack={setImage} />
                </ScrollDiv>
            </HomeDiv>
        </AppDiv>
    );
}

export default Home;

const AppDiv = styled.div`
    text-align: center;
    margin: 0;
    padding: 0;
`;

const Header = styled.h1`
    margin: 0;
    height: 7vh;
    color: var(--accent);
`;

const ScrollDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30%;
    overflow: scroll;
    height: 90vh;
`;

const HomeDiv = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SelectedCardInfo = styled.div`
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    max-width: 500px;
    overflow-x: auto;

    h2 {
        margin-bottom: 10px;
    }
`;
