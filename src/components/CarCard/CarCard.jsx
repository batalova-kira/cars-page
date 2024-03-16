import React, { useContext } from "react";
import {
    CardColorActive,
    CardImg,
    CardItemText,
    CardMainBtn,
    CardPrice,
    CardTitle,
    WrapperBtn,
    WrapperCard,
    WrapperImg,
    WrapperText,
    WrapperTitle,
} from "./CarCard.styled";
import { ModalContext } from "../../context/ModalContext";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/cars/carsSlice";

const CarCard = ({ item }) => {
    const { openModal } = useContext(ModalContext);
    const dispatch = useDispatch();
    const parts = item.address.split(",");

    const city = parts[1].trim();
    const country = parts[2].trim();

    const isPremium = item.accessories.some((accessory) =>
        accessory.toLowerCase().includes("premium")
    );

    const firstTwoWords = item.accessories[0].split(" ").slice(0, 2).join(" ");
    const {
        img,
        photoLink,
        description,
        make,
        model,
        year,
        rentalPrice,
        rentalCompany,
        type,
        id,
    } = item;

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(toggleFavorite(item));
    };

    return (
        <WrapperCard>
            <WrapperImg>
                <CardImg src={img || photoLink} alt={description} />
            </WrapperImg>
            <button type="button" onClick={handleClick}>
                favorite
            </button>
            <WrapperTitle>
                <CardTitle>
                    {make} <CardColorActive>{model}</CardColorActive>, {year}
                </CardTitle>
                <CardPrice>{rentalPrice}</CardPrice>
            </WrapperTitle>
            <WrapperText>
                <CardItemText>
                    {city} | {country} | {rentalCompany} |
                    {isPremium ? " Premium " + type : type} | {model} |{id} |
                    {firstTwoWords}
                </CardItemText>
            </WrapperText>
            <WrapperBtn>
                <CardMainBtn type="button" onClick={() => openModal(item)}>
                    Learn more
                </CardMainBtn>
            </WrapperBtn>
        </WrapperCard>
    );
};

export default CarCard;
