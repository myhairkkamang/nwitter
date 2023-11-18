import { useState } from 'react'
import {
	LoginDiv,
	LoginTitle,
	LoginForm,
  	LoginInput,
 	LoginButton,
	LoginSocialButton
} from 'styles/loginStyle'

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onChange = (event) => {
		console.log(event.target.name);
	};

	const onSubmit = (event) => {
		event.preventDefault();
	};
	
  	return (
    	<LoginDiv>
    		<LoginTitle>Login into X</LoginTitle>
      		<LoginForm onSubmit={onSubmit}>
       			<LoginInput 
					name="email" 
					type="email" 
					placeholder="Email" required
					value={email} 
					onChange={onChange}/>
        		<LoginInput 
					name="password" 
					type="password" 
					placeholder="password" required
					value={password} 
					onChange={onChange}/>
        		<LoginButton type="submit">Login</LoginButton>
       			<LoginSocialButton>Continue with Google</LoginSocialButton>
				<LoginSocialButton>Continue with Github</LoginSocialButton>
      		</LoginForm>
		</LoginDiv>
  	);
};

export default Login