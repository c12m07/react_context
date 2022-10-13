import { useContext } from "react";
import NameContext from "../../context/NameContext";

function ShowName() {
  const context = useContext(NameContext);

  return (
    <div>
      <p>
        Bienvenido a LarnU <span className="spanName">{context.name[0]}!</span>
      </p>
    </div>
  );
}

export default ShowName;
