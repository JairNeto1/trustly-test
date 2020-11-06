import { useState } from "react";
import PropTypes from "prop-types";

import { Products } from "./styles";

import Header from "../../patterns/Header";
import SearchBar from "../../components/SearchBar/index";
import Card from "../../patterns/Card/index";

export default function Catalog({ products }) {
  const [search, setSearch] = useState("");
  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  // RENDERS ONLY SEARCHED PRODUCTS
  const handleSearch = () => {
    const searchedProducts = products.filter((product) =>
      product.description.toLowerCase().includes(search.toLowerCase())
    );
    return searchedProducts.map((product) => (
      <li key={product.id}>
        <Card product={product} />
      </li>
    ));
  };

  return (
    <>
      <Header title="Sneakers" />
      <SearchBar fn={getSearch} />
      <Products>
        {/* IF NO SEARCH VALUE, RENDERS EVERY PRODUCT */}
        {search === ""
          ? products.map((product) => {
              return (
                <li key={product.id}>
                  <Card product={product} />
                </li>
              );
            })
          : handleSearch()}
      </Products>
    </>
  );
}

Catalog.propTypes = {
  products: PropTypes.array.isRequired,
};
