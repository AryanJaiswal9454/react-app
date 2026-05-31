import { useRef } from "react";

const UncontrolledForms =() => {
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const handelsubmit =(e) => {
        e.preventDefault();
        console.log("form submitted");

        const newuser={
            email:emailRef.current.value,
            password:passwordRef.current.value,
        };
        console.log(newuser);
        emailRef.current.value="";
        passwordRef.current.value="";
        
    };
    return(
    <>
    <h1>Learn Uncontrolled Form </h1>
    <form onSubmit={handelsubmit}>
        <input type="email" name="email" id="email" ref={emailRef} />
        <br />
        <br />
        <input type="password" name="password" id="password" ref={passwordRef}/>
        <br />
        <br />
        <button>Submit</button>
    </form>
    </>
    )
};
export default UncontrolledForms;