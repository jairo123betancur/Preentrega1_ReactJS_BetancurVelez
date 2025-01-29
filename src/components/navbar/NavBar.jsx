import Logo from "./Logo";
import CartWidget from "./CartWidget.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import Valor from "./ValorFijo.jsx";
import "../../style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg flex-row">
        <div className="container-fluid justify-content-between">
          <Logo />
          <ItemListContainer
            menu1="Inicio"
            menu2="Mi Perfil"
            tipo="producto"
            menu3="Contacto"
          />
          <div
            className="d-flex align-items-center flex-column flex-columnCart"
            id="flex-columnCart"
          >
            <Valor />
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
