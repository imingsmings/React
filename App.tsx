import React = require('react');
import LifeCycle from './components/LifeCycle';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  // _onCopy = (e) => {
  //   e.preventDefault();
  // };

  _onKeyDown = (e) => {
    console.log(e.key);
  };

  render() {
    return (
      <div>
        {/* <p onCopy={this._onCopy}>{this.state.name}</p> */}
        <input type="text" onKeyDown={this._onKeyDown} />
        <LifeCycle name={this.state.name} />
      </div>
    );
  }
}

export = App;
