//tsrafce
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductModel } from "../models/ProductModel";
import axios from "axios";

type Props = {};

const Home = (props: Props) => {
  const [arrProduct, setArrProduct] = useState<ProductModel[]>([]);

  const getAllProductApi = async () => {
    const res = await axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    })
    setArrProduct(res.data.content)
  };

  useEffect(() => {
    getAllProductApi();
  }, []);

  return (
    <div className="container">
      <h3 className="text-center">Shoes shop</h3>
      <div className="row">
        {arrProduct.map((prod: ProductModel) => {
          return (
            <div className="col-4 mt-2" key={prod.id}>
              <ProductCard prod={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
