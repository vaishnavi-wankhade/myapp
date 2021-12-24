import React, {useState} from 'react';
import Validate from './Validate';

 function Form() {

    const[values, setValues] = useState({
        fullname:" ",
        email:" ",
        password:" "
    })

    const[errors, setErrors]=useState({});

    const handleSubmit =(e) =>{
        e.preventDefault();
        setValues(" ");
        setErrors(Validate(values));
    }

    const handleChange =(e) =>{
        setValues({
            ...values,
            [e.target.name] :e.target.value,
        })
    }
    return (
        <div>
            <form>

             <label>fullname</label>
             <input type="text" name="fullname"
             value={values.fullname} 
             onChange={handleChange}
             />

             <label>email</label>
             <input type="email" name="email"
                 value={values.email}
                 onChange={handleChange}
             />

             {errors.email && <p> {errors.email }</p>}


             <label>password</label>
             <input type="password"  name="password"
                 value={values.password}
                 onChange={handleChange}
             />

             <button type="submit"  onClick={handleSubmit}>click me </button>





            </form>
        </div>
    )
}

export default Form;
