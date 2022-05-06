import React, { useState } from 'react';

const Form = () => {
    const [formInfo, setFormInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:'',
        hasBeenSubmitted: false
    })

    const changeHandler = (e) =>{
        // this gives the name of the input that is being changed
        console.log(e.target.name)

        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = { formInfo: 'firstName', formInfo: 'lastName', formInfo: 'email', formInfo: 'password'}
        // console.log ('Welcome', newUser)
        formInfo.hasBeenSubmitted = true;
    }

    const formMessage = () => {
        if (formInfo.hasBeenSubmitted){
            return ('Welcome to the site!')
        } else {
            return ('Please submit form to create your account')
        }
    }

    return(
        <>
        <h1>User Form</h1>
        <form action="" onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div className="form-group d-flex justify-content-between pt-3 pb-3 mt-4 mb-4">
                <div className="d-flex align-items-center"><label htmlFor="">First Name:</label></div>
                <div className=""><input type="text" name="firstName" onChange={ changeHandler } className="form-control" /></div>
            </div>
            <div>
                {
                formInfo.firstName.length < 2 ? 
                <p className="text-danger">First name must be 2 characters or longer</p>: null
                }
            </div>
            <div className="form-group d-flex justify-content-between pt-3 pb-3 mt-4 mb-4">
                <div className="d-flex align-items-center"><label htmlFor="">Last Name:</label></div>
                <div><input type="text" name="lastName" onChange={ changeHandler } className="form-control" /></div>
            </div>
            <div>
                {
                formInfo.lastName.length < 2 ? 
                <p className="text-danger">Last name must be 2 characters or longer</p>: null
                }
            </div>
            <div className="form-group d-flex justify-content-between pt-3 pb-3 mt-4 mb-4">
                <div className="d-flex align-items-center"><label htmlFor="">Email:</label></div>
                <div><input type="text" name="email" onChange={ changeHandler } className="form-control" /></div>
            </div>
            <div>
                {
                formInfo.email.length < 5 ? 
                <p className="text-danger">Email must be 5 characters or longer</p>: null
                }
            </div>
            <div className="form-group d-flex justify-content-between pt-3 pb-3 mt-4 mb-4">
                <div className="d-flex align-items-center"><label htmlFor="">Password:</label></div>
                <div><input type="password" name="password" onChange={ changeHandler } className="form-control" /></div>
            </div>
            <div>
            {
                formInfo.password < 8 ? 
                <p className="text-danger">Password must be 8 characters or longer</p>: null
                }
            </div>
            <div className="form-group d-flex justify-content-between pt-3 pb-2 mt-4 mb-4" id="confirm">
                <div className="d-flex align-items-center"><label htmlFor="">Confirm Password:</label></div>
                <div><input type="password" name="confirmPassword" onChange={ changeHandler } className="form-control" /></div>
            </div>
            <div>
                {
                formInfo.confirmPassword !== formInfo.password ? 
                <p className="text-danger">Passwords must match!</p>: null
                }
            </div>
            <div>
                <input type="submit" value="Create User" className="btn btn-dark" />
            </div>
        </form>
        <hr />
        <h4>Your Form Data</h4>
        <p>First Name: {formInfo.firstName}</p>
        <p>Last Name: {formInfo.lastName}</p>
        <p>Email: {formInfo.email}</p>
        <p>Password: {formInfo.password}</p>
        <p>Confirm Password: {formInfo.confirmPassword}</p>
        </>
    )
}

export default Form