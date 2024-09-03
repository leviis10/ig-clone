import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity } from "react-native";
import { View } from "tamagui";

function HeaderRightSide() {
  return (
    <View flexDirection="row" gap={9 * 2} alignItems="center">
      <TouchableOpacity activeOpacity={0.2}>
        <FontAwesome6 name="square-plus" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.2}>
        <FontAwesome6 name="heart" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.2}>
        <FontAwesome6 name="facebook-messenger" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderRightSide;
