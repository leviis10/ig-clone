import { TouchableOpacity } from "react-native";
import StoryAvatar from "./StoryAvatar";
import { Text } from "tamagui";

function StoryAvatarWithName(props) {
  const { item } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ alignItems: "center", maxWidth: 80 }}
    >
      <StoryAvatar item={item} />
      <Text ellipsizeMode="tail" numberOfLines={1}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default StoryAvatarWithName;
