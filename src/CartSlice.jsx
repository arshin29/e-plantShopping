import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
    const { name, image, cost } = action.payload;

    const existingItem = state.items.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
        existingItem.cost = Number(cost); // force cost to number
    } else {
        state.items.push({
            name,
            image,
            cost: Number(cost), // force cost to number
            quantity: 1,
        });
    }
},


    // Remove item from cart by name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions for components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store.js
export default CartSlice.reducer;
