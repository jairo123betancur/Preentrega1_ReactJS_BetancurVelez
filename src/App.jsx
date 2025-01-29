import "./style.css";
import Navbar from "./components/navbar/NavBar.jsx";
import Greeting from "./components/main/Greeting.jsx";
export default function App() {
  return (
    <>
      <Navbar />
      <Greeting
        titulo1="Bienvenido a Andrew Tecnology "
        titulo2="Expertos en tecnologia y desarrollo web"
      />
    </>
  );
}
