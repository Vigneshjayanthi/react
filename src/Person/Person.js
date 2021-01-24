import React from 'react';
import './Person.css'
const person=(props)=>{
    return (
        <div className="Person" >
            <p onClick={props.change}>{props.name} is working as {props.role} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.rolechange} value={props.role}/>
        </div>
    );

}
export default person;