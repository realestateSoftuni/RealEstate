/*jshint esversion: 6 */
import './bootstrap';
import ReactDOM from 'react-dom/client';
import Main from './main.jsx';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);
