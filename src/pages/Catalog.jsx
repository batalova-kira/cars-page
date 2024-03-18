import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, fetchMore } from "../redux/cars/operation";
import {
    selectAllCars,
    selectCurrentPage,
    selectFavoriteCars,
} from "../redux/cars/selectors";
import CarCard from "../components/CarCard/CarCard";
import { BtnPagination, CatalogItems } from "./Catalog.styled";

import Modal from "../components/Modal/Modal";
import { ModalContext } from "../context/ModalContext";

const Catalog = () => {
    const cars = useSelector(selectAllCars);
    const dispatch = useDispatch();
    const { isOpenModal } = useContext(ModalContext);
    const currentPage = useSelector(selectCurrentPage);
    const favoriteCars = useSelector(selectFavoriteCars);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    const loadMore = () => {
        dispatch(fetchMore(currentPage + 1));
    };

    return (
        <div>
            <CatalogItems>
                {cars.map((item) => {
                    return (
                        <li key={item.id}>
                            <CarCard
                                item={item}
                                isFavorite={favoriteCars.some(
                                    (favorite) => favorite.id === item.id
                                )}
                            />
                        </li>
                    );
                })}
            </CatalogItems>
            {currentPage <= 3 && (
                <BtnPagination onClick={loadMore}>Load More</BtnPagination>
            )}
            {isOpenModal && <Modal />}
        </div>
    );
};

export default Catalog;
