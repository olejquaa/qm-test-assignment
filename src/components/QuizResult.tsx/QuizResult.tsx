import axios from "axios";
import { CardList, Title } from "components";
import React, { memo, useEffect, useState } from "react";
import { ProductsResponse } from "types";

export const QuizResult = memo(() => {
  const [resultState, setResultState] = useState<ProductsResponse>({
    isLoading: true,
    products: [],
  });

  const URL = "products.json";

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(URL).then((response) => {
        console.log("данные загружены");
        setResultState({
          isLoading: false,
          products: response.data,
        });
      });
    };
    fetchData();
    console.log("загружает данные");
  }, [setResultState]);

  return resultState.isLoading ? (
    <span>Загрузка</span>
  ) : (
    <CardList
      isLoading={resultState.isLoading}
      products={resultState.products}
    />
  );
});

{
  /* <Title
  title={"Результат"}
  subtitle={"Мы подобрали для вас наиболее подходящие средства"}
/>; */
}
