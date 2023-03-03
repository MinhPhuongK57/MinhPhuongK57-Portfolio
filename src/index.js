import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <SnackbarProvider maxSnack={3}>
        <App />
    </SnackbarProvider>,
    rootElement
);
//"https://github.com/MinhPhuongK57/MinhPhuongK57-Portfolio.git",
