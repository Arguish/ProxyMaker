import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useLoopArray from '../../CustomHook/useLoopArray';

const CardPreview = ({ card, selectCallback }) => {
    const [ismulti, setIsmulti] = useState(false);
    const [index, next, prev, setArray] = useLoopArray([]);
    const [url, setUrl] = useState('');

    useEffect(() => {
        handlePreview();
    }, [index, card]);

    const handlePreview = () => {
        if (card.image_uris) {
            setUrl(card.image_uris.normal);
        } else if (card.card_faces) {
            setIsmulti(true);
            setArray(card.card_faces);
            setUrl(card.card_faces[index].image_uris.normal);
        } else {
            setUrl('https://placehold.co/200x300');
        }
    };

    return (
        <CardContainer>
            {ismulti && (
                <Button onClick={next}>
                    <span className="material-symbols-outlined">
                        settings_backup_restore
                    </span>
                </Button>
            )}
            <CardImage
                src={url}
                alt={card.name}
                onClick={() => {
                    selectCallback(card);
                }}
            />
        </CardContainer>
    );
};

export default CardPreview;

const CardContainer = styled.div`
    position: relative;
`;

const CardImage = styled.img`
    border-radius: 10px;
    width: 200px;
    height: auto;
    cursor: pointer;
`;

const Button = styled.div`
    user-select: none;
    width: 30px;
    background-color: var(--accent);
    color: var(--background);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50px;
    top: 120px;
    right: 10px;
    z-index: 1;
    :hover {
        background-color: darkgrey;
    }
`;
