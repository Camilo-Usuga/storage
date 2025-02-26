import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a XXI Storage</h1>
      <p>
        Por favor, inicia sesión o regístrate para comenzar a usar la
        aplicación.
      </p>
      <div>
        <Link to="/login">
          <button>Iniciar Sesión</button>
        </Link>
        <Link to="/signup">
          <button>Registrarse</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
