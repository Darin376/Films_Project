import { Link } from "react-router-dom";
import "./NotFoundPageStyle.scss";

export const NotFoundPage = () => {
    return (
        <div className="notFoundPageWrapper">
            <h3>Page not found </h3>
            <Link to="/">Back to menu</Link>
        </div>
    )
}