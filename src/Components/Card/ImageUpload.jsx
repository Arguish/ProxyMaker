import React, { useState } from 'react';
import styled from 'styled-components';

const ImageUpload = ({ imgCallBack }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = (event) => {
                setImage(event.target.result);
                if (imgCallBack) {
                    imgCallBack(event.target.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <UploaderDiv>
            {/* {image && <ImgUp src={image} alt="Uploaded" />} */}
            <h4>
                {'Personalizar: '}
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </h4>
        </UploaderDiv>
    );
};

export default ImageUpload;

const UploaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImgUp = styled.img`
    border-radius: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    width: 100px;
`;
