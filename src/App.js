import { fetchUrl } from './api.js';
import CartPage from './components/CartPage.js';
import ProductDetailPage from './components/ProductDetailPage.js';
import ProductListPage from './components/ProductListPage.js';
import { routeTo } from './router.js';

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    keyword: '',
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  };

  this.route = () => {
    const { pathname } = location;
    console.log(pathname);
    $target.innerHTML = '';
    if (pathname === '/') {
      this.init();
    } else if (pathname === '/products') {
      new ProductListPage({
        $target,
        route: this.route,
      }).render();
    } else if (pathname === '/detail') {
      new ProductDetailPage({
        $target,
        route: this.route,
      }).render();
    } else {
      new CartPage({
        $target,
        route: this.route,
      }).render();
    }
  };

  this.init = () => {
    $target.innerHTML = `
      <h1> 홈 입니다. </h1>
      <button class="routeToProductList">상품 리스트</button>
    `;

    $target.querySelector('.routeToProductList').addEventListener('click', (e) => {
      routeTo(`/products`);
      this.route();
    });
  };

  this.init();
}
