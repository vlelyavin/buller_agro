import "./Description.css";

export const Description = ({ value, margin, fontSize }) => {
  return (
    <p
      className="description"
      style={{ margin: margin, fontSize: fontSize }}
      dangerouslySetInnerHTML={{ __html: value }}
    ></p>
  );
};
