import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Title = styled.h1`

font-family: 'Istok Web';
font-style: normal;
font-weight: 400;
font-size: 60px;
text-align: center;

color: #FFFFFF;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  font-family: 'Istok Web';
  font-style: normal;
  font-size: 13px;
`;

const Input = styled.input`

width: 300px;
height: 40px;
left: calc(50% - 740px/2);
top: 330px;

background: #FFFFFF;
border: 2px solid #D9D9D9;
border-radius: 50px;
`;

const LoginButton = styled.button`
box-sizing: border-box;

width: 300px;
height: 40px;
left: calc(50% - 740px/2);
top: 540px;

background: #00ACEE;
border: 2px solid #00ACEE;
border-radius: 50px;
`;

const SignupButton = styled.button`
box-sizing: border-box;

width: 300px;
height: 40px;
left: calc(50% - 740px/2);
top: 540px;

background: #FFFFFF;
border: 2px solid #00ACEE;
border-radius: 50px;
`;

const Auth = () => {
  return (
    <Container>
    <Title>Login into X</Title>
    <br />
      <LoginForm>
        <Input type="text" id="email" placeholder="Email"/>
        <br />
        <Input type="password" placeholder="password" />
        <br />
        <LoginButton type="submit">Login</LoginButton>
        <br />
        <SignupButton type="submit">Continue with Github</SignupButton>
      </LoginForm>
</Container>
  );
};


export default Auth;