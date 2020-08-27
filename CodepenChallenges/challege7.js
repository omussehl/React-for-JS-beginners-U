// Challenge - Use Filter Method to Return Only Female Names to the DOM

class FamilyList extends React.Component {
  render() {
    // Filter Array Then Transform with Map Method
    var siblingsListItem = this.props.siblings
      .filter(function (person) {
        return person.female;
      })
      .map(function (person) {
        return <div key={person.id}>{person.name}</div>;
      });
    return <div>{siblingsListItem}</div>;
  }
}

// ARRAY OF OBJECTS - 3 PROPS (ID, NAME AND FEMALE) 3 VALUES (NUMBER, STRING, BOOLEAN)
var siblings = [
  { id: 1, name: 'Chris', female: false },
  { id: 2, name: 'Jeff', female: false },
  { id: 3, name: 'Julie', female: true },
  { id: 4, name: 'Jessica', female: true },
];

ReactDOM.render(
  <FamilyList siblings={siblings} />,
  document.getElementById('app')
);
