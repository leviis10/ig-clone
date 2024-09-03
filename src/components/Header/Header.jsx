import { View } from "tamagui";
import HeaderLeftSide from "./HeaderLeftSide";
import HeaderRightSide from "./HeaderRightSide";

function Header() {
  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal={10}
    >
      <HeaderLeftSide />
      <HeaderRightSide />
    </View>
  );
}

export default Header;
