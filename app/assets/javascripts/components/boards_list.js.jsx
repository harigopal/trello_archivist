var BoardsList = React.createClass({
  propTypes: {
    boards: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <div>Boards: {this.props.boards}</div>
      </div>
    );
  }
});
