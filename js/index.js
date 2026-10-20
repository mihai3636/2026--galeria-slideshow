import articleModule from "./article.js";
import homeModule from "./home.js";

const modules = {
  "/": homeModule,
  article: articleModule,
  404: { html: `<h1>404</h1><p>Page not found.</p>` },
};

let currentModule = null;
const app = document.getElementById("app");
const router = async () => {
  const path = location.hash.slice(1) || "/";

  console.log(path);

  if (typeof currentModule?.cleanup === "function") {
    currentModule.cleanup();
  }

  currentModule = modules[path] || modules["404"];
  app.innerHTML = currentModule.html;

  if (typeof currentModule.onLoad === "function") {
    currentModule.onLoad();
  }
};

window.addEventListener("hashchange", router);
await router();
