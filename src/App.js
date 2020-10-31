import { GlobalStyle } from './GlobalStyles';

import Header from './patterns/Header/index';
import SearchBar from './components/SearchBar/index';
import Card from './patterns/Card';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <Card /> 
    </>
  );
}

export default App;
