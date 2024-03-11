import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/carsSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const productsConfig = {
    key: "cars",
    storage,
    whitelist: ["cars"],
    // blacklist: ['isLoading', 'error'],
};

export const store = configureStore({
    reducer: {
        cars: persistReducer(productsConfig, carsReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
