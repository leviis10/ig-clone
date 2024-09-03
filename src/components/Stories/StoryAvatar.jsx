import ReusableStoryAvatar from "./ReusableStoryAvatar";

function StoryAvatar(props) {
  const { item } = props;

  return (
    <ReusableStoryAvatar
      size={60}
      imageUrl={item.imageUrl}
      hasAlreadyViewed={item.hasAlreadyViewed}
    />
  );
}

export default StoryAvatar;
