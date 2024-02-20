export function Card(props) {
    const { title, firstText, text } = props;

    return (
            <div className="card__container">
                <h2 className="card__title">{title}</h2>
                <p className="card__first-text">{firstText}</p>
                <p className="card__text">{text}</p>
            </div>
    );
}

