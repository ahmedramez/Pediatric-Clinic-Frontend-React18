const News = () => {
  return (
   
      <div className="card mb-3 news">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://www.middleweb.com/wp-content/uploads/2017/08/breaking-news-blue-600.jpg" className="img-fluid rounded-start" alt="news"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">@news.Title</h5>
              <p className="card-text">@news.Text</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
   
  );
};
export default News;