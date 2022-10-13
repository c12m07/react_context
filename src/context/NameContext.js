import { createContext } from "react";

const NameContext = createContext({
  name: ['PedritoBonito', () => {}],
});

export default NameContext;
