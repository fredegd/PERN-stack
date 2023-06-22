import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className="landing">
      <h1>Welcome to the Bookstore Database Manager</h1>
      <Link to="/books">
        <img
          src="https://image.lexica.art/md/ad898d52-3b23-41f1-8948-89470e938375"
          alt="biblio"
        />
      </Link>
    </div>
  );
}
