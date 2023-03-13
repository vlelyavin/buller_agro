import questionIcon from "../../assets/images/icons/questionIcon.png";
import "./QuestionSectionItem.css";

export const QuestionsSectionItem = ({ column }) => {
  return (
    <div className="questions__section__item">
      <img src={questionIcon} alt="questionIcon" className="questions__section__item__icon" />
      <div className="questions__section__item__title" dangerouslySetInnerHTML={{ __html: column.title }}></div>
      <div
        className="questions__section__item__description"
        dangerouslySetInnerHTML={{ __html: column.description }}
      ></div>
    </div>
  );
};
