import React, { useState, useEffect } from 'react';
import ImageCapture from '../ImageCapture/ImageCapture';
import styled from 'styled-components';
import Normal from './CardLayout/Normal';
import Transform from './CardLayout/Transform.jsx';
import Split from './CardLayout/Split.jsx';
import Flip from './CardLayout/Flip.jsx';
import ModalDFC from './CardLayout/ModalDFC.jsx';
import Meld from './CardLayout/Meld.jsx';
import Leveler from './CardLayout/Leveler.jsx';
import ClassCard from './CardLayout/ClassCard.jsx';
import Case from './CardLayout/Case.jsx';
import Saga from './CardLayout/Saga.jsx';
import Adventure from './CardLayout/Adventure.jsx';
import Mutate from './CardLayout/Mutate.jsx';
import Prototype from './CardLayout/Prototype.jsx';
import Battle from './CardLayout/Battle.jsx';
import Planar from './CardLayout/Planar.jsx';
import Scheme from './CardLayout/Scheme.jsx';
import Vanguard from './CardLayout/Vanguard.jsx';
import Token from './CardLayout/Token.jsx';
import DoubleFacedToken from './CardLayout/DoubleFacedToken.jsx';
import Emblem from './CardLayout/Emblem.jsx';
import Augment from './CardLayout/Augment.jsx';
import Host from './CardLayout/Host.jsx';
import ArtSeries from './CardLayout/ArtSeries.jsx';
import ReversibleCard from './CardLayout/ReversibleCard.jsx';

const ImageDisplay = ({ img, componenteSeleccionado, action }) => {
    const [selectedLayout, setSelectedLayout] = useState(null);
    const [inputText, setInputText] = useState('');
    const [normalData, setNormalData] = useState(null);
    const [splitData, setSplitData] = useState(null);
    const [flipData, setFlipData] = useState(null);
    const [transformData, setTransformData] = useState(null);
    const [modalDFCData, setModalDFCData] = useState(null);
    const [meldData, setMeldData] = useState(null);
    const [levelerData, setLevelerData] = useState(null);
    const [classCardData, setClassCardData] = useState(null);
    const [caseData, setCaseData] = useState(null);
    const [sagaData, setSagaData] = useState(null);
    const [adventureData, setAdventureData] = useState(null);
    const [mutateData, setMutateData] = useState(null);
    const [prototypeData, setPrototypeData] = useState(null);
    const [battleData, setBattleData] = useState(null);
    const [planarData, setPlanarData] = useState(null);
    const [schemeData, setSchemeData] = useState(null);
    const [vanguardData, setVanguardData] = useState(null);
    const [tokenData, setTokenData] = useState(null);
    const [doubleFacedTokenData, setDoubleFacedTokenData] = useState(null);
    const [emblemData, setEmblemData] = useState(null);
    const [augmentData, setAugmentData] = useState(null);
    const [hostData, setHostData] = useState(null);
    const [artSeriesData, setArtSeriesData] = useState(null);
    const [reversibleCardData, setReversibleCardData] = useState(null);

    console.log(componenteSeleccionado);
    useEffect(() => {
        if (componenteSeleccionado) {
            // Preparar y establecer los datos específicos basados en el layout
            switch (componenteSeleccionado.layout) {
                case 'normal':
                    resetAllDataExcept('normal');
                    setNormalData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'transform':
                    resetAllDataExcept('transform');
                    setTransformData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'split':
                    resetAllDataExcept('split');
                    setSplitData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'flip':
                    resetAllDataExcept('flip');
                    setFlipData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'modal_dfc':
                    resetAllDataExcept('modal_dfc');
                    setModalDFCData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'meld':
                    resetAllDataExcept('meld');
                    setMeldData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'leveler':
                    resetAllDataExcept('leveler');
                    setLevelerData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'class':
                    resetAllDataExcept('class');
                    setClassCardData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'case':
                    resetAllDataExcept('case');
                    setCaseData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'saga':
                    resetAllDataExcept('saga');
                    setSagaData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'adventure':
                    resetAllDataExcept('adventure');
                    setAdventureData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'mutate':
                    resetAllDataExcept('mutate');
                    setMutateData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'prototype':
                    resetAllDataExcept('prototype');
                    setPrototypeData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'battle':
                    resetAllDataExcept('battle');
                    setBattleData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'planar':
                    resetAllDataExcept('planar');
                    setPlanarData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'scheme':
                    resetAllDataExcept('scheme');
                    setSchemeData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'vanguard':
                    resetAllDataExcept('vanguard');
                    setVanguardData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'token':
                    resetAllDataExcept('token');
                    setTokenData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'double_faced_token':
                    resetAllDataExcept('double_faced_token');
                    setDoubleFacedTokenData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'emblem':
                    resetAllDataExcept('emblem');
                    setEmblemData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'augment':
                    resetAllDataExcept('augment');
                    setAugmentData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'host':
                    resetAllDataExcept('host');
                    setHostData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'art_series':
                    resetAllDataExcept('art_series');
                    setArtSeriesData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                case 'reversible_card':
                    resetAllDataExcept('reversible_card');
                    setReversibleCardData(componenteSeleccionado);
                    setSelectedLayout(componenteSeleccionado.layout);
                    break;
                default:
                    resetAllDataExcept('');
                    setSelectedLayout(null);
                    setInputText(''); // Opcional: restablecer el valor si es necesario
                    break;
            }
        } else {
            setSelectedLayout(null);
            setInputText(''); // Limpiar o restablecer el estado cuando componenteSeleccionado es null
        }
    }, [componenteSeleccionado]);

    function resetAllDataExcept(except) {
        if (except !== 'normal') setNormalData(null);
        if (except !== 'split') setSplitData(null);
        if (except !== 'flip') setFlipData(null);
        if (except !== 'transform') setTransformData(null);
        if (except !== 'modal_dfc') setModalDFCData(null);
        if (except !== 'meld') setMeldData(null);
        if (except !== 'leveler') setLevelerData(null);
        if (except !== 'class') setClassCardData(null);
        if (except !== 'case') setCaseData(null);
        if (except !== 'saga') setSagaData(null);
        if (except !== 'adventure') setAdventureData(null);
        if (except !== 'mutate') setMutateData(null);
        if (except !== 'prototype') setPrototypeData(null);
        if (except !== 'battle') setBattleData(null);
        if (except !== 'planar') setPlanarData(null);
        if (except !== 'scheme') setSchemeData(null);
        if (except !== 'vanguard') setVanguardData(null);
        if (except !== 'token') setTokenData(null);
        if (except !== 'double_faced_token') setDoubleFacedTokenData(null);
        if (except !== 'emblem') setEmblemData(null);
        if (except !== 'augment') setAugmentData(null);
        if (except !== 'host') setHostData(null);
        if (except !== 'art_series') setArtSeriesData(null);
        if (except !== 'reversible_card') setReversibleCardData(null);
    }

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <ProxyDiv>
            <ImageCapture action={action}>
                <div>
                    {selectedLayout === 'normal' && (
                        <Normal
                            key="normal"
                            img={img}
                            data={normalData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'split' && (
                        <Split
                            key="split"
                            img={img}
                            data={splitData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'flip' && (
                        <Flip
                            key="flip"
                            img={img}
                            data={flipData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'transform' && (
                        <Transform
                            key="transform"
                            img={img}
                            data={transformData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'modal_dfc' && (
                        <ModalDFC
                            key="modal_dfc"
                            img={img}
                            data={modalDFCData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'meld' && (
                        <Meld
                            key="meld"
                            img={img}
                            data={meldData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'leveler' && (
                        <Leveler
                            key="leveler"
                            img={img}
                            data={levelerData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'class' && (
                        <ClassCard
                            key="class"
                            img={img}
                            data={classData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'case' && (
                        <Case
                            key="case"
                            img={img}
                            data={caseData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'saga' && (
                        <Saga
                            key="saga"
                            img={img}
                            data={sagaData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'adventure' && (
                        <Adventure
                            key="adventure"
                            img={img}
                            data={adventureData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'mutate' && (
                        <Mutate
                            key="mutate"
                            img={img}
                            data={mutateData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'prototype' && (
                        <Prototype
                            key="prototype"
                            img={img}
                            data={prototypeData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'battle' && (
                        <Battle
                            key="battle"
                            img={img}
                            data={battleData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'planar' && (
                        <Planar
                            key="planar"
                            img={img}
                            data={planarData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'scheme' && (
                        <Scheme
                            key="scheme"
                            img={img}
                            data={schemeData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'vanguard' && (
                        <Vanguard
                            key="vanguard"
                            img={img}
                            data={vanguardData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'token' && (
                        <Token
                            key="token"
                            img={img}
                            data={tokenData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'double_faced_token' && (
                        <DoubleFacedToken
                            key="double_faced_token"
                            img={img}
                            data={doubleFacedTokenData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'emblem' && (
                        <Emblem
                            key="emblem"
                            img={img}
                            data={emblemData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'augment' && (
                        <Augment
                            key="augment"
                            img={img}
                            data={augmentData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'host' && (
                        <Host
                            key="host"
                            img={img}
                            data={hostData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'art_series' && (
                        <ArtSeries
                            key="art_series"
                            img={img}
                            data={artSeriesData}
                            customName={inputText}
                        />
                    )}
                    {selectedLayout === 'reversible_card' && (
                        <ReversibleCard
                            key="reversible_card"
                            img={img}
                            data={reversibleCardData}
                            customName={inputText}
                        />
                    )}
                </div>
            </ImageCapture>
            <h4>
                Nombre:
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Introduce el texto aquí"
                />
            </h4>
        </ProxyDiv>
    );
};

export default ImageDisplay;

const ProxyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
`;
