import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    person:
      [{ empNumber: "1234", name: "Vignesh", role: 'SE', age: 23 },
      { empNumber: "1235", name: "varun", role: 'SSE', age: 25 },
      { empNumber: "1236", name: "saravanan", role: 'TL', age: 40 }
      ],
    ispresent: false
  }
  changePresent = () => {
    this.setState({ ispresent: !this.state.ispresent })
  }
  deletePerson = (ind) => {
    let pers = [...this.state.person];
    pers.splice(ind, 1)
    this.setState({ person: pers })
  }
  roleChangeHandler(event, index) {
    let persons = [...this.state.person];
    const PersonIndex = persons.findIndex(ind => ind.empNumber === index)
    const indidualperson= {...persons[PersonIndex]};
    indidualperson.role=event.target.value;
    persons[PersonIndex]=indidualperson;
    this.setState({person:persons})
  }
  render() {
    let buttonSty = {
      backgroundColor:"#fe0000",
      color:'white',
      width:'130px',
      heigth:'60px',
      padding: "8px",
     borderRadius: "10%",
      cursor: "pointer",
      border: "1px solid #fff",
      font:'16px Arial'
       }

    let persondetails = null;
    if (this.state.ispresent) {
      buttonSty.backgroundColor='#00fe00';
    //  buttonSty.color="black";
      persondetails = (<div>
        {this.state.person.map((val, index) => {
          return <Person name={val.name} age={val.age} role={val.role} key={val.empNumber}
            change={() => this.deletePerson(index)} rolechange={(event) => this.roleChangeHandler(event, val.empNumber)}></Person>
        })}
      </div>);
    }
    let addcss=[]
    if(this.state.person.length<=2)
    addcss.push('hcolor')
    if(this.state.person.length<=1)
    addcss.push('hstyle')
    const cssvalue=addcss.join(' ')
    
    return (
      <div className="App">
        <p className={cssvalue}>Welcome to Learn React</p>
        <button style={buttonSty}
          onClick={this.changePresent}>Value</button>
        <ul>{persondetails}</ul>
      </div>
    );
  }
}

export default App;
