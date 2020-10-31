import { useState, useEffect } from 'react';

import { GlobalStyle } from './GlobalStyles';

import Header from './patterns/Header/index';
import SearchBar from './components/SearchBar/index';
import Catalog from './pages/catalog/index'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
    .then(res => res.json())
    .then(data => {
      setProducts(data.results)
    })
  }, [products])

  return (
    <>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <Catalog data={products} />
    </>
  );
}

export default App;
