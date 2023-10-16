// Questions

export interface QuestionsResponse {
  isLoading: boolean;
  questions: Question[];
}

export interface Question {
  id: string;
  title: string;
  options: string[];
}

// Products

export interface ProductsResponse {
  isLoading: boolean;
  products: Product[];
}

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
}
