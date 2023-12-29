import Gameboard from "./GameBoard";
import WordFlick from "./Wordflick";
function App() {
  return (
    <div className="app-container">
      <div className="centered-box">
        <h3>
          <WordFlick />
        </h3>
      </div>
      <Gameboard />
    </div>
  );
}

export default App;
