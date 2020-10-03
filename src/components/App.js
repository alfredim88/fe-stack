import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ["OlRenatinha!", "hi Alfredinho!"],
    };
  }

  render() {
    return (
      <>
        <div>{this.state.messages}</div>
      </>
    );
  }
}

export default App;
