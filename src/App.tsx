import * as React from 'react';
import './App.css';
import Board from './components/Board'

// here comes a rather clumsy store implementation:
// the idea here is to simulate outer data sourced, preferably
// JSON, that'd be fetched and passed down.

// It has also been assumed that there'd be one fatty object/array
// for each board.
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
