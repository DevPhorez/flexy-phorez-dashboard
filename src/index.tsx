// @ts-ignore
import App from "./App.tsx";

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import * as React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </React.StrictMode>
    </BrowserRouter>
);