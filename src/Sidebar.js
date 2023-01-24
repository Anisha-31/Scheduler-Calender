import React, { useState } from 'react';
import Dropdown from './dropdown';
import "./Sidebars.css"

export function Sidebar() {
  const [selected, setSelected] = useState('Choose One');
  // function hidebar(){
    
  //   var x = document.getElementById("navbar");
  //   if(x.style.display==="block"){
  //   x.style.display="none";}
  // }
  return (
    < div className='navbar' id="navbar" >
      {/* <div onClick={hidebar}>X</div> */}
      <div className='header'>Book an Appointment
        <div className='sub_header'> Doctor</div>
      </div>

      <div className='dropone'>
        <div className='service'> Service Information</div>
        <Dropdown selected={(selected)} setSelected={setSelected} />
      </div>
      <div className='patient'> Enter Patient's Name <br/>
      <label for='fname'> </label>
        <div className='inputtext'><input type='text' name='patientname' placeholder="Patient's Name"/></div></div>
      <div className='datetime'> Time and Date
        <div ><input type="datetime" placeholder='choosen time'/></div>
      </div>
      <footer className='button'>
        <button id='Save'>Save</button>
      </footer>
    </div>

  )
}
export default Sidebar;