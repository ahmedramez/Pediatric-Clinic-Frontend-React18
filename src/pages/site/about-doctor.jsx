import { useState } from "react";
import { Link } from "react-router-dom";
import "./about-doctor.css";
const AboutDoctor = () => {
  document.title = "عن الدكتورة";

  const [firstTabTextColor, setFirstTabTextColor] = useState(
    "text-yellow-active bg-grey-active"
  );
  const [secondTabTextColor, setSecondTabTextColor] = useState("");
  const [thirdTabTextColor, setThirdTabTextColor] = useState("");
  const firstTabClickHandler = () => {
    setFirstTabTextColor("text-yellow-active bg-grey-active");
    setSecondTabTextColor("");
    setThirdTabTextColor("");
  };
  const secondTabClickHandler = () => {
    setFirstTabTextColor("");
    setSecondTabTextColor("text-green-active bg-grey-active");
    setThirdTabTextColor("");
  };
  const thirdTabClickHandler = () => {
    setFirstTabTextColor("");
    setSecondTabTextColor("");
    setThirdTabTextColor("text-red-active bg-grey-active");
  };
  return (
    <div className="doctor-profile-container">
      <div className="doctor-profile">
        <div className="doctor-profile-picture-container">
          <div className="back-to-home">
            <Link to="/">
              <svg
                className="scale-up-center"
                width="32"
                height="32"
                fill="#9099b7"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
            </Link>
          </div>
          <div className="doctor-profile-picture">
            <img
              src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
              alt="kjhg"
            />
          </div>
        </div>

        <div className="doctor-profile-title">
          <h3>ريهام سعيد الشماخ</h3>
          <p>أخصائى طب الأطفال وحديثى الولادة</p>
        </div>

        <div className="doctor-profile-pane">
          <div className="pane-tabs m-0">
            <div
              onClick={firstTabClickHandler}
              className={`first-pane-tab p-2 m-0 text-center text-white  ${firstTabTextColor}`}
            >
              علمية
            </div>
            <div
              onClick={secondTabClickHandler}
              className={`second-pane-tab p-2 m-0 text-center text-white  ${secondTabTextColor}`}
            >
              مهنية
            </div>
            <div
              onClick={thirdTabClickHandler}
              className={`third-pane-tab p-2 m-0 text-center text-white  ${thirdTabTextColor}`}
            >
              شخصية
            </div>
          </div>
          <div className="tabs-content p-2">
            {firstTabTextColor && (
              <p className="first-content">
                بيانات الدكتورة العلمية بيانات الدكتورة العلمية بيانات الدكتورة
                العلمية بيانات الدكتورة العلميةبيانات الدكتورة العلميةبيانات
                الدكتورة العلميةبيانات الدكتورة العلمية
              </p>
            )}
            {secondTabTextColor && (
              <p className="second-content">
                بيانات الدكتورة المهنية بيانات الدكتورة المهنية بيانات الدكتورة
                المهنيةبيانات الدكتورة المهنيةبيانات الدكتورة المهنيةبيانات
                الدكتورة المهنية
              </p>
            )}
            {thirdTabTextColor && (
              <p className="third-content">
                بيانات الدكتورة الشخصية بيانات الدكتورة الشخصية بيانات الدكتورة
                الشخصية بيانات الدكتورة الشخصيةبيانات الدكتورة الشخصيةبيانات
                الدكتورة الشخصية
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutDoctor;
