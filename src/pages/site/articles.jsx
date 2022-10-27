import { useEffect } from "react";
import Article from "../../components/home-page/article";
const Articles = () => {
  document.title = "مقالات الدكتورة";
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="blog" style={{ padding: "50px 10px 0px 10px" }}>
      <div className="container" style={{ maxWidth: "100%" }}>
        <h1 className="main-title text-center mb-5">مقالات الدكتورة</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12 my-1">
            <Article />
          </div>
          <div className="col-md-6 col-sm-12 my-1">
            <Article />
          </div>
          <div className="col-md-6 col-sm-12 my-1">
            <Article />
          </div>
          <div className="col-md-6 col-sm-12 my-1">
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Articles;
