var Application = React.createClass({
  getInitialState: function () {
    return {
      errorMessage: ''
    }
  },

  componentDidMount: function () {
    Trello.authorize({
      name: 'Trello Archivist',
      scope: {
        read: true,
        write: true,
        account: false
      }
    })
  },

  loadTrelloBoards: function () {
    Trello.get('/members/me/boards', { filter: 'open' },
      this.saveBoardsToState,
      this.loadError
    );
  },

  saveBoardsToState: function (data) {
    console.log(data);
    this.setState({
      boards: data
    });
  },

  loadError: function (error) {
    console.log(error);
    this.setState({
      error_message: error
    });
  },

  render: function () {
    return (
      <div>
        <div>Loaded Application</div>
        <button className="btn btn-default" onClick={this.loadTrelloBoards}>Load boards</button>
        <div className="error-message">{this.state.errorMessage}</div>
        <BoardsList boards={this.state.boards}/>
      </div>
    );
  }
});
