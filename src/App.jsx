import './styles/App.scss';

import React, { useEffect } from 'react';

import Home from './pages/Home';
import WOW from 'wowjs';

// import LoadingScreen from 'contents/LoadingScreen';


function App() {
    useEffect(() => {
        new WOW.WOW({
            live: false,
            mobile: true,
        }).init();
    }, []);

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 8200);
    // }, []);

    // return <div className='container'>{loading ? <LoadingScreen /> : <Home />}</div>;
    return (
        <div className='container'>
            <Home />
        </div>
    );
}
export default App;
