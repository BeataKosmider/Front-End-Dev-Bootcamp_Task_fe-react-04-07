import React from "react";

class AlertBar extends React.Component {
  constructor(props) {
    super();

    this.state = {
      showAlert: true,
    };
  }

  hideBar = () => {
    let { showAlert } = this.state;
    showAlert = !showAlert;
    this.setState({ showAlert });
  };

  render() {
    if (this.state.showAlert) {
      return (
        <div>
          <p>alert text</p>
          <button onClick={this.hideBar}>X</button>
        </div>
      );
    } else {
      return;
    }
  }
}

export default AlertBar;
