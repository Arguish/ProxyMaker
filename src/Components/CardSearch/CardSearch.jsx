import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { generateSearchUrl } from '../../Services/Scryfall.Config';
import CardPreview from './CardPreview';

const CardSearch = ({ selectCallback, actionCallback }) => {
    const [searchCriteria, setSearchCriteria] = useState({
        name: '',
        type: '',
        manaCost: '',
        additive: false,
        colors: ['W'],
        notColors: [],
    });

    const [searchResult, setSearchResult] = useState([]);

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
        selectCallback(cardData);
        actionCallback(Math.random());
    };
    return (
        <ScrollDiv>
            <h1>Buscador de Cartas</h1>
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
                            <CardPreview
                                key={index}
                                card={card}
                                selectCallback={handleCardClick}
                            />
                        );
                    })}
                </ImageContainer>
            )}
        </ScrollDiv>
    );
};

export default CardSearch;

const ScrollDiv = styled.div`
    width: 70%;
    overflow: scroll;
    height: 90vh;
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
