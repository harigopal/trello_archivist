var Application = React.createClass({
  getInitialState: function () { return null },

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

  render: function () {
    return (
      <div>Loaded Application</div>
    );
  }
});
