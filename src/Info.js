import "./styles.css";
export default function Info({ name, data }) {
  if (!name || !data) {
    return <p className="placeholder">Please enter the name of a card</p>;
  }
  if (name && (!data || data.length === 0)) {
    return <p>No results found</p>;
  }
  return (
    //returns an unordered list element, which contains a list element.
    //Each item in the data we get from the api is put inside a list element
    <ul className="info">
      {data.map((card) => {
        return (
          <ul>
            <li className="cardlist" key={card.id}>
              <div className="moreinfo">
                <p></p>
                <span> {card.multiverseid} </span>
                <span>{card.name}</span>
              </div>
              <img
                className="cardimg"
                src={card.imageUrl}
                alt="no ID found; no Image found"
              />
            </li>
          </ul>
        );
      })}
    </ul>
  );
}
