// RENDER YOUR NAME AND AGE AND SOCIAL MEDIA PROFILE PIC TO THE DOM

class PropExample extends React.Component {
  render() {
    return (
      <div>
        <p>Hi, {this.props.name}</p>
        <p>My age is: {this.props.age}</p>
        <img src={this.props.url} />
      </div>
    );
  }
}

ReactDOM.render(
  <PropExample
    name="omar"
    age="24"
    url="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
  />,
  document.getElementById('app')
);

//   class PropExample extends React.Component {
//     render() {
//       return(
//         <div>
//           <p>Hi, {}</p>
//           <p>My age is: {}</p>
//           <img src={''}/>
//       </div>
//       );
//     }
//   }

//   ReactDOM.render(
//     <PropExample/>,
//     document.getElementById("app")
//   );
