import Header from "./components/header/Header";
import { GlobalStyles } from "./globalStyles";
import Product from "./components/product/Product";
import { Provider } from 'react-redux';
import { Store } from "./redux/Store";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Provider store={Store}>
          <Header/>
          <Product/>
      </Provider>
    </div>
  );
}

export default App;
