import React from 'react';
import { useForm } from "react-hook-form";
import "./SignIn.css";

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="firstName" ref={register({ required: true, maxLength: 20 })} placeholder=" First Name" /> <br />
                <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} placeholder=" Last Name" /><br />
                <input name="age" ref={register} placeholder="Age" />     <br />
                <select name="gender" type="gender"  ref={register}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select><br />
                <input name="email" ref={register({ required: true })} placeholder="Email" /><br />

                <input name="address" ref={register} placeholder=" Address" /><br />
                <input name="country" ref={register} placeholder="Country" /><br />
                <input name="zipcode" ref={register({ required: true })} placeholder="zip-code" /><br />
                {/* <select name="hobby" ref={register}>
        <option value="female"></option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select><br/> */}
                <input type="submit" />
            </form>
        </div>
    );
};

export default SignIn;