import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img
        className="w-30 rounded-lg"
        alt="Dapper & Co."
        src="/Dapper & Co.webp"
      />
    </Link>
  );
}
