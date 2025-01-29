import PropTypes from "prop-types";
import { IconDeviceLaptop } from "@tabler/icons-react";
import { IconDeviceDesktop } from "@tabler/icons-react";

const Greeting = (props) => {
  return (
    <div>
      <main>
        <div>
          <h1>
            {props.titulo1} <IconDeviceLaptop color="black" size={60} />
          </h1>
          <h2>
            {props.titulo2} <IconDeviceDesktop color="Blue" size={60} />
          </h2>
        </div>
      </main>
    </div>
  );
};

Greeting.propTypes = {
  titulo1: PropTypes.string.isRequired,
  titulo2: PropTypes.string.isRequired,
};

export default Greeting;
