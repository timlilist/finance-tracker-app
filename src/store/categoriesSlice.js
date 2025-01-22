import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory(state, action) {
      state.items.push(action.payload);
    },

    handleToggle(state, action) {
      const toggledCategory = state.items.find(
        (item) => item.id === action.payload.id
      );
      toggledCategory.checked = !toggledCategory.checked;
    },

    deleteCategory(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    setCategories(state, action) {
      state.items = action.payload;
    },

    handleUpdateText(state, action) {
      const updatedList = state.items.map((e, i, arr) => {
        if (arr[i].id === action.payload.id) {
          e.title = action.payload.name;
        }
        return e;
      });

      state.items = updatedList;
    },

    turnOnEditMode(state, action) {
      const editModeItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!editModeItem.isEditMode) {
        editModeItem.isEditMode = !editModeItem.isEditMode;
      }
    },
    closeEditMode(state, action) {
      const editModeItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (editModeItem.isEditMode) {
        editModeItem.isEditMode = !editModeItem.isEditMode;
      }
    },
  },
});

export const {
  addCategory,
  deleteCategory,
  setCategories,
  handleToggle,
  handleUpdateText,
  turnOnEditMode,
  closeEditMode,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
