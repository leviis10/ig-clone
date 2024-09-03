import { FlatList } from "react-native";
import feedsData from "../../constants/feedsData";
import Feed from "./Feed";
import { View } from "tamagui";

function Separator() {
  return <View height={20} />;
}

function FeedList() {
  return (
    <>
      <FlatList
        data={feedsData}
        renderItem={Feed}
        keyExtractor={(feed) => feed.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
      />
    </>
  );
}

export default FeedList;
