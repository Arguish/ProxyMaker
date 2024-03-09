import { useContext } from "react";
import { GlobalContext } from "../../Context/Context/Context";

function Hello() {
  const { meaning } = useContext(GlobalContext);

  return (
    <div>
      {" "}
      <span>{meaning}</span> Hello
    </div>
  );
}

export default Hello;
