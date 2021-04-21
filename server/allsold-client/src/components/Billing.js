import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../actions";

class Billing extends Component {
  render() {
<<<<<<< HEAD
    // debugger;

=======
>>>>>>> a4b546174821bd168d6c3676b5ed0c1b8b96ffd3
    return (
      <div>
        <StripeCheckout
          name="AllSold"
          amount={1500}
          description="ProSeller plan"
          token={(token) => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <Button variant="contained" color="secondary">
            Purchase Plan
          </Button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Billing);
