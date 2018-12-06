import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrencies } from "../actions/CurrencyActions";
import PropTypes from "prop-types";
import Currency from "./Currency";

class CurrencyContainer extends Component {
  componentDidMount() {
    this.props.getCurrencies();
    this.currencyInterval = setInterval(
      () => this.props.getCurrencies(),
      this.props.interval
    );
  }
  componentWillUnmount() {
    clearInterval(this.currencyInterval);
  }

  shouldComponentUpdate(newProps) {      
    if (!newProps.currencies) {
      return false;
    }
    if(!this.props.currencies){
      return true;
    }
    for (const currency in newProps.currencies) {
      if (
        newProps.currencies[currency].color === this.props.defaultColor &&
        newProps.currencies[currency].color !==
          this.props.currencies[currency].color
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div>
        <Currency currencies={this.props.currencies} />
      </div>
    );
  }
}

CurrencyContainer.defaultProps = {
  interval: 5000,
  defaultColor: 'white'
};

CurrencyContainer.propTypes = {
  interval: PropTypes.number,
  defaultColor: PropTypes.string
};

const mapStateToProps = (state, props) => {
  return {
    currencies: state.currency
  };
};

export default connect(
  mapStateToProps,
  { getCurrencies }
)(CurrencyContainer);
