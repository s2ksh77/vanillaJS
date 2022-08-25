import { routeTo } from '../router.js';

export default function ProductListPage({ $target, route }) {
  this.$element = document.createElement('div');
  this.$element.className = 'ProductListPage';
  $target.appendChild(this.$element);
  this.state = {
    products: null,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
        <h1>상품 리스트</h1>
        <button class="routeToDetailList">상품 상세 정보</button>
    `;
    this.$element.querySelector('.routeToDetailList').addEventListener('click', (e) => {
      routeTo('/detail');
      route();
    });
  };
}
