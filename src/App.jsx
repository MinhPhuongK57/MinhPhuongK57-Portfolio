import React, { useEffect } from 'react';
import './styles/App.scss';
import Home from './pages/Home';
import WOW from 'wowjs';

function App() {
    useEffect(() => {
        new WOW.WOW({
            live: false,
            // mobile: false
        }).init();
    }, []);

    return (
        <div className='container'>
            <Home />
        </div>
    );
}
export default App;
