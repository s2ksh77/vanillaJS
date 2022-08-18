export default function SearchInput({ $target, initialState }) {
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  this.state = initialState;

  console.log($target);
  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 선택하세요." value="${this.state}" />`;
  };

  this.render();
}
