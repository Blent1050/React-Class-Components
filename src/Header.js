import React from "react";

class Header extends React.Component {
  render(props) {
    return (
      <Header>
        <p>Welcome, {this.props.username}</p>
      </Header>
    );
  }
}

export default Header;
