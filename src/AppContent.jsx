import FeedList from "./components/Feeds/FeedList";
import Header from "./components/Header/Header";
import Stories from "./components/Stories/Stories";

function AppContent() {
  return (
    <>
      <Header />
      <Stories />
      <FeedList />
    </>
  );
}

export default AppContent;
