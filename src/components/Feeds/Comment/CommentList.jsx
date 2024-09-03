import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import CommentItem from "./CommentItem";
import { View } from "tamagui";

function Separator() {
  return <View height={10} />;
}

function CommentList(props) {
  const { comments } = props;

  return (
    <BottomSheetFlatList
      data={comments}
      keyExtractor={(comment) => comment.id}
      renderItem={CommentItem}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingRight: 20 }}
    />
  );
}

export default CommentList;
