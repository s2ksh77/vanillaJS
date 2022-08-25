import { routeTo } from '../router.js';

export default function CartPage({ $target, route }) {
  this.$element = document.createElement('div');
  this.$element.className = 'CartPage';
  this.state = {
    cart: [],
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
        <h1>주문 상세 페이지</h1>
        <button class="routeToHome">홈</button>
        `;
    this.$element.querySelector('.routeToHome').addEventListener('click', (e) => {
      routeTo('/');
      route();
    });
  };
}
