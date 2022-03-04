import React, {useState, useEffect} from 'react'

const Form = ({valeur, onChange}) => {
    const [info, setEmail] = useState({
        email:"",
    }
    );

    const handlechange = (e) => {
       onChange(e)
    }
  return (
    <>
    <div>Form</div>
    <input type="email" name="name" value={valeur} onChange={handlechange} />
    </>
  )
}

export default Form