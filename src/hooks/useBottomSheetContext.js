import { useContext } from "react";
import bottomSheetContext from "../contexts/bottomSheetContext";

function useBottomSheetContext() {
  return useContext(bottomSheetContext);
}

export default useBottomSheetContext;
