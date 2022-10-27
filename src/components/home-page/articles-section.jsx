import { Fragment } from "react";
import { Link } from "react-router-dom";
import Article from "../home-page/article";

const ArticlesSection = () => {
  return (
    <Fragment>
    <div className="blog" style={{ padding: "50px 10px 0px 10px" }}>
      <div className="container" style={{ maxWidth: "100%" }}>
        <h1 className="main-title text-center mb-5">مقالات الدكتورة</h1>
        <div className="row">
        <div className="col-md-6 col-sm-12">
          <Article />
          </div>
          <div className="col-md-6 col-sm-12">
          <Article />
          </div>
        </div>
      </div>
    </div>
      <Link to="/Articles" className="text-decoration-none text-center fw-bold mb-5 d-block">
        عرض جميع المقالات
      </Link>
    </Fragment>
  );
};
export default ArticlesSection;
