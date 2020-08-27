// PASS PROPS FROM PARENT TO CHILDREN COMPONENTS

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
        <FirstName firstname={this.props.user.firstname} />
        <LastName lastname={this.props.user.lastname} />
        <Profile img={this.props.user.img} />
      </div>
    );
  }
}

var person = {
  firstname: 'Rob',
  lastname: 'Merrill',
  img:
    'https://pbs.twimg.com/profile_images/1135564393876545536/3ZVo3zgK_400x400.png',
};

ReactDOM.render(<FullName user={person} />, document.getElementById('app'));

// old

// PASS PROPS FROM PARENT TO CHILDREN COMPONENTS

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
        <FirstName firstname={} />
        <LastName lastname={} />
        <Profile img={} />
      </div>
    );
  }
}

var person = {
  firstname: 'Rob',
  lastname: 'Merrill',
  img:
    'https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg',
};

ReactDOM.render(<FullName user={person} />, document.getElementById('app'));
