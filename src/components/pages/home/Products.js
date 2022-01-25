import React from "react";

function Product() {
  const listProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      title: "Personal Website ReactJS",
      time: "Jun 2020 - Dec 2021",
      description: "a personal website is written in ReactJS, HTML, CSS(SCSS).",
      link: "https://github.com/MinhPhuongK57/KenCrystalK57.git",
      status: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Website PHP (User)",
      time: "May 2020 - Aug 2021",
      description: "Website project written in PHP with user interface.",
      link: "https://github.com/MinhPhuongK57/ShoesShopUser.git",
      status: true,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      title: "Website PHP (Admin)",
      time: "May 2020 - Aug 2021",
      description: "Website project written in PHP with admin interface.",
      link: "https://github.com/MinhPhuongK57/ShoesShopAdmin.git",
      status: true,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      title: "Project Windows Forms",
      time: "Dec 2020 - Mar 2021",
      description: "Project management products, invoices with windows forms.",
      link: "https://github.com/MinhPhuongK57/WindowsForm.git",
      status: true,
    },
  ];
  let elements = listProducts.map((listProduct, index) => {
    let result = "";
    if (listProduct.status) {
      result = (
        <div className="product__main--content">
          <div className="product--image">
            <img
              className="product--image-border"
              src={listProduct.image}
              alt="Product01"
            />
          </div>
          <div className="product__text">
            <h4 className="product__text--title">{listProduct.title}</h4>
            <span className="product__text--time">
              Time: <p>{listProduct.time}</p>
            </span>
            <p className="product__text--description">
              {listProduct.description}
            </p>
            <a
              href={listProduct.link}
              className="product__text--button"
              target="_blank"
            >
              See Project
            </a>
          </div>
        </div>
      );
    }
    return result;
  });
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
        <div className="product__main">{elements}</div>
      </div>
    </div>
  );
}
export default Product;
