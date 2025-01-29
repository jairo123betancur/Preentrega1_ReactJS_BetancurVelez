import PropTypes from "prop-types";

const ItemListContainer = (props) => {
  const productos = [
    {
      id: 1,
      producto: "Laptop",
      precio: 1000,
      categoria: "Computadoras",
      marca: "Dell",
    },
    {
      id: 2,
      producto: "Smartphone",
      precio: 800,
      categoria: "Móviles",
      marca: "Samsung",
    },
    {
      id: 3,
      producto: "Tablet",
      precio: 600,
      categoria: "Tabletas",
      marca: "Apple",
    },
    {
      id: 4,
      producto: "Smartwatch",
      precio: 200,
      categoria: "Relojes Inteligentes",
      marca: "Garmin",
    },
    {
      id: 5,
      producto: "Auriculares",
      precio: 150,
      categoria: "Accesorios",
      marca: "Sony",
    },
    {
      id: 6,
      producto: "Monitor",
      precio: 300,
      categoria: "Monitores",
      marca: "LG",
    },
    {
      id: 7,
      producto: "Teclado",
      precio: 50,
      categoria: "Accesorios",
      marca: "Logitech",
    },
    {
      id: 8,
      producto: "Ratón",
      precio: 30,
      categoria: "Accesorios",
      marca: "Razer",
    },
  ];

  function atributo(arreglo, valor) {
    if (valor === "precio") {
      return `$${arreglo.precio}`;
    } else if (valor === "producto") {
      return arreglo.producto;
    } else if (valor === "categoria") {
      return arreglo.categoria;
    } else if (valor === "marca") {
      return arreglo.marca;
    }
  }

  return (
    <div className="d-flex align-items-center mb-3" id="items">
      <li className="nav-item mx-3">
        <a
          className="nav-link active text-white fs-6 justify-content-end align-text-bottom"
          aria-current="page"
          href="#"
        >
          {props.menu1}
        </a>
      </li>
      <li className="nav-item mx-3">
        <a
          className="nav-link active text-white fs-6"
          aria-current="page"
          href="#"
        >
          {props.menu2}
        </a>
      </li>
      <div className="dropdown">
        <button
          id="elemSeleccionado"
          className="btn btn-secondary dropdown-toggle mx-2 fs-6"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Productos ...
        </button>
        <ul className="dropdown-menu">
          {productos.map((p) => {
            return (
              <li key={p.id}>
                <a className="dropdown-item" href="#">
                  {atributo(p, props.tipo)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <li className="nav-item mx-3">
        <a
          className="nav-link active text-white fs-6"
          aria-current="page"
          href="#"
        >
          {props.menu3}
        </a>
      </li>
    </div>
  );
};

ItemListContainer.propTypes = {
  menu1: PropTypes.string.isRequired,
  menu2: PropTypes.string.isRequired,
  menu3: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
};

export default ItemListContainer;
