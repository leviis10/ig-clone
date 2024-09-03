import { FlatList } from "react-native";
import storiesData from "../../constants/storiesData";
import StoryAvatarWithName from "./StoryAvatarWithName";

function Stories() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={storiesData}
      contentContainerStyle={{
        padding: 10,
        gap: 8,
        alignItems: "center",
        marginBottom: 15,
      }}
      keyExtractor={(item) => item.id}
      renderItem={StoryAvatarWithName}
    />
  );
}

export default Stories;
