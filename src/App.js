import {Screen1} from "./Screens/Screen1/Screen1";
import {Screen2} from "./Screens/Screen2/Screen2";
import {NavBar} from "./Components/NavBar/NavBar";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
   <>

       <NavBar/>
     <Screen1/>
     <Screen2/>
   </>
  );
}

export default App;
