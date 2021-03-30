import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allList: [],
    list: [],
    category: [],
    printItems: [],
    selected: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.list.push(action.payload);
      state.allList.push(action.payload);
    },
    addCategory: (state, action) => {
      let arr = state.category;
      arr.push(action.payload);

      const uniqueArr = [...new Set(arr)];

      state.category = uniqueArr;
    },
    productByCategory: (state, action) => {
      state.list = action.payload;
    },

    addToPrint: (state, action) => {
      const allList = [...state.allList];
      const product = action.payload;

      // Set selected to true
      const index = allList.findIndex((item) => {
        return item.ProductId === product.ProductId;
      });
      console.log(index);
      allList[index].selected = true;

      state.allList = allList;
      state.printItems.push(action.payload);
      state.selected += 1;
    },
    removeFromPrint: (state, action) => {
      const allList = [...state.allList];
      const product = action.payload;

      // Set selected to false
      const index = allList.findIndex((item) => {
        return item.ProductId === product.ProductId;
      });
      console.log(index);
      allList[index].selected = false;

      // Remove item from printItem array
      const newItems = state.printItems.filter(
        (obj) => obj.ProductId !== product.ProductId
      );

      state.allList = allList;
      state.printItems = newItems;
      state.selected -= 1;
    },
    clearPrint: (state) => {
      const allList = [...state.allList];

      allList.forEach((item) => (item.selected = false));

      state.allList = allList;
      state.printItems = [];
      state.selected = 0;
    },
    search: (state, action) => {
      const keyword = action.payload;
      let allList = [...state.allList];
      const filtered = allList.filter((item) => {
        return item.ProductId.includes(keyword) || item.Name.includes(keyword);
      });

      state.list = filtered;
    },
    priceFilter: (state, action) => {
      const { min, max } = action.payload;

      let allList = [...state.allList];
      const filtered = allList.filter((item) => {
        const price = parseFloat(item.Price.replace(",", ""));

        return price >= min && price <= max;
      });

      state.list = filtered;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  search,
  addProducts,
  addCategory,
  productByCategory,
  addToPrint,
  removeFromPrint,
  clearPrint,
  priceFilter,
} = productsSlice.actions;

export default productsSlice.reducer;
