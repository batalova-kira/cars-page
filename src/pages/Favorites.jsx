import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../redux/cars/selectors";
import { CatalogItems } from "./Catalog.styled";
import CarCard from "../components/CarCard/CarCard";
import { FaviroteWrapper } from "./Favorites.styled";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "../components/Modal/Modal";

const Favorites = () => {
    const cars = useSelector(selectFavoriteCars);
    const { isOpenModal } = useContext(ModalContext);

    return (
        <FaviroteWrapper>
            <CatalogItems>
                {cars.map((item) => {
                    return (
                        <li key={item.id}>
                            <CarCard
                                item={item}
                                isFavorite={cars.some(
                                    (favorite) => favorite.id === item.id
                                )}
                            />
                        </li>
                    );
                })}
            </CatalogItems>
            {isOpenModal && <Modal />}
        </FaviroteWrapper>
    );
};

export default Favorites;
