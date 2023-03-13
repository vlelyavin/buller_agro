import "./Button.css";

export const Button = ({ width, height, backgroundColor, fontSize }) => {
  return (
    <button
      className="button"
      style={{ width: width, height: height, backgroundColor: backgroundColor, fontSize: fontSize }}
    >
      Contact us
    </button>
  );
};
