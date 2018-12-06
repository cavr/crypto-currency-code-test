import React from "react";

const Currency = ({ currencies }) => {
  const currenciesElement = currencies ? (
    Object.keys(currencies).map(currency => {
      currency = currencies[currency];
      return (
        <div id={currency.symbol} key={currency.symbol} style={{ color: currency.color ,  border: '5px solid gray'}}>
          <span>{currency.symbol}:</span>
          <span style={{'paddingLeft':'16px'}}>{currency.price_usd}</span>
        </div>
      );
    })
  ) : (
    <div>NO CURRENCIES</div>
  );
  return (
    <div style={styles.container}>
      <div style={styles.block}>{currenciesElement}</div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    display: "flex"
  },
  block: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%'
  }
};

export default Currency;
