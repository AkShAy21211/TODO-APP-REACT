import React,{useState} from 'react'

export default function FormHandling() {

    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
        isSubscribe:"",
        role:""
    });

    const handleChange = (event)=>{

        const {name,value,type,checked} = event.target;
        const feildValue = type === "checkbox"?checked:value;

        setFormData({
            ...formData,
            [name]:feildValue
        });


    }

    const handleSubmit = (event)=>{

        event.preventDefault();
        console.log("from data",formData);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">UserNme</label>
            <input 
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input 
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input 
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="isSubscribe">Subscription</label>
            <input 
                type='checkbox'
                id='isSubscribe'
                name='isSubscribe'
                value={formData.isSubscribe}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="role">Role</label>
           <select

            id='role'
            name='role'
            value={formData.role}
            onChange={handleChange}        
            >
           <option value="">Select role</option>
           <option value="admin">admin</option>
           <option value="user">user</option>
           <option value="guest">guest</option>
           </select>
        </div>

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
