import React = require('react');

interface HelloProps {
  name: string;
}
interface HelloState {
  count: number;
}

class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    return null;
  }

  _onClick = () => {
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    console.log('render');
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.state.count}</p>
        <button onClick={this._onClick}>Click</button>
      </div>
    );
  }
}

export default Hello;
