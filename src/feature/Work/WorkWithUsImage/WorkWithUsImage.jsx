import workWithUsImage from "../../../assets/images/workPage/workWithUs.png";
import "./WorkWithUsImage.css";

export const WorkWithUsImage = () => {
  return (
    <div className="work__with__us__image__container">
      <img src={workWithUsImage} alt="workWithUsImage" className="work__with__us__image" />
    </div>
  );
};
