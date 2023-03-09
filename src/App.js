import Header from "./components/header/Header";
import { GlobalStyles } from "./globalStyles";
import Product from "./components/product/Product";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header/>
      <Product/>
    </div>
  );
}

export default App;
