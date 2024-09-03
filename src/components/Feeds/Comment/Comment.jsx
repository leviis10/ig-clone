import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text, TextArea, View } from "tamagui";
import CommentList from "./CommentList";
import emojis from "../../../constants/emojis";

function Comment(props) {
  const { comments, user } = props;

  return (
    <>
      <CommentList comments={comments} />
      <View flexDirection="column" alignItems="center" gap={10} padding={10}>
        <View flexDirection="row" gap={25}>
          {emojis.map((emoji) => (
            <TouchableOpacity key={emoji.id}>
              <Text fontSize={24}>{emoji.emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View flexDirection="row" gap={10}>
          <Image
            width={50}
            height={50}
            borderRadius={50}
            source={{ uri: user.imageUrl }}
          />
          <TextArea size="$1" borderWidth={2} width="85%" />
        </View>
      </View>
    </>
  );
}

export default Comment;
