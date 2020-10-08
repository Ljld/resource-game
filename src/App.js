import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import useObjState from "./hooks/useObjState";
import { GlobalStockContext } from "./components/MyContexts";
import ResourceStone from "./components/Ressource/ResourceStone";
import RessourceFood from "./components/Ressource/ResourceFood";
import RessourceWood from "./components/Ressource/ResourceWood";
import createPersistedState from "@plq/use-persisted-state";
import storage from "@plq/use-persisted-state/lib/storages/local-storage";

export const [usePersistedState] = createPersistedState(
  "stockRessource",
  storage
);

const App = () => {
  const [globalStock] = useObjState({
    stone: localStorage.getItem("stone-stock"),
    food: localStorage.getItem("food-stock"),
    wood: localStorage.getItem("wood-stock"),
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Resource Game</h1>
        <div className="resource-bar">
          <GlobalStockContext.Provider value={globalStock}>
            <ResourceStone
              resource={"stone"}
              name={"Stone "}
              color={"secondary"}
            />
            <RessourceFood resource={"food"} name={"Food "} color={"danger"} />
            <RessourceWood resource={"wood"} name={"Wood "} color={"warning"} />
          </GlobalStockContext.Provider>
        </div>
      </header>
    </div>
  );
};

export default App;
