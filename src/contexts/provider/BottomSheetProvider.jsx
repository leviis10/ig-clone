import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import bottomSheetContext from "../bottomSheetContext";
import { useRef, useState } from "react";

function BottomSheetProvider(props) {
  const { children } = props;
  const bottomSheetModalRef = useRef(null);
  const [content, setContent] = useState(null);

  function openBottomSheetModal(newContent) {
    setContent(newContent);
    bottomSheetModalRef.current.present();
  }

  function closeBottomSheetModal() {
    bottomSheetModalRef.current.dismiss();
  }

  const initialValue = { openBottomSheetModal, closeBottomSheetModal };

  return (
    <bottomSheetContext.Provider value={initialValue}>
      <BottomSheetModalProvider>
        {children}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={-1}
          snapPoints={["50%"]}
          enablePanDownToClose
        >
          {content}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </bottomSheetContext.Provider>
  );
}

export default BottomSheetProvider;
