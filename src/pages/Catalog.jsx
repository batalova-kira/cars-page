import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/operation";
import { selectAllCars } from "../redux/selectors";
import CarCard from "../components/CarCard/CarCard";
import { CatalogItems } from "./Catalog.styled";

const Catalog = () => {
    const cars = useSelector(selectAllCars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    return (
        <div>
            <p>Catalog</p>
            <CatalogItems>
                {cars.map((item) => {
                    return (
                        <li key={item.id}>
                            <CarCard item={item} />
                        </li>
                    );
                })}
            </CatalogItems>
        </div>
    );
};

export default Catalog;
