import "./Content.css";

import Card from "../card/Card";

export default function Content() {

  const cards = []

for(let i = 0; i < 100; i++) {
  cards.push(<Card key={i} />)
}

  return <main className="Content">
    <p>content</p>

  <div className="Cards">
    {cards}
  </div>

  </main>;
};
