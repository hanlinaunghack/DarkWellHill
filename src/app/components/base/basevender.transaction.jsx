import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { sellableItem } from "../../../data/configurations.jsx";

export const Buying = (props) => {
  return (
    <div>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Stock</th>
            <th className="basket-container">Basket</th>
          </tr>
        </thead>
        <tbody>
          {props.inventory.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.value}</td>
                <td>{e.quantity}</td>
                <td className="basket-container">
                  <input
                    className="basket-input"
                    type="number"
                    min="0"
                    max={e.quantity}
                    name={e.name}
                    data-quantity={e.quantity}
                    data-quality={e.quality}
                    data-price={e.value}
                    data-transaction="Buy"
                    onBlur={props.inputBuyBlurHandler}
                    onChange={props.amountInputChangeHandler}
                  ></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button variant="success" onClick={props.handleBuyButton}>
        Buy
      </Button>
    </div>
  );
};

export const Selling = (props) => {
  let inventory = props.inventory.filter((e, i) => {
    return sellableItem(e.type);
  });
  if (inventory && inventory.length) {
    return (
      <div>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Stock</th>
              <th className="basket-container">Basket</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.value}</td>
                  <td>{e.quantity}</td>
                  <td className="basket-container">
                    <input
                      className="basket-input"
                      type="number"
                      min="0"
                      max={e.quantity}
                      name={e.name}
                      data-quantity={e.quantity}
                      data-quality={e.quality}
                      data-price={e.value}
                      data-transaction="Sell"
                      onBlur={props.inputSellBlurHandler}
                      onChange={props.amountInputChangeHandler}
                    ></input>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button variant="success" onClick={props.handleSellButton}>
          Sell
        </Button>
      </div>
    );
  }
  return <div></div>;
};
