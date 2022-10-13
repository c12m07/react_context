import { useContext } from "react";
import NameContext from "../../context/NameContext";

function DefineName() {
  const context = useContext(NameContext);
  const { name } = context;
  let [userName, setUserName] = name;

  function definirNombre() {
    const nameSent = document.getElementById("inputName");
    setUserName(nameSent.value);
  }

  return (
    <div>
      <input id="inputName" />
      <button className="btnName" onClick={definirNombre}>Envía mi Nombre</button>
    </div>
  );
}

export default DefineName;
