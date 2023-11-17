import {
	LoginDiv,
	LoginTitle,
	LoginForm,
  	LoginInput,
 	LoginButton,
	LoginGitButton
} from 'styles/loginStyle'

const Login = () => {
  	return (
    	<LoginDiv>
    		<LoginTitle>Login into X</LoginTitle>
      		<LoginForm>
       			<LoginInput placeholder=" Email"/>
        		<LoginInput type="password" placeholder=" password" />
        		<LoginButton>Login</LoginButton>
       			<LoginGitButton>Continue with Github</LoginGitButton>
      		</LoginForm>
		</LoginDiv>
  	)
}

export default Login