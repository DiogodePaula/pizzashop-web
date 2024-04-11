import axios from "axios";

import { env } from "@/env";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  // withCredentials: true,
});

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      // esquema para a dar a impressão que as coisas estão carregando em tempos diferentes
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    );

    return config;
  });
}
