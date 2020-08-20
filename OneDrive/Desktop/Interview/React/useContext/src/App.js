
import React, { Component, useState, useContext, createContext } from "react";
import Employee from './Employee'
import  employeeContext from './Context'


function App() {


const [employee,setEmployee]=useState({Id:101,Name:'Pragim',Type:'Contract',
Location:'Bangalore',Salary:12345, EmploymentType:'Contract'})

  return (
    <div>
      <h2>Welcome to App Component...</h2>
      <label>Employee Salary : <b>{employee.Salary}</b></label>
      <employeeContext.Provider value={{ data: employee, updateEmployee: setEmployee }}>
      <Employee></Employee>
      </employeeContext.Provider>
 </div>
  );
}

export default App;
