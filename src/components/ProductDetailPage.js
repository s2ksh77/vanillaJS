import { routeTo } from '../router.js';

export default function ProductDetailPage({ $target, route }) {
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  this.state = {
    detail: null,
  };

  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
      <h1>상품 상세 페이지 </h1>
      <button class="routeToCart">주문 정보</button>
      `;
    this.$element.querySelector('.routeToCart').addEventListener('click', (e) => {
      routeTo('/cart');
      route();
    });
  };
}
