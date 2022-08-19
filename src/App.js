import SelectedLanguage from './components/SelectedLanguage.js';
import SearchInput from './components/SearchInput.js';
import Suggestion from './components/Suggestion.js';
import { fetchUrl } from './api.js';

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
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
      keyword: this.state.keyword,
    });
    selectedLanguage.setState(this.state.selectedLanguages);
  };

  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        });
      } else {
        const languages = await fetchUrl(keyword);
        this.setState({
          fetchedLanguages: languages,
          keyword,
        });
      }
    },
  });
}
