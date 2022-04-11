import React from "react";
import { listProducts } from "../../static/data/products";
function Product() {
  const RenderProduct = () => {
    return (
      <>
        {listProducts.map((product, index) => {
          return (
            <div className="product__main--content" key={index}>
              <div className="product--image">
                <img
                  className="product--image-border"
                  src={product.image}
                  alt={product.imageAlt}
                />
              </div>
              <div className="product__text">
                <h4 className="product__text--title">{product.title}</h4>
                <span className="product__text--time">
                  Time: <p>{product.time}</p>
                </span>
                <p className="product__text--description">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="product__text--button"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Project
                </a>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container con_pad" id="products__me">
      <div className="product">
        <h2
          className="product--title wow animate__fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="0.2s"
        >
          Products
        </h2>
        <div className="product__main">
          <RenderProduct />
        </div>
      </div>
    </div>
  );
}
export default Product;
