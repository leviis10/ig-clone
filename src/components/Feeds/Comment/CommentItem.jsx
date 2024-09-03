import { Image, Text, View } from "tamagui";
import moment from "moment";

function CommentItem(props) {
  const { username, date, comment, imageUrl } = props.item;

  return (
    <View
      flexDirection="row"
      alignItems="center"
      gap={10}
      paddingHorizontal={10}
    >
      <Image
        source={{ uri: imageUrl }}
        width={40}
        height={40}
        borderRadius={40}
      />
      <View gap={5}>
        <Text>
          {username}{" "}
          <Text fontSize={12} color="gray">
            {moment().diff(moment(date), "week")}w
          </Text>
        </Text>
        <Text>{comment}</Text>
      </View>
    </View>
  );
}

export default CommentItem;
