class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
    };
  }

  handleSumit(event) {
    event.preventDefault();
    console.log('TODO: handleSubmit', this.state.searchKeyword);
  }

  handleReset() {
    // this.setState({searchKeyword: ""})
    // console.log('TODO: handleReset', this.state.searchKeyword);
    // setState는 비동기로 작동하므로 바로 변수를 바꾸지 않는다.
    this.setState(
      () => {
        return {searchKeyword: "" };
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
    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }
    this.setState({
      searchKeyword: event.target.value
    });
  }

  render() {
    // let resetButton = null;

    // if (this.state.searchKeyword.length > 0) {
    //   resetButton = <button type="reset" class="btn-reset"></button>
    // }

    return (
    <>
      <header>
        <h2 className="container">검색</h2>
      </header>
      <div className="container">
        <form id="search-form-view"
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
        </form>
        <div className="content">
          {this.state.searchResult.length > 0 ? (
            <div>TODO: 검색 결과 목록 표시하기</div>
          ) : <div className="empty-box">검색 결과가 없습니다.</div> }
        </div>
      </div>
    </>
    );

  }
}



ReactDOM.render(<App />, document.querySelector("#app"));