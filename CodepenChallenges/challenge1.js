// var PropExample = function(props) {
//     return(
//       <div>
//         <p>Hi, {props.name}</p>
//         <p>My age is: {props.age}</p>
//         <img src={''}/>
//       </div>
//     );
//   }

//   ReactDOM.render(
//     <PropExample
//       img="https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
//       />,
//     document.getElementById("app")
//   );

var PropExample = function (props) {
  return (
    <div>
      <p>Hi, {props.name}</p>
      <p>My age is: {props.age}</p>
      <img src={''} />
    </div>
  );
};

ReactDOM.render(
  <PropExample
    name="omar"
    age="24"
    img="https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
  />,
  document.getElementById('app')
);
