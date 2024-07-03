import React from "react";

const Product = ({ state, dispatch }) => {
  const { products, cart } = state;
  // console.log(products);
  console.log(cart);

  return (
    <div
      style={{
        width: "70%",
        backgroundColor: "#ede7f6",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h1>Products List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "15px",
        }}
      >
        {products &&
          products.map((prod) => {
            return (
              <div
                style={{
                  width: "300px",
                  backgroundColor: "#d1c4e9",
                  padding: "15px",
                  borderRadius: "10px",
                }}
                key={prod.id}
              >
                <img
                  style={{ width: "100%", height: "70%", objectFit: "cover" }}
                  src={prod?.thumbnail}
                  alt={prod?.title}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 500 }}>
                    {prod?.title}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    $ {prod?.price}
                  </span>
                </div>
                {cart.some((c) => c.id === prod.id) ? (
                  <button
                    style={{
                      width: "100%",
                      padding: "10px",
                      color: "white",
                      cursor: "pointer",
                      border: "1px solid white",
                      fontSize: "20px",
                      backgroundColor: "#f44336",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    Remove form Cart
                  </button>
                ) : (
                  <button
                    style={{
                      width: "100%",
                      padding: "10px",
                      color: "white",
                      cursor: "pointer",
                      border: "1px solid white",
                      fontSize: "20px",
                      backgroundColor: "#64dd17",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: {
                          id: prod?.id,
                          titel: prod?.title,
                          thumbnail: prod?.thumbnail,
                          qyt: 1,
                          price: prod?.price,
                        },
                      })
                    }
                  >
                    Add to cart
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
