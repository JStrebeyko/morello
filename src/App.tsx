import * as React from 'react';
import './App.css';
import Board from './components/Board'

// import logo from './logo.svg';

const initialState = {
  board1: [
    {
      name: "Backlog",
      tasks: [
        {}
      ]
    },
    {}
  ]


}

type AppState = Readonly<typeof initialState>

class App extends React.Component<{}, AppState> {
  public readonly state: AppState = initialState

  public componentDidMount() {
    // console.log(this.state);
  }
  public render() {
    return (

      <div className="App">

      <Board data={this.state}/>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
