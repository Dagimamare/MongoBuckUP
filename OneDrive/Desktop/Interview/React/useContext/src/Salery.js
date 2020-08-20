
import React, { Component, useState, useContext, createContext } from "react";
import employeeContext from './Context'
export default function Salary(){
    let context=useContext(employeeContext);
  
    function updateSalary(){
      context.updateEmployee({...context.data,Salary:15000});
    }
    return(
      <div>
        <h2>Welcome to Salary Component...</h2>
        <p>
          <label>Employee ID : <b>{context.data.Id}</b></label>
        </p>
        <p>
          <label>Employee Salary : <b>{context.data.Salary}</b></label>
        </p>
            <button onClick={updateSalary}>Update</button>
          
      </div>
    );
  }