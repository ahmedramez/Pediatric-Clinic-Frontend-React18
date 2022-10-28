import { Fragment, useEffect } from "react";
import Slider from "../../components/home-page/slider";
import Services from "../../components/home-page/services";
import BookRole from "../../components/home-page/book-role/book-role";
import ArticlesSection from "../../components/home-page/articles-section";
import SendMessage from "../../components/home-page/send-message";

const Home = () => {
  // console.log(localStorage.getItem("token") === null);
  document.title = "الرئيسية";
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <Slider />
      <Services />
      <BookRole />
      <ArticlesSection />
      <SendMessage />
    </Fragment>
  );
};
export default Home;
