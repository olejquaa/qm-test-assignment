import { Card } from "components/Card/Card";
import { wrap } from "module";
import React, { memo } from "react";
import { Product } from "types";
import { StyledCardList } from "./styles";
import { Title } from "components/Title/Title";

interface Props {
  isLoading: boolean;
  products: Product[];
}

export const CardList = memo(({ products }: Props) => {
  return (
    <>
      <Title
        title={"Результат"}
        subtitle={"Мы подобрали для вас наиболее подходящие средства"}
      />
      <StyledCardList>
        {products.map(({ id, title, image, price, oldPrice }) => (
          <Card
            id={id}
            title={title}
            image={image}
            price={price}
            oldPrice={oldPrice}
            key={id}
          />
        ))}
      </StyledCardList>
    </>
  );
});
