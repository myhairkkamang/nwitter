import styled from "styled-components";

export const LoginDiv = styled.div`
	display: flex;
 	flex-direction: column;
 	align-items: center;
	width: 100vw;
	height: 100vh;
	margin: 0;
 	background-color: black;
 	gap: 20px;
`
export const LoginTitle = styled.div`
	color: white;
	font-size: 40px;
 	padding: 30px;
`

export const LoginForm = styled.form`
 	display: flex;
	flex-direction: column;
 	align-items: center;
  	justify-content: center;
 	gap: 20px;
`

export const LoginInput = styled.input`
  	width: 320px;
	height: 35px;
 	font-size: 16px
 	padding: 15px;
  	background-color: white;
 	border: none;
 	border-radius: 30px;
`
export const LoginButton = styled.button`
  	display: flex;
 	align-items: center;
 	justify-content: center;
  	width: 330px;
 	height: 35px;
 	padding: 15px;
  	font-color: white;
  	background-color: #00ACEE;
 	border: none;
  	border-radius: 30px;

`
export const LoginGitButton = styled.div`
 	display: flex;
 	align-items: center;
  	justify-content: center;
  	width: 300px;
  	height: 5px;
  	padding: 15px;
  	background-color: white;
 	border: 2px solid #00ACEE;
  	border-radius: 30px;
`