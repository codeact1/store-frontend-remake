import { createContext } from "react";

/**
 * Context isa a promise/interface of the info//fns that will be available in the state.
 *
 */

let StoreContext = createContext({
  cart: [],
  user: {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export default StoreContext;
