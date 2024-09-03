import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import bottomSheetContext from "../bottomSheetContext";

function BottomSheetProvider(props) {
  const { children } = props;
  const bottomSheetModalRef = useRef(null);
  const [content, setContent] = useState(null);

  function openBottomSheetModal(newContent) {
    setContent(newContent);
    bottomSheetModalRef.current.present();
  }

  const initialValue = { openBottomSheetModal };

  return (
    <bottomSheetContext.Provider value={initialValue}>
      <BottomSheetModalProvider>
        {children}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={["50%", "90%"]}
          containerStyle={{
            backgroundColor: "#00000050",
          }}
        >
          {content}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </bottomSheetContext.Provider>
  );
}

export default BottomSheetProvider;
