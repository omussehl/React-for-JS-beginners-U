// PASS PROPS FROM PARENT TO CHILDREN COMPONENTS

var FirstName = function (props) {
  return <h1>{props.firstname}</h1>;
};

var Profile = function (props) {
  return <img src={props.img} />;
};

var LastName = function (props) {
  return <h1>{props.yo}</h1>;
};

var FullName = function (props) {
  return (
    <div>
      {/* Insert your FirstName, LastName and Profile components */}
      <FirstName firstname={props.firstname} />
      <LastName yo={props.lastname} />
      <Profile img={props.img} />
    </div>
  );
};

ReactDOM.render(
  <FullName
    firstname="Rob"
    lastname="Merrill"
    img="https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
  />,
  document.getElementById('app')
);

// old

// PASS PROPS FROM PARENT TO CHILDREN COMPONENTS

var FirstName = function () {
  return <h1>{props.firstname}</h1>;
};

var Profile = function (props) {
  return <img src={''} />;
};

var LastName = function (props) {
  return <h1>{}</h1>;
};

var FullName = function (props) {
  return (
    <div>{/* Insert your FirstName, LastName and Profile components */}</div>
  );
};

ReactDOM.render(
  <FullName
    firstname="Rob"
    lastname="Merrill"
    img="https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
  />,
  document.getElementById('app')
);
