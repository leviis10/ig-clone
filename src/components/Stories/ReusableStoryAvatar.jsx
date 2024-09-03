import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "tamagui";

function getStoryFrameWidth(size) {
  return (6 / 60) * size;
}

function ReusableStoryAvatar(props) {
  const storyFrameWidth = getStoryFrameWidth(props.size);

  return !props.hasAlreadyViewed ? (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["yellow", "darkviolet"]}
      style={{
        height: storyFrameWidth * 2 + props.size,
        width: storyFrameWidth * 2 + props.size,
        borderRadius: props.size + (storyFrameWidth * 2) / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        height={props.size + storyFrameWidth}
        width={props.size + storyFrameWidth}
        backgroundColor="white"
        borderRadius={props.size + storyFrameWidth / 2}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          source={{ uri: props.imageUrl }}
          height={props.size}
          width={props.size}
          borderRadius={props.size}
        />
      </View>
    </LinearGradient>
  ) : (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["gray", "gray"]}
      style={{
        height: storyFrameWidth * 2 + props.size,
        width: storyFrameWidth * 2 + props.size,
        borderRadius: props.size + (storyFrameWidth * 2) / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        height={props.size + storyFrameWidth}
        width={props.size + storyFrameWidth}
        backgroundColor="white"
        borderRadius={props.size + storyFrameWidth / 2}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          source={{ uri: props.imageUrl }}
          height={props.size}
          width={props.size}
          borderRadius={props.size}
        />
      </View>
    </LinearGradient>
  );
}

export default ReusableStoryAvatar;
