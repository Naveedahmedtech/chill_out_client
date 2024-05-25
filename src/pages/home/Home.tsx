import PostList from "./components/PostList";
import StatusSection from "./components/StatusSection";

const Home = () => {

  return (
    <div className="mb-20 md:mb-0">
      <StatusSection />
      <PostList />
    </div>
  );
};

export default Home;
