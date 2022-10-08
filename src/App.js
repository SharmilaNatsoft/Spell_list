import "./css/main.css";
import Lists from "./components/Lists";
import { motion } from "framer-motion";
import DisplayItems from "./components/DisplayItems";
function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
     Spells
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Lists />
        <DisplayItems />
      </motion.div>
    </div>
  );
}

export default App;
