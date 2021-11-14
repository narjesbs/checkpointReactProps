import './App.css';
import UserProfile from "./profile/profilecomponents.js";

function App() {
const handleAlert=(user)=> alert(`Hello ${user}`);
  return (
    <div className="App" >
      <h1 style ={{color: "grey",fontSize: "30px"}}>And your are?</h1>
      <UserProfile handleAlert={handleAlert}   >
        </UserProfile>
    </div>
  );
}

export default App; 
