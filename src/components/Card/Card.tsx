import React from "react";
import { Product } from "types";
import {
  CardImage,
  CardPrice,
  CardTitle,
  FavoritesImage,
  StyledCard,
} from "./styles";

export const Card = ({ id, title, image, price, oldPrice }: Product) => {
  return (
    <>
      <StyledCard>
        <CardImage $imageUrl={image}>
          <FavoritesImage
            src="./images/favorites.svg"
            alt="Favorites"
          ></FavoritesImage>
        </CardImage>
        <CardTitle>{title}</CardTitle>
        <CardPrice $oldPrice={oldPrice}>{price}</CardPrice>
      </StyledCard>
    </>
  );
};
