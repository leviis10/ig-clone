import moment from "moment";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "tamagui";
import useBottomSheetContext from "../../hooks/useBottomSheetContext";
import Comment from "./Comment/Comment";

function FeedFooter(props) {
  const { likes, caption, comments, date, username, user } = props;
  const [seeMore, setSeeMore] = useState(false);
  const { openBottomSheetModal } = useBottomSheetContext();

  function seeMoreCommentHandler() {
    setSeeMore(true);
  }

  function openBottomSheetModalHandler() {
    openBottomSheetModal(<Comment comments={comments} user={user} />);
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
        <TouchableOpacity onPress={openBottomSheetModalHandler}>
          <Text fontSize={12} color="gray">
            View all {comments.length} comments
          </Text>
        </TouchableOpacity>
        <Text fontSize={10} color="gray">
          {moment(date).format("MMMM DD, YYYY")}
        </Text>
      </View>
    </>
  );
}

export default FeedFooter;
