import { Card } from "components/Card/Card";
import React, { memo, useEffect, useState } from "react";
import { Product } from "types";
import { StyledCardList, StyledPagination } from "./styles";
import { Title } from "components/Title/Title";
import { PaginationControl } from "react-bootstrap-pagination-control";

interface Props {
  isLoading: boolean;
  products: Product[];
}

export const CardList = memo(({ isLoading, products }: Props) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = currentProducts.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    setCurrentProducts(products);
  }, [setCurrentProducts]);

  return (
    <>
      <Title
        title={"Результат"}
        subtitle={"Мы подобрали для вас наиболее подходящие средства"}
      />
      <StyledCardList>
        {currentCards.map(({ id, title, image, price, oldPrice }) => (
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
      <StyledPagination style={{ display: "flex" }}>
        <PaginationControl
          page={currentPage}
          between={3}
          total={products.length - 1}
          limit={10}
          changePage={(page) => {
            setCurrentPage(page);
          }}
          ellipsis={1}
        />
      </StyledPagination>
    </>
  );
});
