import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/cars/operation";
import { selectAllCars } from "../redux/cars/selectors";
import CarCard from "../components/CarCard/CarCard";
import { CatalogItems } from "./Catalog.styled";

import Modal from "../components/Modal/Modal";
import { ModalContext } from "../context/ModalContext";

const Catalog = () => {
    const cars = useSelector(selectAllCars);
    const dispatch = useDispatch();
    const { isOpenModal } = useContext(ModalContext);

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
            {isOpenModal && <Modal />}
        </div>
    );
};

export default Catalog;
