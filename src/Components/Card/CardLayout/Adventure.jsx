import React, { useState, useEffect } from 'react';
import BaseCard from '../BaseCard';
import styled from 'styled-components';
import DynamicFontSizeParagraph from './DynamicFontSizeParagraph';
import TextWithSymbols from './TextWithSymbols';
import FlexNormal from './FlexNormal';

const Adventure = ({ img, data, customName }) => {
    if (!data) {
        return;
    }

    const [card1, setcard1] = useState(data.card_faces[0]);
    const [card2, setcard2] = useState(data.card_faces[1]);
    const [isPlaneswalker, setIsPlaneswalker] = useState(false);
    const [abilityText, setAbilityText] = useState([]);

    useEffect(() => {
        if (card1) {
            // Comprobar si el tipo de línea contiene la palabra "Planeswalker"
            if (card1.type_line.includes('Planeswalker')) {
                setIsPlaneswalker(true);
                parseAbilityText(card1.oracle_text);
            } else {
                setIsPlaneswalker(false);
                setAbilityText([card1.oracle_text]);
            }
        }
    }, [card1]);

    const parseAbilityText = (text) => {
        // Divide el texto en secciones basadas en el patrón +X/-X: Texto
        const sections = text.split('\n');
        const result = sections.map((section, index) => {
            if (/^[+|-|\u2212]?\d+:/.test(section)) {
                // Dividir la sección en valor y descripción
                const [value, description] = section.split(':');

                return (
                    <AbilitySection key={index}>
                        <AbilityValue>{value}</AbilityValue>
                        <DynamicFontSizeParagraph text={description} />
                    </AbilitySection>
                );
            } else {
                return <DynamicFontSizeParagraph text={section} key={index} />;
            }
        });
        setAbilityText(result);
    };

    return (
        <BaseCard img={img} data={data.colors}>
            <Card style={{ backgroundImage: `url(${img})` }}>
                <Header>
                    <ManaCost>
                        <TextWithSymbols text={card1.mana_cost} svgSize={15} />
                    </ManaCost>
                    <TitleDiv>
                        <Title>{customName || card1.name}</Title>
                        {customName && <Title2>{card1.name}</Title2>}
                    </TitleDiv>
                </Header>

                {card1.power && card1.toughness && (
                    <Force>
                        {card1.power} / {card1.toughness}
                    </Force>
                )}
                {card1.loyalty && <Loyalty>{card1.loyalty}</Loyalty>}
                <AdventureDiv>
                    <FlexNormal data={card2} />
                    <SpecialComponent>
                        <strong>{card1.type_line}</strong>
                        {abilityText.map((section, index) => (
                            <div key={index}>
                                {isPlaneswalker ? (
                                    <div>{section}</div>
                                ) : (
                                    <TextWithSymbols
                                        text={section}
                                        svgSize={12}
                                    />
                                )}
                            </div>
                        ))}
                    </SpecialComponent>
                </AdventureDiv>
            </Card>
        </BaseCard>
    );
};

export default Adventure;

const AdventureDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const Card = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: relative;
    gap: 10px;
    user-select: text;
    background-size: cover;
    background-position: center;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    margin: 0;
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
`;

const Title = styled.h3`
    margin: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
`;

const Title2 = styled.h3`
    font-size: 9px;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 5px;
    border-radius: 5px;
`;

const ManaCost = styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 5px;
`;

const AbilitySection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const AbilityValue = styled.div`
    border: 2px solid black;
    padding: 2px 5px;
    background-color: white;
    color: black;
    border-radius: 0px 20px 20px 0px;
`;

const Force = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 5px;
    right: 5px;
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 1px 5px;
    z-index: 100;
    border-radius: 5px;
    font-weight: 700;
`;

const Loyalty = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 2px 5px;
    z-index: 100;
    border-radius: 0px 0px 20px 20px;
`;

const SpecialComponent = styled.div`
    font-size: 10px;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
    padding: 7px;
    padding-bottom: 12px;
`;
