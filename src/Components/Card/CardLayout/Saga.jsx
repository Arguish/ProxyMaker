import React, { useState, useEffect } from 'react';
import BaseCard from '../BaseCard';
import styled from 'styled-components';
import DynamicFontSizeParagraph from './DynamicFontSizeParagraph';
import TextWithSymbols from './TextWithSymbols';

const Normal = ({ img, data, customName }) => {
    if (!data) {
        return;
    }
    const [abilityText, setAbilityText] = useState([]);

    useEffect(() => {
        if (data) {
            parseAbilityText(data.oracle_text);
        }
    }, [data]);

    const parseAbilityText = (text) => {
        const sections = text.split('\n');
        const result = sections.map((section, index) => {
            if (section.includes('\u2014')) {
                // Dividir la sección en valor y descripción
                const [value, description] = section.split('—');
                console.log(value);
                console.log(description);

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
                        <TextWithSymbols text={data.mana_cost} svgSize={15} />
                    </ManaCost>
                    <TitleDiv>
                        <Title>{customName || data.name}</Title>
                        {customName && <Title2>{data.name}</Title2>}
                    </TitleDiv>
                </Header>

                {data.power && data.toughness && (
                    <Force>
                        {data.power} / {data.toughness}
                    </Force>
                )}
                {data.loyalty && <Loyalty>{data.loyalty}</Loyalty>}

                <SpecialComponent>
                    <strong>{data.type_line}</strong>
                    {abilityText.map((section, index) => (
                        <div key={index}>
                            {true ? (
                                <div>{section}</div>
                            ) : (
                                <TextWithSymbols text={section} svgSize={12} />
                            )}
                        </div>
                    ))}
                </SpecialComponent>
            </Card>
        </BaseCard>
    );
};

export default Normal;

const Card = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
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
    position: absolute;
    width: 45%;
    font-size: 10px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
    padding: 7px;
    padding-bottom: 12px;
`;
