import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Resource Game</h1>
        <div className="resource-bar">
            <ResourceStone resource={"stone"} name={"Stone "} color={"secondary"}/>
            <RessourceFood resource={"food"} name={"Food "} color={"danger"} />
            <RessourceWood resource={"wood"} name={"Wood "} color={"warning"} />
        </div>
      </header>
    </div>
  );
};

export default App;
