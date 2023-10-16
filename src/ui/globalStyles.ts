import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

body, h1, h2, h3, h4, h5, h6, p, ol, ul {

  font-family: 'Inter', sans-serif;
  padding: 0;
  color: ${Color.BLACK};
  
}

body {
  margin: 0 auto;
  background-color: ${Color.WHITE};
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

button {
  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  color: #26589F;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.42rem;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  cursor: pointer;
}


a {
  text-decoration: none;
}

#root {

}

#content-wrapper { 
  margin: 0 auto;
  max-width: 1440px;
  min-width: 320px;
  padding: 20px;
}
`;

export { GlobalStyle };
