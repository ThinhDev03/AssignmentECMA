
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import AboutPage from "./pages/About";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import { render, router } from "./lib";
import NotFoundPage from "./pages/NotFound";
const app = document.querySelector('#app');
router.on('/', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app));
router.on('/products', () => render(ProductsPage, app));
router.notFound(() => render(NotFoundPage, app));
router.resolve();