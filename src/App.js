import "./App.css";
import Product from "./component/Product";
import Cart from "./component/Cart";
import { useEffect, useReducer } from "react";
import { cartReducer } from "./component/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=50");
    const json = await data.json();

    dispatch({
      type: "ADD_PRODUCTS",
      payload: json.products,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        padding: "25px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
