import "./CenteredContainer.css";

export const CenteredContainer = ({ children, margin }) => {
  return (
    <div className="centered__container" style={{ margin: margin }}>
      {children}
    </div>
  );
};
