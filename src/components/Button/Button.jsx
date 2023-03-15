import "./Button.css";

export const Button = ({ title, width, backgroundColor, fontSize }) => {
  return (
    <button className="button" style={{ width: width, backgroundColor: backgroundColor, fontSize: fontSize }}>
      {title ? title : "Contact us"}
    </button>
  );
};
