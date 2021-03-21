import "./page-footer.css";

function PageFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="page-container">
      <footer className="page-footer">© The Boys, {year}</footer>
    </div>
  );
}

export default PageFooter;
