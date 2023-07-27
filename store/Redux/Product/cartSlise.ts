import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeCounter, storeFun } from "./checkStore";
import { IPropStore, addCartStore, Increment } from "@/models/store";

const initialState: IPropStore = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: IPropStore, action: PayloadAction<addCartStore>) => {
      if (storeFun.checkId(state.cart, action.payload)) {
        console.log("Товар уже есть в карзине");
      } else {
        state.cart.push({ ...action.payload });
        state.total = storeFun.sum(state.cart, state.total);
        localStorage.setItem("countCart", JSON.stringify(state.cart));
        localStorage.setItem("totalCart", JSON.stringify(state.total));
        console.log(`Товар добавлен в карзину`);
      }
    },

    removeToCart: (state: IPropStore, action: PayloadAction<addCartStore>) => {
      state.cart = storeFun.remove(state.cart, action.payload);
      localStorage.setItem("countCart", JSON.stringify(state.cart));
      console.log("товар удален");
    },

    getLocalStore: (state: IPropStore) => {
      if (JSON.parse(localStorage.getItem("countCart") || "{}").length == 0) {
      } else {
        state.cart = JSON.parse(localStorage.getItem("countCart") || "{}");
        state.total = JSON.parse(localStorage.getItem("totalCart") || "{}");
      }
    },

    // Новый спопоб увеличение одних и тех же товаров
    incrementCounter: (state: IPropStore, action: PayloadAction<Increment>) => {
      state.cart = changeCounter.increment(state.cart, action.payload);
      state.total = storeFun.sum(state.cart, state.total);
      localStorage.setItem("countCart", JSON.stringify(state.cart));
      localStorage.setItem("totalCart", JSON.stringify(state.total));
    },
    decrementCounter: (state: IPropStore, action: PayloadAction<Increment>) => {
      state.cart = changeCounter.decrement(state.cart, action.payload);
      state.total = storeFun.sum(state.cart, state.total);
      localStorage.setItem("countCart", JSON.stringify(state.cart));
      localStorage.setItem("totalCart", JSON.stringify(state.total));
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeToCart,
  getLocalStore,
  incrementCounter,
  decrementCounter,
} = cartSlice.actions;
