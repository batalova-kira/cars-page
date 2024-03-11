import React, { useContext } from "react";
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
import { ModalContext } from "../../context/ModalContext";

const CarCard = ({ item }) => {
    const { openModal } = useContext(ModalContext);
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
    return (
        <WrapperCard>
            <WrapperImg>
                <CardImg
                    src={
                        img ||
                        photoLink ||
                        "https://images.pexels.com/photos/1592384"
                    }
                    alt={description}
                />
            </WrapperImg>
            <WrapperTitle>
                <CardTitle>
                    {make} <CardColorActive>{model}</CardColorActive>, {year}
                </CardTitle>
                <CardPrice>{rentalPrice}</CardPrice>
            </WrapperTitle>
            <WrapperText>
                <CardItemText>{city}</CardItemText>
                <CardSeparator>|</CardSeparator>
                <CardItemText>{country}</CardItemText>
                <CardSeparator>|</CardSeparator>
                <CardItemText>{rentalCompany}</CardItemText>
                <CardSeparator>|</CardSeparator>
                {isPremium ? (
                    <>
                        <CardItemText>Premium</CardItemText>
                        <CardItemText>{type}</CardItemText>
                    </>
                ) : (
                    <CardItemText>{type}</CardItemText>
                )}
                <CardSeparator>|</CardSeparator>
                <CardItemText>{model}</CardItemText>
                <CardSeparator>|</CardSeparator>
                <CardItemText>{id}</CardItemText>
                <CardSeparator>|</CardSeparator>
                <CardItemText>{firstTwoWords}</CardItemText>
            </WrapperText>
            <WrapperBtn>
                <CardMainBtn
                    type="button"
                    onClick={() =>
                        openModal({
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
                        })
                    }
                >
                    Learn more
                </CardMainBtn>
            </WrapperBtn>
        </WrapperCard>
    );
};

export default CarCard;
