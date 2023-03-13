import { QuestionsSectionItem } from "../QuestionsSectionItem/QuestionsSectionItem";

import "./QuestionsSection.css";

export const QuestionsSection = ({ columns }) => {
  return (
    <section className="questions__section">
      {columns.map((column) => (
        <QuestionsSectionItem column={column} key={column.id} />
      ))}
    </section>
  );
};
