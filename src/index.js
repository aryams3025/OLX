import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext, AuthContext } from "./store/FirebaseContext";
import Context from "./store/FirebaseContext";

import { Firebase, Firestore } from "./firebase/config";

ReactDOM.render(
  <FirebaseContext.Provider value={{ Firebase, Firestore }}>
    <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
