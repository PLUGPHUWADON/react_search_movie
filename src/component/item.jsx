function item(promps) {
    return(
        <section className="item">
            <img src={promps.data.img} alt="" />
            <p>{promps.data.name}</p>
        </section>
    );
}

export default item;