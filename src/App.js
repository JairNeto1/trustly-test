import { useState, useEffect } from 'react';

import { GlobalStyle } from './GlobalStyles';

import Routes from './routes';

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
      <Routes data={products} />
    </>
  );
}

export default App;
