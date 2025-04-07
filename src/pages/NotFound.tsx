import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 text-emerald-900">
      <h1 className="text-6xl font-bold text-emerald-700">404</h1>
      <p className="text-xl mt-4 text-gray-700">Page not found 😿</p>
      <Link to="/" className="mt-6 text-emerald-600 hover:underline text-lg">
        ← Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
