import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    };
  }

  updateInput(value) {
    this.setState({ userInput: value });
  }

  addItem() {
    if (this.state.userInput !== "") {
      const NewUser = {
        id: Math.random(),
        value: this.state.userInput
      };

      const list = [...this.state.list, NewUser];

      this.setState({
        list,
        userInput: ""
      });
    }
  }

  deleteItem(key) {
    const xyz = [...this.state.list];
    const updateList = xyz.filter((item) => item.id !== key);
    this.setState({
      list: updateList
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Add activities"
          value={this.state.userInput}
          onChange={(item) => this.updateInput(item.target.value)}
        />
        <button
          onClick={() => {
            this.addItem();
          }}
        >
          Add
        </button>

        <ul>
          {this.state.list.map((item) => (
            <li key={item.id} onClick={() => this.deleteItem(item.id)}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
