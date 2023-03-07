/*export interface Product {
  id: String;
  title: String;
  condition: String;
  thumbnail_id: String;
  catalog_product_id: String;
  listing_type_id: "gold_pro";
  permalink: String;
  buying_mode: String;
  site_id: String;
  category_id: String;
  domain_id: String;
  thumbnail: String;
  currency_id: String;
  order_backend: Number;
  price: Number;
  original_price: Number;
  sale_price: null;
  sold_quantity: Number;
  available_quantity: Number;
  official_store_id: Number;
  use_thumbnail_id: Boolean;
  accepts_mercadopago: Boolean;
  tags: Array<String>;
  shipping: Object;
  stop_time: String;
  seller: Object;
  seller_address: Object;
  address: Object;
  attributes: Array<Object>;
  installments: Object;
  winner_item_id: null;
  catalog_listing: Boolean;
  discounts: null;
  promotions: null;
  differential_pricing: Object;
  inventory_id: String;
}*/

export interface Product {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: any[];
  shipping: Address;
  stop_time: Date;
  seller: Seller;
  seller_address: SellerAddress;
  address: Address;
  attributes: any[];
  installments: Address;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: null;
  differential_pricing: Address;
  inventory_id: string;
}

export interface Address {}

export interface Seller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: string;
  tags: string[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: Object;
}

export interface State {
  query: string;
  products: Product[] | [];
  selectedProduct: ProductDetailsType;
}

export interface ProductDetailsType {
  id: string;
  sold_quantity: number;
  condition: string;
  title: string;
  original_price: number;
  price: number;
  buying_mode: string;
  available_quantity: number;
  pictures: Array<{
    secure_url: string;
  }>;
  descriptions: string[];
  seller_address: SellerAddress;
  attributes: Attributes;
  error: string;
  permalink: string;
}

export type Attributes = Array<{
  value_name: string;
  name: string;
  id: string;
}>;

export type ComponentDetailsProps = {
  product: ProductDetailsType;
};

export type SellerAddress = {
  city: { id: string; name: string };
  country: { id: string; name: string };
  id: number;
  search_location: { city: Object; state: Object };
  state: { id: string; name: string };
};

export type Category = {
  site_id: string;
  country_default_time_zone: string;
  paging: Object;
  results: Product[];
  sort: Object;
  available_sorts: [];
  filters: [
    {
      id: string;
      name: string;
      type: string;
      values: [
        {
          id: string;
          name: string;
          path_from_root: [];
        }
      ];
    }
  ];
  available_filters: [];
};

export interface Filters {
  id: string;
  name: string;
  type: string;
  values: FilterValues[];
}

interface FilterValues {
  id: string;
  name: string;
  results: number;
}
