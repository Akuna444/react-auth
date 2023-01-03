import classes from "./ProfileForm.module.css";
import { useRef, useContext, useHistory } from "react";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const passwordInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    const authCtx = useContext(AuthContext)
    const history = useHistory()

    fetch(,{
      method:"POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureInput: false 
      }),
      headers:{
        "Context-Type" : "application/json"
      }
      
    }).then(response => {
      history.replace("/")
    });
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={passwordInputRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
