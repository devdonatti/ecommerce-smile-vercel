import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { LogOut } from "lucide-react";

const Navbar = () => {
  // get user from localStorage
  const storedUser = localStorage.getItem("users");
  let user = null;

  if (storedUser) {
    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      console.error(
        "Error al parsear los datos de usuario de localStorage:",
        error
      );
    }
  }
  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/");
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // navList Data
  const navList = (
    <ul className="flex space-x-3 mt-2 text-white p-2 font-medium text-md px-5">
      {/* All Product */}
      <li>
        <Link to={"/allproduct"}>PRODUCTOS</Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/signup"}>REGISTRO</Link>
        </li>
      ) : (
        ""
      )}

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/login"}>
            <LogOut size={24} color="white" strokeWidth={2} />
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>USUARIO</Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>ADMIN</Link>
        </li>
      )}

      {/* logout */}
      {user && (
        <li className="cursor-pointer" onClick={logout}>
          SALIR
        </li>
      )}

      {/* Cart */}
      <li className="flex ">
        <Link className="flex" to={"/cart"}>
          <ShoppingCart size={24} color="white" strokeWidth={2} />(
          {cartItems.length})
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-black sticky top-0 z-20">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-2 lg:px-3">
        {/* left  */}
        <div className="flex justify-center lg:justify-start w-full">
          <Link to={"/"}>
            <img className="h-16 w-30" src="/logo2.png" alt="Logo" />
          </Link>
        </div>

        {/* navList - centering the items in small screens, aligning to left on large screens */}
        <div className="flex justify-center lg:justify-start lg:ml-0 w-full">
          <div className="flex justify-center lg:ml-0">{navList}</div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center lg:ml-auto">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
