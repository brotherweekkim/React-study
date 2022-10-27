class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleSumit(event) {
    event.preventDefault();
    console.log('TODO: handleSubmit', this.state.searchKeyword);
  }

  handleChangeInput(event) {
    // this.state.searchKeyword = event.target.value;
    // this.forceUpdate();

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
        <form id="search-form-view" onSubmit={event => this.handleSumit(event)}>
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
      </div>
    </>
    );

  }
}



ReactDOM.render(<App />, document.querySelector("#app"));