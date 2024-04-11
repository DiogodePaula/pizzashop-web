import React from "react";
import ReactDOM from "react-dom/client";

import { enableMSW } from "./api/mocks/index.ts";
import { App } from "./App.tsx";

// enableMSW chama uma função que verifica qual o MODE ativado nas variáveis ambientes, for test carrega os mocks para as requisições
enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
