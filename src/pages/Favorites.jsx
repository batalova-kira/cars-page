import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../redux/cars/selectors";
import { CatalogItems } from "./Catalog.styled";
import CarCard from "../components/CarCard/CarCard";
import { FaviroteWrapper } from "./Favorites.styled";

const Favorites = () => {
    const cars = useSelector(selectFavoriteCars);

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
        </FaviroteWrapper>
    );
};

export default Favorites;
