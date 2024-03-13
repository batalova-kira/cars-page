import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/cars/operation";
import { selectAllCars } from "../redux/cars/selectors";
import CarCard from "../components/CarCard/CarCard";
import { BtnPagination, CatalogItems } from "./Catalog.styled";

import Modal from "../components/Modal/Modal";
import { ModalContext } from "../context/ModalContext";

const Catalog = () => {
    const cars = useSelector(selectAllCars);
    const dispatch = useDispatch();
    const { isOpenModal } = useContext(ModalContext);
    const [visibleCars, setVisibleCars] = useState(12);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    const loadMore = () => {
        setVisibleCars((prev) => prev + 12);
    };

    return (
        <div>
            <p>Catalog</p>
            <CatalogItems>
                {cars.slice(0, visibleCars).map((item) => {
                    return (
                        <li key={item.id}>
                            <CarCard item={item} />
                        </li>
                    );
                })}
            </CatalogItems>
            {cars.length > visibleCars && (
                <BtnPagination onClick={loadMore}>Load More</BtnPagination>
            )}
            {isOpenModal && <Modal />}
        </div>
    );
};

export default Catalog;
