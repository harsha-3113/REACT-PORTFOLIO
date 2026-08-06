import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-card">
        <span className="not-found-code">404</span>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link to="/" className="btn btn-primary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;