// PASS PROPS FROM PARENT FULLNAME COMPONENT TO CHILDREN COMPONENTS - FIRSTNAME, PROFILE AND LASTNAME

class FirstName extends React.Component {
  render() {
    return <h1>{this.props.firstname}</h1>;
  }
}

class Profile extends React.Component {
  render() {
    return <img src={this.props.img} />;
  }
}

class LastName extends React.Component {
  render() {
    return <h1>{this.props.lastname}</h1>;
  }
}

class FullName extends React.Component {
  render() {
    return (
      <div>
        <FirstName firstname={this.props.firstname} />
        <LastName lastname={this.props.lastname} />
        <Profile img={this.props.img} />
      </div>
    );
  }
}

ReactDOM.render(
  <FullName
    firstname="Rob"
    lastname="Merrill"
    img="https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
  />,
  document.getElementById('app')
);

// old stuff below

class FirstName extends React.Component {
  render() {
    return <h1>{}</h1>;
  }
}

class Profile extends React.Component {
  render() {
    return <img src={''} />;
  }
}

class LastName extends React.Component {
  render() {
    return <h1>{}</h1>;
  }
}

class FullName extends React.Component {
  render() {
    return (
      <div>{/* Insert your FirstName, LastName and Profile components */}</div>
    );
  }
}

ReactDOM.render(
  <FullName
    firstname="Rob"
    lastname="Merrill"
    img="https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
  />,
  document.getElementById('app')
);
