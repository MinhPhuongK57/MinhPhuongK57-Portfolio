import './styles/App.scss';

import React, { useEffect, useState } from 'react';

import Home from './pages/Home';
import LoadingScreen from './contents/LoadingScreen';
import WOW from 'wowjs';

function App() {
    useEffect(() => {
        new WOW.WOW({
            live: false,
            mobile: true,
        }).init();
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 8200);
    }, []);

    return <div className='container'>{loading ? <LoadingScreen /> : <Home />}</div>;
}
export default App;
