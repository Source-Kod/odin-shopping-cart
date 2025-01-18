import Header from "../componets/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Welcome to Thor's Market
        </h1>
        <h2 className="mb-2 text-center text-2xl">
          Your Ultimate Men's Fashion Destination
        </h2>
        <p className="mb-6 text-center">
          Discover the latest trends and styles in men's fashion.
        </p>

        <h3 className="mb-2 text-xl font-semibold">Featured Products:</h3>
        <ul className="mb-6 list-inside list-disc">
          <li>
            Stylish Shirt - <span className="font-bold">$49.99</span>
          </li>
          <li>
            Classic Pants - <span className="font-bold">$59.99</span>
          </li>
          <li>
            Leather Jacket - <span className="font-bold">$129.99</span>
          </li>
        </ul>

        <p className="mb-4 text-center">Shop now and unleash your inner god!</p>

        <footer className="mt-6 text-center">
          <p className="text-sm">
            &copy; 2023 Thor's Market. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
