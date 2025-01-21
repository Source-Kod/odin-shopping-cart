import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-emerald-900">
      <Logo />
      <Navbar />
    </div>
  );
}
