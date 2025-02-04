export interface Category {
  _id: string;  
  title: string;  
  image? : {
    asset: {
        _ref: string
        _type: "image";
    }
};  
  products: number;  
}

export interface Product {
  _id: string;
  title: string;
  slug: {
    _type : "slug",
    current: string;
};
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  image? : {
    asset: {
        _ref: string
        _type: "image";
    }
};  
  category: Category;  
  description: string;
  inventory: number;
  tags: string[];
}
