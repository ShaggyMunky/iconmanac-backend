export interface ProductDTO {
  productId: number;
  productName: string;
  price: number;
}

export interface OrderDTO {
  orderId: number;
  orderDate: string;
  products: ProductDTO[];
}

export interface StarProfileResponse {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  filmography: string;
}
