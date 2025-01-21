import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-6 p-4">
      <Link className="text-2xl hover:underline" to="/shop">
        Shop
      </Link>
      <Link className="text-2xl hover:underline" to="/cart">
        Cart
      </Link>
    </div>
  );
}
