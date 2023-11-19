import { loginService, firebaseInstance } from 'fbase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup
} from "firebase/auth";
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
	const [newAccount, setNewAccount] = useState(true);
	const [error, setError] = useState("");

	const onChange = (event) => {
		const {
			target: {name, value},
		} = event;
	
		if (name === "email") {
			setEmail(value);
		}
		if (name === "password") {
			setPassword(value);
		}
	};

	const onSubmit = async(event) => {
		event.preventDefault();
		try {
			let data;
			if (newAccount) {
				data = await createUserWithEmailAndPassword(loginService, email, password);
			}
			data = await signInWithEmailAndPassword(loginService, email, password);
			console.log(data);
		}
		catch (error) {
			setError(error.message);
		}
	};

	const onSocialClick = async (event) => {
		console.log(event.target.name);
		const {
			target: { name },
		} = event;
		let provider;
		if (name === "google") {
			provider = new GoogleAuthProvider();
		}
		if (name === "github") {
			provider = new GithubAuthProvider();
		}
		const data = await signInWithPopup(loginService, provider);
		console.log(data);
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
        		<LoginButton type="submit" value={newAccount ? "Create Account" : "Log In"} /> 
       			<LoginSocialButton onClick={onSocialClick} name="google" >
					Continue with Google
				</LoginSocialButton>
				<LoginSocialButton onClick={onSocialClick} name="github" >
					Continue with Github
				</LoginSocialButton>
      		</LoginForm>
		</LoginDiv>
  	);
};

export default Login