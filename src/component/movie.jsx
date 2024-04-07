import { useLocation,Link } from "react-router-dom";

function movie() {
    const location = useLocation();
    
    return(
        <section className="movie">
            <img src={location.state.img} alt="" />
            <h2>{location.state.name}</h2>
            <p>{location.state.detail}</p>
            <Link to="/">
            <p>back</p>
            </Link>
        </section>
    );
}

export default movie;