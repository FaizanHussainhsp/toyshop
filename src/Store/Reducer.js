export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const isNotExist = state.item.findIndex(
      (data) => data.itemTitle === action.val.itemTitle
    );

    if (isNotExist === -1) {
      const NewData = [action.val];
      const mergedData = state.item.concat(NewData);
      const totalPrice = state.total + action.val.itemPrice;

      const newBornData = {
        item: mergedData,
        total: totalPrice,
      };
      return newBornData;
    } else {
      const ExistedData = state.item[isNotExist];
      const modifyQuantity = ExistedData.quantity + action.val.quantity;
      const modifyTotal = ExistedData.itemPrice + state.total;

      const ModifiedObject = {
        ...ExistedData,
        quantity: modifyQuantity,
        itemPrice: ExistedData.itemPrice,
      };
      state.item[isNotExist] = ModifiedObject;

      const ModifiedState = {
        ...state,
        total: modifyTotal,
      };
      console.log(ModifiedState);
      return ModifiedState;
    }
  } else if (action.type === "REMOVE_ITEM") {
    let ExistingObject;
    let ObjectIndex;
    for (const item in state.item) {
      if (state.item[item].itemTitle === action.val.itemTitle) {
        ExistingObject = state.item[item];
        ObjectIndex = item;
        break;
      }
    }

    const modifyQuantity = ExistingObject.quantity - action.val.quantity;
    if (modifyQuantity < 1) {
      const modifyTotalValue = state.total - ExistingObject.itemPrice;

      const filteredata = state.item.filter(
        (data) => data.itemTitle !== action.val.itemTitle
      );
      state.item = filteredata;

      console.log(filteredata, state);
      return {
        ...state,
        total: modifyTotalValue,
      };
    } else {
      const modifyTotal = state.total - ExistingObject.itemPrice;
      const ModifiedObject = {
        ...ExistingObject,
        quantity: modifyQuantity,
        itemPrice: ExistingObject.itemPrice,
      };

      state.item[ObjectIndex] = ModifiedObject;
      const ModifiedState = {
        ...state,
        total: modifyTotal,
      };
      console.log(ModifiedState);
      return ModifiedState;
    }
  } else if (action.type === "CancelOrder") {
    return {
      ...state,
      item: [],
      total: 0,
    };
  }
};
