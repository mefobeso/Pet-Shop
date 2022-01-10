import React from "react";
import { useParams } from "react-router-dom";
import {} from "../../database/product.data";
import { dataProducts } from "../../database/product.data";
export default function ProductByCategory() {
  const params = useParams();
  if (params.category === "all product") {
      
  }
  const cateFilter = dataProducts.filter((p) => p.category === params.category);
  return <div>BlaBla:{JSON.stringify(params)}</div>;
}
