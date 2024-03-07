import React from "react";
import {
    CardColorActive,
    CardImg,
    CardItemText,
    CardPrice,
    CardSeparator,
    CardTitle,
    WrapperCard,
    WrapperImg,
    WrapperText,
    WrapperTitle,
} from "./CarCard.styled";

const CarCard = ({ item }) => {
    const parts = item.address.split(",");

    const city = parts[1].trim();
    const country = parts[2].trim();

    return (
        <WrapperCard>
            <WrapperImg>
                <CardImg src={item.img} alt={item.description} />
            </WrapperImg>
            <WrapperTitle>
                <CardTitle>
                    {item.make} <CardColorActive>{item.model}</CardColorActive>,{" "}
                    {item.year}
                </CardTitle>
                <CardPrice>{item.rentalPrice}</CardPrice>
            </WrapperTitle>
            <WrapperText>
                <CardItemText>{city}</CardItemText>
                <CardSeparator>|</CardSeparator>
                <CardItemText>{country}</CardItemText>
                <CardSeparator>|</CardSeparator>
                <CardItemText>{item.rentalCompany}</CardItemText>
                <CardItemText>{item.type}</CardItemText>
            </WrapperText>
        </WrapperCard>
    );
};

export default CarCard;
