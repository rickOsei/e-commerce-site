import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";

export const Search = () => {
  return (
    <IconContext.Provider value={{ color: "red", fontWeight: "100" }}>
      <div>
        <FaBars />
      </div>
    </IconContext.Provider>
  );
};
