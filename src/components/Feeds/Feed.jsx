import { View } from "tamagui";
import FeedBody from "./FeedBody";
import FeedFooter from "./FeedFooter";
import FeedHeader from "./FeedHeader";

function Feed(props) {
  const { user, imageUrl, likes, caption, comments, date } = props.item;

  return (
    <View gap={15}>
      <FeedHeader username={user.username} imageUrl={user.imageUrl} />
      <FeedBody imageUrl={imageUrl} comments={comments} />
      <FeedFooter
        likes={likes}
        caption={caption}
        comments={comments}
        date={date}
        username={user.username}
      />
    </View>
  );
}

export default Feed;
