import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { ToastContainer ,toast,Zoom} from 'react-toastify';
import Loginform from '../src/routes/loginform';
import About from '../src/routes/about';
import Search from './routes/Search';
import Delete from '../src/routes/delete';
import Navbar from './components/Navbar';
function App() {
  const {success , setSuccess} = useState(false);
  let data = false;
async function componentDidMount(details) {
  // POST request using fetch with async/await
  const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(details)
  };
  const response = await fetch('/login', requestOptions);
  data = await response.json();
  // setSuccess(data);
}
const [Visible,setVisible] = useState(false); 
const [user,setUser] = useState({email: "" , password: ""});
const [error,setError] = useState("");
const Login = details => {
  componentDidMount(details).then(result => {
    console.log(data);
    console.log(details);
        if(data){
        console.log("Logged In");
        setUser({
          email: details.email,
          password: details.password
        })
        setVisible({
          Visible: details.Visible
        })
        toast("Logged in Successfully..",{
          className: "toastcls",
          draggable: true,
          Bounce: true,
          position: toast.POSITION.TOP_CENTER
      });
    }else{
      toast("Couldn't recognize you !.Incorrect email/password",{
        className: "toastcls",
        draggable: true,
        Bounce: true,
        position: toast.POSITION.TOP_CENTER
    });
    }
  });
  
}    
const Logout = () => {
    console.log("Logout");
    fetch("/logout",{method:'POST'});
    toast("Logged out Successfully..",{
      className: "toastcls",
      draggable: true,
      Bounce: true,
      position: toast.POSITION.TOP_CENTER
  });
    setUser({email : "" , password : ""});
    setVisible(false);
} 
  return (
    <Router>
      <Navbar Visible = {Visible} Logout = {Logout}/>
    <div className="App">
      {(user.email !== "") ? (
        <Routes>
              <Route path='/*' exact element={<About />} />
              <Route path='/Search' element={<Search />} />
              <Route path='/delete' element={<Delete />} />
        </Routes>
      ) : (
        <Loginform Login={Login} error={error} />
      )}
      < ToastContainer draggable={false} transition={Zoom} autoClose={1000} />
    </div>
    </Router>
  );
}
export default App;
