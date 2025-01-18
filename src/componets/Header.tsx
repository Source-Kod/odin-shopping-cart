import Logo from "./logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-fuchsia-400 p-4 text-2xl">
      <Logo />
      <Navbar />
    </div>
  );
}
