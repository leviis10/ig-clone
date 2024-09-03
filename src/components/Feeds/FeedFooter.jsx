import { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Image, Text, View } from "tamagui";
import CommentItem from "./Comment/CommentItem";
import moment from "moment";

function Separator() {
  return <View height={10} />;
}

function FeedFooter(props) {
  const { likes, caption, comments, date, username } = props;
  const [seeMore, setSeeMore] = useState(false);
  const sheetRef = useRef(null);

  function seeMoreCommentHandler() {
    setSeeMore(true);
  }

  function openCommentBottomSheetHandler() {
    sheetRef.current.snapToIndex(0);
  }

  return (
    <>
      <View paddingHorizontal={10}>
        <View>
          <View flexDirection="row" gap={10}>
            <View flexDirection="row">
              {likes.slice(0, 3).map((like) => (
                <Image
                  key={like.username}
                  source={{ uri: like.imageUrl }}
                  width={25}
                  height={25}
                  borderRadius={25}
                />
              ))}
            </View>
            <Text>
              Liked by{" "}
              <Text fontWeight={700}>
                {likes[0].username} and {likes.length - 1} others
              </Text>
            </Text>
          </View>
        </View>

        <View flexDirection="row">
          <Text>
            <Text fontWeight={700}>{username}</Text>{" "}
            {caption.slice(0, seeMore ? caption.length : 20)}
          </Text>
          {!seeMore && (
            <TouchableOpacity onPress={seeMoreCommentHandler}>
              <Text color="gray">{caption.length > 20 ? "...more" : ""}</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={openCommentBottomSheetHandler}>
          <Text fontSize={12} color="gray">
            View all {comments.length} comments
          </Text>
        </TouchableOpacity>
        <Text fontSize={10} color="gray">
          {moment(date).format("MMMM DD, YYYY")}
        </Text>
      </View>

      {/* Bottom sheet */}
      <BottomSheet
        snapPoints={["50%", "100%"]}
        index={-1}
        ref={sheetRef}
        enablePanDownToClose
      >
        <BottomSheetFlatList
          data={comments}
          keyExtractor={(comment) => comment.username}
          renderItem={CommentItem}
          ItemSeparatorComponent={Separator}
        />
      </BottomSheet>
    </>
  );
}

export default FeedFooter;
