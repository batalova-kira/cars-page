import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";

import { App } from "./components/App";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
// import reportWebVitals from "../reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { ModalContextProvider } from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ModalContextProvider>
            <BrowserRouter basename="/cars-page">
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <App />
                        <GlobalStyle />
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </ModalContextProvider>
    </React.StrictMode>
);

// reportWebVitals();
