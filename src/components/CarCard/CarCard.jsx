import React from "react";
import {
    CardColorActive,
    CardImg,
    CardItemText,
    CardMainBtn,
    CardPrice,
    CardSeparator,
    CardTitle,
    WrapperBtn,
    WrapperCard,
    WrapperImg,
    WrapperText,
    WrapperTitle,
} from "./CarCard.styled";

const CarCard = ({ item }) => {
    const parts = item.address.split(",");

    const city = parts[1].trim();
    const country = parts[2].trim();

    const isPremium = item.accessories.some((accessory) =>
        accessory.toLowerCase().includes("premium")
    );

    const firstTwoWords = item.accessories[0].split(" ").slice(0, 2).join(" ");

    return (
        <WrapperCard>
            <WrapperImg>
                <CardImg
                    src={
                        item.img ||
                        item.photoLink ||
                        "https://images.pexels.com/photos/1592384"
                    }
                    alt={item.description}
                />
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
                <CardSeparator>|</CardSeparator>
                {isPremium ? (
                    <>
                        <CardItemText>Premium</CardItemText>
                        <CardItemText>{item.type}</CardItemText>
                    </>
                ) : (
                    <CardItemText>{item.type}</CardItemText>
                )}
                <CardSeparator>|</CardSeparator>
                <CardItemText>{item.model}</CardItemText>
                <CardSeparator>|</CardSeparator>
                <CardItemText>{item.id}</CardItemText>
                <CardSeparator>|</CardSeparator>
                <CardItemText>{firstTwoWords}</CardItemText>
            </WrapperText>
            <WrapperBtn>
                <CardMainBtn type="button">Learn more</CardMainBtn>
            </WrapperBtn>
        </WrapperCard>
    );
};

export default CarCard;
