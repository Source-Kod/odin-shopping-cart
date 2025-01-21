import Header from "../componets/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Welcome to Dapper & Co.
        </h1>
        <h2 className="mb-2 text-center text-2xl">
          Your Ultimate Men's Fashion Destination
        </h2>
        <p className="mb-6 text-center">
          Explore a world of style where sophistication meets modern trends.
        </p>

        <h3 className="mb-2 text-xl font-semibold">Why Dapper & Co.?</h3>
        <p className="mb-4 text-center">
          At Dapper & Co., we curate collections that empower men to express
          their individuality through fashion. Our pieces are crafted with
          attention to detail, ensuring you look sharp for any occasion.
        </p>

        <h3 className="mb-2 text-xl font-semibold">Stay Ahead of Trends</h3>
        <p className="mb-4 text-center">
          Join our mailing list to receive updates on the latest styles,
          exclusive promotions, and fashion tips tailored just for you. Elevate
          your wardrobe with confidence!
        </p>

        <p className="mb-4 text-center">Shop now and redefine your style!</p>

        <footer className="mt-6 text-center">
          <p className="text-sm">
            &copy; 2023 Dapper & Co. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
