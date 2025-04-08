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
  lastName: string | null;
  dob: Date | null;
  height: number;
  image: string | null;
  filmography: string | null;
  linkedTalentId: string | null;
  firstScene: string | null;
  latestScene: string | null;
}
