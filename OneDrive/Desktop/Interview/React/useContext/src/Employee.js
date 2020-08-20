
import React, { Component, useState, useContext, createContext } from "react";
import Permanent from './Permanent';
import Contract from './Contract'
import Salary from './Salery'
import employeeContext from './Context'


export default function Employee() {
    let context = useContext(employeeContext)


   const  changeEmploymentType = () => {
        context.updateEmployee({ ...context.data, EmploymentType: "Permanent" })
    }

    return (
        <div>
            <h2>Welcome to Employee Component...</h2>
            <p>
                <label>Employee ID : <b>{context.data.Id}</b></label>
            </p>
            <p>
                <label>Employee Name : <b>{context.data.Name}</b></label>
            </p>
            <p>
                <label>Employee Salary : <b>{context.data.Salary}</b></label>
            </p>
            <employeeContext.Consumer>
 {value=>value.data.EmploymentType==='Permanent'?
              <Permanent></Permanent>:<Contract></Contract>}
            
            </employeeContext.Consumer>
            <button onClick={changeEmploymentType}>Make Permanent</button>
            <Salary></Salary> 
        </div>
    )
}
