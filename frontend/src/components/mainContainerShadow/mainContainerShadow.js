export default function MainContainerShadow({ children }) {
  return (
    <div className="shadow-main">
      {children}
      <div className="blurCircle"></div>
      <div className="blurCircle"></div>
      <div className="blurCircle"></div>
    </div>
  );
}
