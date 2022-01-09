import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phonenumber , setPhoneNumber] = useState("")
    const [dateofbirth , setDateOfBirth] = useState("")
    const [country, setCountry] = useState ("")
    const [password, setPassword] = useState("")
    const [confirmpassword , setConfirmPassword] = useState("")
    const [gender,setGender] =useState({})
    let selectIndexvalues =["select","india","america","australia"]
  return (

    <div className="container">
    <div className="header">
        <h2>Registration Form</h2>
    </div>
    <div action="" className="form">
        <div className="form-group">
            <label for="">UserName : </label>
            <input  onChange ={(uservalue) => {setName(uservalue.target.value)}}/>
             {name.length ==0 ? <p>Please enter the Name</p> : !isNaN(name) ? <p>please enter valid name</p> :"" }
            
        </div>
        <div className="form-group">
            <label for="">Email : </label>
            <input onChange = {(emailvalue) =>{setEmail(emailvalue.target.value)}}/>
            {!email.includes("@") ? <p>please  enter email id </p>  : !email .includes(".com")  ? <p>please enter valid email id</p> : ""}
            
        </div>

        <div className="form-group">
            <label for="">Phone Number : </label>
            <input type="number" onChange ={(numbervalue) =>{setPhoneNumber(numbervalue.target.value)}}/>
            {phonenumber.length ==0 ? <p>please enter phone number</p> : ""}
            
        </div>
        <div className="form-group">
        <div className="form-group">
            <label for="">Date Of Birth</label>
            <input type="date" onchange ={(dobvalue) =>{setDateOfBirth(dobvalue.target.value)}}/>
           {dateofbirth.length ==0 ? <p>please enter  date of birth</p> :""}
            
        <div className="form-group">
        </div>
        <select onChange= {(countryvalue)=>{setCountry(selectIndexvalues[countryvalue.target.options.selectedIndex])}}>
            <option >select</option>
            <option>India</option>
            <option>America</option>
            <option>Australia</option>
        </select>
        {country == "select" ? <p>please select a country</p> :""}
        
        
        <label>male</label> <input onChange={(gendervalue)=>{setGender({male :gendervalue.target.checked})}} type="radio" name='Gender'></input>
        <label>female</label>
        <div className="gender">  <input onChange={(gendervalue)=>{setGender({female :gendervalue.target.checked})}}type ="radio" name='Gender'></input></div>
       {Object.keys(gender).length ==0 ? <p>please select any gender</p> :""}
       {console.log(gender)}
            <label for="">Password : </label>
            <input type="password" onChange={(passwordvalue) =>{setPassword(passwordvalue.target.value)}}/>
           {password.length ==0 ? <p>please enter password</p> : ""}
            <small></small>
        </div>
            <label for="">Confirm Password : </label>
            <input type="password" onChange ={(confirmvalue)=>{setConfirmPassword(confirmvalue.target.value)}}/>
            {confirmpassword == 0 ? <p>please enter confirm password</p> : password  !=  confirmpassword ? <p>please incorrect password</p> : "" }
            
        </div>
        <button  id = 'submit'>Submit</button>
    </div>
</div>
  );
}

export default App;
