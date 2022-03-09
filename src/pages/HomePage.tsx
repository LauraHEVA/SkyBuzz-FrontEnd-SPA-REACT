import Buzz from "../components/Buzz/Buzz";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const buzz = {
  category: "general",
  likes: 0,
  comments: [1],
  author: "Madonna",
  text: "Madonna is writting a message",
  date: "2022-03-08T19:21:30.764Z",
  id: "324k2l",
};

const HomePage = () => {
  return (
    <>
      <Header title="Buzzs" />
      <h2>List of messages here</h2>
      <Buzz buzz={buzz} />
      <Footer />
    </>
  );
};

export default HomePage;
