import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const manaBackColor = {
    W: 'rgb(248, 231, 185)',
    R: 'rgb(235, 159, 130)',
    U: 'rgb(179, 206, 234)',
    G: 'rgb(196, 211, 202)',
    B: 'rgb(166, 159, 157)',
};

const manaColor = {
    W: 'rgb(249, 250, 244)',
    R: 'rgb(211, 32, 42)',
    U: 'rgb(14, 104, 171)',
    G: 'rgb(0, 115, 62)',
    B: 'rgb(21, 11, 0)',
};

const BaseCard = ({ children, img, data }) => {
    const [averageColor, setAverageColor] = useState('#999999');

    useEffect(() => {
        console.log(data.length);
        if (!data) {
            getAverageColor(img, (color) => {
                setAverageColor(color);
            });
        } else if (data.length > 2) {
            setAverageColor('#F0DD99');
        } else if (data.length < 2) {
            setAverageColor(manaColor[data[0]]);
        } else if (data.length == 2) {
            setAverageColor(
                `linear-gradient(to right, ${manaColor[data[0]]}, ${
                    manaColor[data[1]]
                })`
            );
        }
    }, [img, data]);

    return <Card style={{ background: averageColor }}>{children}</Card>;
};

export default BaseCard;
const Card = styled.div`
    border: 12px solid black;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    width: 270px;
    height: 378px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    gap: 10px;
    user-select: text;
    z-index: 10;
    text-align: start;
`;

const getAverageColor = (imgSrc, callback) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imgSrc;

    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;
        let r = 0,
            g = 0,
            b = 0;

        for (let i = 0, l = data.length; i < l; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
        }

        r = Math.floor(r / (img.width * img.height));
        g = Math.floor(g / (img.width * img.height));
        b = Math.floor(b / (img.width * img.height));

        callback(`rgb(${r},${g},${b})`);
    };
};
