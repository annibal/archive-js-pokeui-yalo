import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import FavoritePokemon from "./pages/FavoritePokemon";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/favorites">
          <FavoritePokemon />
        </Route>
        <Route exact path="/pokemon/:pokemonId">
          <PokemonPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
