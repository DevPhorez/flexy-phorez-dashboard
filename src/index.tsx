// @ts-ignore
import App from "./App.tsx";

import 'bootstrap/dist/css/bootstrap.min.css'

import * as React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </React.StrictMode>
);