import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import { useState } from "react";

import decoration from "../../resources/img/vision.png";

const App = () => {
  const [selectedChar, setChar] = useState(null);

  const changeSelectedChar = (id) => {
    setChar(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList changeSelectedChar={changeSelectedChar} />
          <CharInfo charInfo={selectedChar} />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
