import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity } from "react-native";
import { Image, View } from "tamagui";
import useBottomSheetContext from "../../hooks/useBottomSheetContext";
import Comment from "./Comment/Comment";

function FeedBody(props) {
  const { imageUrl, comments, user } = props;
  const { openBottomSheetModal } = useBottomSheetContext();

  function openBottomSheetHandler() {
    openBottomSheetModal(<Comment comments={comments} user={user} />);
  }

  return (
    <>
      <Image source={{ uri: imageUrl }} width="100%" height={500} />
      <View
        flexDirection="row"
        justifyContent="space-between"
        paddingHorizontal={10}
      >
        <View flexDirection="row" gap={15}>
          <TouchableOpacity>
            <FontAwesome6 name="heart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openBottomSheetHandler}>
            <FontAwesome6 name="comment" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name="paper-plane" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <FontAwesome6 name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default FeedBody;
