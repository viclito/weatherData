import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {

      if (username === 'admin' && password === '123') {
        
        // window.location.href = '/table'
        navigate('table')
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error( error);
    }
  };

  return (
    <div className='login'>
        <div className="inner">
            <h2>Login Page</h2>
            <div className="input">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="input">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
     
    </div>
  );
};

export default Login;
