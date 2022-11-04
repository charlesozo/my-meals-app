
import "./App.css";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import { useGlobalContext } from "./components/Context";

function App() {
  const { showModal,favorites } = useGlobalContext();
  return (
    <main className="App">
      <Search />
      {favorites.length > 0 && <Favourites />}
      <Meals />
      {showModal ? <Modal /> : null}
    </main>
  );
}

export default App;
