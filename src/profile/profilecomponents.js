import Pic from "./picture.js";
import PropTypes from 'prop-types';

  function Message (props) {
    return <h2 style ={{color: "pink",fontSize: "15px"}}>I am {props.info.fullName}</h2> ;
}

function Profile(props) {
  const person = { fullName : "Elle Woods",bio: "Gemini vegetarian",profession: "Lawyer"};
    return (
      <div> 
          <Pic />
          <br/>
          <Message info = {person} />
          <h4 style ={{color: "pink",fontSize: "15px"}}>I'm a {person.bio},</h4>
          <h4 style ={{color: "pink",fontSize: "15px"}}>and I am a {person.profession}</h4>
          <button style={{border: "none",outline: "0",display: "inline-block",padding: "8px",color: "white",backgroundColor: "#000",textAlign: "center",cursor: "pointer",width: "100%",fontSize: "18px"}} 
          onClick={()=> props.handleAlert(person.fullName)}> My Name</button>
          {props.children}
      </div>
    );
  } 

Profile.defaultProps ={
  fullName : "This the person's full name default value",
  bio: "This the person's bio default value",
  profession:"This the person's profession default value"
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}

  export default Profile;
  