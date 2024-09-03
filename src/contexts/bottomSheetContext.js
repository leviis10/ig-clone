const { createContext } = require("react");

const bottomSheetContext = createContext({
  openBottomSheetModal: (newContent) => {},
});

export default bottomSheetContext;
