import React from 'react';

const LoadingScreen = () => {
    return (
        <div className='loadingScreen'>
            <div className='loadingScreen__loader'>
                <div className='loadingScreen__loader--inner one'></div>
                <div className='loadingScreen__loader--inner two'></div>
                <div className='loadingScreen__loader--inner three'></div>
            </div>
            <div className='loadingScreen__typed'>
                <h1 className='loadingScreen__typed--out'>I'm Minh Phuong. Welcome to my portfolio.</h1>
                <h1 className='loadingScreen__typed--out loadingScreen__typed--outMobile'>I'm Minh Phuong</h1>
                <p className='loadingScreen__typed--noti'>
                    Website uses quite bright colors, please reduce the brightness so as not to be dazzled!!
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
