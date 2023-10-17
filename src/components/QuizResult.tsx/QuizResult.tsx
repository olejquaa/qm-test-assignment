import axios from "axios";
import { CardList, CustomSpinner } from "components";
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
        setResultState({
          isLoading: false,
          products: response.data,
        });
      });
    };
    fetchData();
  }, [setResultState]);

  return resultState.isLoading ? (
    <CustomSpinner />
  ) : (
    <CardList
      isLoading={resultState.isLoading}
      products={resultState.products}
    />
  );
});
