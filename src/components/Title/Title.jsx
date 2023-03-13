import "./Title.css";

export const Title = ({ value, margin }) => {
  return (
    <h2 className="title" style={{ margin: margin }}>
      {value}
    </h2>
  );
};
