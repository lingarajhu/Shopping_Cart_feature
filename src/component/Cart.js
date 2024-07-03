import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  const calculatePrice = () => {
    const totalPrice = cart.reduce(
      (acc, curr) => acc + Number(curr.price) * curr.qyt,
      0
    );
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculatePrice();
  }, [cart]);

  const handelQyt = (id, qyt) => {
    dispatch({
      type: "ADD_QYT",
      payload: {
        id,
        qyt,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        gap: "10px",
        backgroundColor: "#ede7f6",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h1>Your Cart</h1>
      <h2>Total Amount: $ {total}</h2>
      {cart.map((crt) => {
        return (
          <div
            key={crt.id}
            style={{
              height: "150px",
              backgroundColor: "#d1c4e9",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <div style={{ width: "30%", height: "100%" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={crt.thumbnail}
                alt={crt.title}
              />
            </div>
            <span style={{ color: "white", fontSize: "25px", width: "40%" }}>
              {crt.titel}
              <br />
              <span style={{ marginTop: "15px" }}>$ {crt.price}</span>
            </span>
            <div>
              <span
                style={{
                  padding: "8px",
                  color: "#f44336",
                  fontSize: "20px",
                  border: "1px solid #f44336",
                  marginRight: "10px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={() => handelQyt(crt.id, crt.qyt - 1)}
              >
                -
              </span>
              <span>{crt.qyt}</span>
              <span
                style={{
                  padding: "8px",
                  color: "#64dd17",
                  fontSize: "20px",
                  border: "1px solid #64dd17",
                  marginLeft: "10px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={() => handelQyt(crt.id, crt.qyt + 1)}
              >
                +
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
