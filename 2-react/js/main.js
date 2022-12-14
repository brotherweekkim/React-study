import store from "./js/store.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    };
  }

  handleSumit(event) {
    event.preventDefault();
    // console.log('TODO: handleSubmit', this.state.searchKeyword);
    this.search(this.state.searchKeyword)
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ 
      searchResult,
      submitted : true
    });
  }

  handleReset() {
    // this.setState({searchKeyword: ""})
    // console.log('TODO: handleReset', this.state.searchKeyword);
    // setState는 비동기로 작동하므로 바로 변수를 바꾸지 않는다.
    this.setState(
      () => {
        return {searchKeyword: "", submitted: false};
      },
      () => {
        console.log('TODO: handleReset' ,this.state.searchKeyword);
      }
    );
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value
    // this.state.searchKeyword = event.target.value;
    // this.forceUpdate();
    if (searchKeyword.length <= 0 && this.state.submitted) {
      return this.handleReset();
    }
    this.setState({
      searchKeyword: searchKeyword
    });
  }

  render() {
    // let resetButton = null;

    // if (this.state.searchKeyword.length > 0) {
    //   resetButton = <button type="reset" class="btn-reset"></button>
    // }
    const searchForm = (<form id="search-form-view"
    onSubmit={event => this.handleSumit(event)}
    onReset={() => this.handleReset(event)}
    >
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        autoFocus
        value={this.state.searchKeyword}
        onChange = {event => this.handleChangeInput(event)}
      />
      {/* {this.state.searchKeyword.length > 0 ? <button type="reset" class="btn-reset"></button> : null} */}
      {this.state.searchKeyword.length > 0 && <button type="reset" className="btn-reset"></button>}
    </form>);

    const searchResult = (this.state.searchResult.length > 0 ? (
      <ul className="result">
        {this.state.searchResult.map(item => {
          return (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
            </li>
          )
        })}
      </ul>
    ) : <div className="empty-box">검색 결과가 없습니다.</div> )

    return (
    <>
      <header>
        <h2 className="container">검색</h2>
      </header>
      <div className="container">
        {searchForm}
        <div className="content">
          { this.state.submitted && searchResult }
        </div>
      </div>
    </>
    );
  }
}



ReactDOM.render(<App />, document.querySelector("#app"));