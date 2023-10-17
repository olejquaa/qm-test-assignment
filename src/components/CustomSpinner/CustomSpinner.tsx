import React from "react";
import { Spinner } from "./styles";

export const CustomSpinner = () => {
  return (
    <Spinner>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Spinner>
  );
};
