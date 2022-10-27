import { useEffect } from "react";
import News from "../../components/home-page/news";

const NewsPage = () => {
    document.title = "أخبار العيادة";
    useEffect(() => {
      // scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
  
  return (
    <div className="container">
      <h1 className="main-title text-center my-3">أخبار العيادة</h1>
      <div className=" row">
      <div className="col-12"> 
       <News/>
      </div>
      <div className="col-12"> 
       <News/>
      </div>
      <div className="col-12"> 
       <News/>
      </div>
      </div>
    </div>
  );
};
export default NewsPage;
