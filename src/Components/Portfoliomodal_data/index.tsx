import "./style.css";

function Portfolio_modal_data(props: {
  portfoliolabel?: string;
  img?: string;
}) {
  return (
    <div className="portfolio-modal-data">
      <img src={props.img} />
      <span className="portfolio-heading">{props.portfoliolabel}</span>
    </div>
  );
}

export default Portfolio_modal_data;
