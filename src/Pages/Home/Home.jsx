import styled from 'styled-components';
import ImageCapture from '../../Components/ImageCapture/ImageCapture';
import { findBy } from '../../Services/Mtg.Endpoints';

function Home() {
    const result = findBy({
        supertypes: 'Legendary',
        types: 'creature',
        colors: 'W,R',
    }).then((d) => {
        console.log(d);
    });
    return (
        <HomeDiv>
            <h1>Buscador</h1>
            <ImageCapture>
                <h1>ProxyMaker</h1>
            </ImageCapture>
        </HomeDiv>
    );
}

export default Home;

const HomeDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
