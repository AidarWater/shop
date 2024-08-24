function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        price: { finalPrice },
        displayAssets: [{ full_background }],
        granted: [{ description }],
        addToBasket = Function.prototype,
    } = props;
    const price = finalPrice;

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description || name}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: '1.5rem' }}>
                    {finalPrice} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
