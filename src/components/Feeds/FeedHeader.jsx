import { Image, Text, View } from "tamagui";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity } from "react-native";

function FeedHeader(props) {
  const { username, imageUrl } = props;
  const imageSize = 50;

  return (
    <View
      paddingHorizontal={15}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <View flexDirection="row" alignItems="center" gap={10}>
        <Image
          source={{ uri: imageUrl }}
          width={imageSize}
          height={imageSize}
          borderRadius={imageSize}
        />
        <Text>{username}</Text>
      </View>

      <TouchableOpacity>
        <FontAwesome6 name="ellipsis-vertical" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default FeedHeader;
