import "./doctor-profile.css";
const DoctorProfile = () => {
  return (
    <div className="col-12 col-md-4">
      <div className="profile rounded position-relative overflow-hidden">
        <div className="image-container position-relative text-center">
          <img src="https://vitalehastanesi.com/wp-content/uploads/2020/12/cocuk-sagligi.jpg" className="rounded-circle" alt=""/>
        </div>
        <div className="text-container text-center">
          <h1 className="my-3">دكتور أطفال</h1>
          <p className="m-auto" style={{marginTop: "-3% !important"}}>
            دكتور طب الأطفال وحديثى الولادة
          </p>
        </div>

        <div className="row m-0 position-absolute w-100 bottom-0 rounded-bottom profile-buttons-container bg-sexcondary">
          <div className="col-4 py-3 m-0 pb-0 profile-button profile-button-first">
            <a
              href="/"
              className="pb-3 text-decoration-none fw-bold text-white d-flex justify-content-center align-items-center"
            >
              <svg
                className="profile-button-svg"
                width="25"
                height="25"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
              </svg>
              تعديل
            </a>
          </div>
          <div className="col-4 py-3 m-0 pb-0 profile-button profile-button-second">
            <a
              href="/"
              className="pb-3 text-decoration-none fw-bold text-white d-flex justify-content-center align-items-center"
            >
              <svg
                className="profile-button-svg"
                width="25"
                height="25"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              عرض
            </a>
          </div>
          <div className="col-4 py-3 m-0 pb-0 profile-button profile-button-third">
            <form className="pb-3 text-decoration-none d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="bg-transparent border-0 text-center fw-bold text-white p-0 d-flex "
              >
                <div>
                  <svg
                    className="profile-button-svg"
                    width="25"
                    height="25"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                  </svg>
                  <span>خروج</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorProfile;