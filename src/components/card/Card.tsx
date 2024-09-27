import "./Card.css";

export default function Card() {
  return <div className="Card">
    <img src="https://via.placeholder.com/150" alt="placeholder" />
    <div className="card__text">
    <p>card title</p>
    <p>card description: bla bla the best bla bla </p>
    </div>
    <div className="card__buttons">
      <button>button 1</button>
      <button>button 2</button>
    </div>
  </div>;
};
