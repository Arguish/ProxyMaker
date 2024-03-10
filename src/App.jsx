import { BrowserRouter } from 'react-router-dom';
import Public from './Routes/Public/Public';
import ContextProvider from './Context/Context/ContextProvider';

function App() {
    return (
        <>
            <ContextProvider>
                <BrowserRouter>
                    <Public> </Public>
                </BrowserRouter>
            </ContextProvider>
        </>
    );
}

export default App;
