import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          FlyGlobe
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/flights" className="hover:text-blue-500">Flights</Link></li>
          <li><Link to="/hotels" className="hover:text-blue-500">Hotels</Link></li>
          <li><Link to="/booking" className="hover:text-blue-500">Booking</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
