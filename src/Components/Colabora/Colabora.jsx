import React from 'react';
import styled from 'styled-components';

const ColaboraContainer = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: var(--text);
    color: var(--background);
    text-align: center;
`;

const ColaboraButton = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--accent);
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
        background-color: var(--secondary);
    }
`;

const Colabora = () => {
    return (
        <ColaboraContainer>
            <h3>Esta parte aun no esta disponible...</h3>
            <h2>¿Quieres ayudar a mejorar este proyecto?</h2>
            <p>
                ¡Tu contribución es bienvenida! Revisa nuestro repositorio en
                GitHub y considera colaborar con el proyecto.
            </p>
            <ColaboraButton
                href="https://github.com/Arguish/ProxyMaker"
                target="_blank"
            >
                Colabora en GitHub
            </ColaboraButton>
        </ColaboraContainer>
    );
};

export default Colabora;
