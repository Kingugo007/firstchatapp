import { useState } from "react";
import axios from 'axios'


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    
const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 
                 'Project-ID': "be47773e-7157-45c6-aa02-aeb3761ae14e",
                 'User-Name' : username, 
                 'User-Secret': password
             }
             try{
                  await axios.get('https://api.chatengine.io/chats', { headers: authObject})
                  
                  localStorage.setItem('username', username);
                  localStorage.setItem('password', password);

                  window.location.reload()
             } catch(error){
                setError('Oops, incorrect credentials.')
             }

}

    return (
        <div className="wrapper">
           <div className="form">
               <h1 className="title">AM HAPPY TO MEET YOU</h1>
                <form onSubmit={handleSubmit}>
                     <input
                     type="text"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="input"
                     placeholder="Enter your username"
                     required
                     />
                      <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="input"
                     placeholder="Enter your password"
                     required
                     />
                     <div align="center">
                         <button type="submit" className="button">
                           <span>Let's Chat</span>
                         </button>
                     </div>
                     <h2 className="error">{error}</h2>
                </form>
           </div>
        </div>
    )
}


export default LoginForm;