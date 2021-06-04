import React, { useState } from "react";
const Form = () => {
    const [displayData, setDisplayData] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayData(formData);
    }

    return (
        <div className="py-5 bg-dark-grey text-center"><h1 className="text-ligh-blue">FORM VALUE PRINT</h1>
            {displayData && (
                <div>
                    <h1>{displayData.name}</h1>
                    <h1>{displayData.email}</h1>
                    <h1>{displayData.password}</h1>
                </div>
            )}
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button className="btn btn-block bg-dark-blue-" type="submit">Submit</button>
            </form>
        </div>)
};

export default Form;
