import React, { useState, useEffect } from "react";
import ProductCard from "../product-card/productCart";
import cardStyles from "../dashboard/dashboardProducts.module.css";
import ApiService from "../../services/product.service"
// const products = [
//   {
//     id: 1,
//     name: "Set Dormitor Albania, Pat 160 cm x 200 cm si Noptiere 50 cm x 35 cm x 38 cm si Dulap cu oglinda si usi glisante 150 cm x 200 cm",
//     img: "https://s13emagst.akamaized.net/products/53159/53158131/images/res_0ae6c8b2a03fcffd3afb25d7064f8226.jpg?width=450&height=450&hash=72989566BB3230BB535D00B44CC0175D",
//     isGenius: true,
//     isTopFavourite: true,
//     price: 1945.99,
//     stars: 5,
//     rating: 4.7,
//     reviews: 45
//   },
//   {
//     id: 2,
//     name: "Capsule cafea Davidoff Café Fine Aroma Espresso, 10 capsule x 5.5g, Compatibil sistem Nespresso",
//     img: "https://s13emagst.akamaized.net/products/48002/48001257/images/res_01f1b5cab80e785cf21dd81359377f03.jpg?width=450&height=450&hash=5C1A86D5FC773DD5433F7B6084E163D2",
//     isGenius: true,
//     isTopFavourite: true,
//     price: 20.79,
//     stars: 4,
//     rating: 4.25,
//     reviews: 102
//   },
//   {
//     id: 3,
//     name: "Laptop Huawei MateBook D16 2021 cu procesor AMD Ryzen™ 5 4600H pana la 4 GHz, 16.1\", Full HD, IPS, 512GB SSD, 16GB, AMD Ryzen™ Graphics, Windows 10 Home, Layout Germana, Space Grey",
//     img: "https://s13emagst.akamaized.net/products/41647/41646368/images/res_6efa5d9801a99301fbf35b0ddc3143b1.jpg?width=450&height=450&hash=B20A31FD896405644FF7C95992169E50",
//     isGenius: true,
//     isTopFavourite: true,
//     price: 4599.99,
//     stars: 4,
//     rating: 4.2,
//     reviews: 67
//   },
//   {
//     id: 4,
//     name: "Geanta de umar, WOCANIUB, Poliuretan, Inchidere fermoar, 20x15x8 cm, Negru",
//     img: "https://s13emagst.akamaized.net/products/46344/46343645/images/res_6c41576ea16a85fbe0ebf39b156f4e3b.jpg?width=450&height=450&hash=BDAD13042DA19131D459605586C7A18D",
//     isGenius: false,
//     isTopFavourite: false,
//     price: 105.91,
//     stars: 5,
//     rating: 4.2,
//     reviews: 28
//   },
//   {
//     id: 5,
//     name: "Mica Enciclopedie Hygge. Reteta Daneza a Fericirii",
//     img: "https://s13emagst.akamaized.net/products/5283/5282566/images/res_7ee12ccc282c6149d498fb725a625c7b.jpg?width=450&height=450&hash=BAD673024B3378CFA0EC5B23E8C6B868",
//     isGenius: true,
//     isTopFavourite: false,
//     price: 64.41,
//     stars: 5,
//     rating: 4.7,
//     reviews: 57
//   },
//   {
//     id: 6,
//     name: "Joc de societate - Mysterium, limba romana",
//     img: "https://s13emagst.akamaized.net/products/25068/25067995/images/res_e55b5ce7dab244be3a0d07be18cde5a8.jpg?width=450&height=450&hash=65B99C9DA197282ADE244471D7A15D13",
//     isGenius: true,
//     isTopFavourite: false,
//     price: 196.99,
//     stars: 5,
//     rating: 4.7,
//     reviews: 20
//   },
//   {
//     id: 7,
//     name: "Balansoar gradina maro cu perna rosie, 125x125x78 cm",
//     img: "https://s13emagst.akamaized.net/products/43841/43840012/images/res_aae7e374b4f2c3487b3de6c7738126c0.png?width=450&height=450&hash=975436D5CF3264AAD33DEC3C400C06A4",
//     isGenius: true,
//     isTopFavourite: false,
//     price: 2199.99,
//     stars: 5,
//     rating: 4.67,
//     reviews: 10
//   },
//   {
//     id: 8,
//     name: "Detergent de rufe capsule Ariel All-in-One PODS Arctic Edition Color, 62 spalari",
//     img: "https://s13emagst.akamaized.net/products/50246/50245076/images/res_c534ddfb5b643c9bb9804cf904953fad.png?width=450&height=450&hash=9C074850866DEF251281DAE97479B523",
//     isGenius: true,
//     isTopFavourite: true,
//     price: 89.99,
//     stars: 5,
//     rating: 4.94,
//     reviews: 145
//   },
//   {
//     id: 9,
//     name: "Set role reglabile RCO, 27-30, cu pozitionarea multipla a rotilor, Mov/Galben",
//     img: "https://s13emagst.akamaized.net/products/35593/35592575/images/res_1098ca9b4ddd28a4646f9fc5a4d283e3.jpg?width=450&height=450&hash=3AE1D02F50DF185F3662076A204C23F9",
//     isGenius: false,
//     isTopFavourite: true,
//     price: 299.99,
//     stars: 3,
//     rating: 3.25,
//     reviews: 10
//   },
//   {
//     id: 9,
//     name: "Masina de spalat rufe cu uscator Slim LG F2DV5S8S0, Spalare 8.5 kg, Uscare 5 kg, 1200 rpm, Clasa C, Motor AI Direct Drive, TurboWash, Smart Diagnosis, Wi-Fi, Alb",
//     img: "https://s13emagst.akamaized.net/products/31995/31994147/images/res_e32f0648422aac9d9b6aea6e3cc53e13.jpg?width=450&height=450&hash=E4184FA21C5C5B8A3281FED6AD225ED9",
//     isGenius: false,
//     isTopFavourite: false,
//     price: 2299.99,
//     stars: 5,
//     rating: 4.75,
//     reviews: 146
//   },
// ];
// State to hold the products
// The empty dependency array means this effect runs once, like componentDidMount

const Products = () => {
  const [products, setProducts] = useState([]);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    ApiService.getProducts().then((res)=>setProducts(res));
    // // Define the API endpoint URL
    // const apiUrl = "http://localhost:3000/api/products";

    // // Make a GET request using the fetch API
    // fetch(apiUrl)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Update the products state with the fetched data
    //     setProducts(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  }, []);

  return (
    <>
      <h2 className={cardStyles.section_title}>Ultimele noutăți</h2>
      <div className={cardStyles.cards_container}>
        {products.map((h) => (
          // <Link key={h.id}
          //   to={{
          //   pathname: `/aboutProduct/${h.id}`,
          //   state: { product: h }, // Pass the clicked product as state
          // }}>
          <ProductCard key={h.id} product={h} />
          //</Link>
        ))}
      </div>
    </>
  );
};

export default Products;
