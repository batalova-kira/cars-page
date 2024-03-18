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
// import { makesReducer } from "./cars/makesSlice";

const carsConfig = {
    key: "cars",
    storage,
    whitelist: ["favorite"],
    // blacklist: ['isLoading', 'error'],
};

export const store = configureStore({
    reducer: {
        cars: persistReducer(carsConfig, carsReducer),
        // makes: persistReducer(carsConfig, makesReducer),
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
