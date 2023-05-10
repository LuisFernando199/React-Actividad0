import rey0 from "./assets/rey_atanagildo.png";
import rey1 from "./assets/rey_ataulfo.png";
import rey2 from "./assets/rey_ervigio.png";

import "./App.css";

function App() {
  const names = ["LuiFe", "Moni", "Geo"];

  return (
    <>
      <div className="box">
        <div className="card">
          <img src={rey0} alt="rey_atanagildo" />
          <h2>{names[0]}</h2>
        </div>

        <div className="card">
          <img src={rey1} alt="rey_ataulfo" />
          <h2>{names[1]}</h2>
        </div>

        <div className="card">
          <img src={rey2} alt="rey_ervigio" />
          <h2>{names[2]}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
