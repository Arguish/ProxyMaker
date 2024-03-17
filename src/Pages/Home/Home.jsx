import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageCapture from '../../Components/ImageCapture/ImageCapture';
import { generateSearchUrl } from '../../Services/Scryfall.Config';

function Home() {
    const [searchCriteria, setSearchCriteria] = useState({
        name: '',
        type: '',
        manaCost: '',
        additive: false,
        colors: [],
        notColors: [],
    });
    const [searchResult, setSearchResult] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const searchUrl = generateSearchUrl(searchCriteria);
            try {
                const response = await fetch(searchUrl);
                const data = await response.json();
                setSearchResult(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        console.log(searchCriteria);
        console.log(searchResult);
        fetchData();
    }, [searchCriteria]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchCriteria({ ...searchCriteria, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        const { name, checked, value } = event.target;
        if (name === 'colors') {
            const updatedColors = checked
                ? [...searchCriteria.colors, value]
                : searchCriteria.colors.filter((c) => c !== value);
            setSearchCriteria({ ...searchCriteria, colors: updatedColors });
        } else if (name === 'notColors') {
            const updatedNotColors = checked
                ? [...searchCriteria.notColors, value]
                : searchCriteria.notColors.filter((c) => c !== value);
            setSearchCriteria({
                ...searchCriteria,
                notColors: updatedNotColors,
            });
        } else {
            setSearchCriteria({ ...searchCriteria, [name]: checked });
        }
    };

    const handleCardClick = (cardData) => {
        setSelectedCard(cardData);
    };

    return (
        <HomeDiv>
            <ScrollDiv>
                <h1>Buscador de Cartas de Magic: The Gathering</h1>
                <SearchForm onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={searchCriteria.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Tipo:
                        <input
                            type="text"
                            name="type"
                            value={searchCriteria.type}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        manaCoste:
                        <input
                            type="text"
                            name="manaCost"
                            value={searchCriteria.manaCost}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Aditivo:
                        <input
                            type="checkbox"
                            name="additive"
                            checked={searchCriteria.additive}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                    <label>
                        Colores:
                        <CheckboxGroup>
                            {['W', 'U', 'B', 'R', 'G'].map((color) => (
                                <label key={color}>
                                    <input
                                        type="checkbox"
                                        name="colors"
                                        value={color}
                                        checked={searchCriteria.colors.includes(
                                            color
                                        )}
                                        onChange={handleCheckboxChange}
                                    />
                                    {color}
                                </label>
                            ))}
                        </CheckboxGroup>
                    </label>
                    <label>
                        Excluir Colores:
                        <CheckboxGroup>
                            {['W', 'U', 'B', 'R', 'G'].map((color) => (
                                <label key={color}>
                                    <input
                                        type="checkbox"
                                        name="notColors"
                                        value={color}
                                        checked={searchCriteria.notColors.includes(
                                            color
                                        )}
                                        onChange={handleCheckboxChange}
                                    />
                                    {color}
                                </label>
                            ))}
                        </CheckboxGroup>
                    </label>
                </SearchForm>
                {searchResult && searchResult.length > 0 && (
                    <ImageContainer>
                        {searchResult.map((card, index) => {
                            return (
                                <CardImage
                                    key={index}
                                    src={
                                        card.image_uris &&
                                        card.image_uris.normal
                                            ? card.image_uris.normal
                                            : 'https://placehold.co/200x300'
                                    }
                                    alt={card.name}
                                    onClick={() => handleCardClick(card)}
                                />
                            );
                        })}
                    </ImageContainer>
                )}
            </ScrollDiv>
            <ScrollDiv>
                <ImageCapture>
                    <h1>ProxyMaker</h1>
                </ImageCapture>
                {selectedCard && (
                    <SelectedCardInfo>
                        <h2>Detalles de la carta seleccionada:</h2>
                        <pre>{JSON.stringify(selectedCard, null, 2)}</pre>
                    </SelectedCardInfo>
                )}
            </ScrollDiv>
        </HomeDiv>
    );
}

export default Home;

const ScrollDiv = styled.div`
    width: 50%;
    overflow: scroll;
    height: 90vh;
`;

const HomeDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    label {
        margin-bottom: 10px;
    }

    input[type='text'],
    input[type='checkbox'] {
        margin-left: 10px;
    }
`;

const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`;

const CardImage = styled.img`
    width: 200px;
    height: auto;
    cursor: pointer;
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
