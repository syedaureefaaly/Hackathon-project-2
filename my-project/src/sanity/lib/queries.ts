export const getAllProductsQuery = `*[_type == "products"]{
    title,
    "slug": slug.current,
    price,
    priceWithoutDiscount,
    badge,
    image {
            asset->{
              _id,
              url
            }
          },
    description,
    inventory,
    category->{
      title
    },
    tags
  }`;
  
  export const getSingleProductQuery = `*[_type == "products" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    price,
    priceWithoutDiscount,
    badge,
    image {
            asset->{
              _id,
              url
            }
          },
    description,
    inventory,
    category->{
      title
    },
    tags
  }`;
  
  export const getAllCategoriesQuery = `*[_type == "categories"]{
    _id,
    title,
    "imageUrl": image.asset->url,
    "relatedProducts": *[_type == "products" && references(^._id)]{
      _id,
      title,
      price,
      badge,
      "imageUrl": image.asset->url
    }
  }`;