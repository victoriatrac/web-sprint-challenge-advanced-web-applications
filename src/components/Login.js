import React, { useEffect } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'

// const initialState = {
//     username: '',
//     password: ''
// }

// const Login = () => {
class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // const [ credentials, setCredentials ] = useState(initialState)

  state = {
    credentials: {
      username: '',
      password: ''
    },
    error: ''
  }

  // error = ''
  //replace with error state

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault()
    console.log('login, post request')
    axiosWithAuth()
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('./protected')
        console.log('post request')
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  render() {
    console.log(this.state.credentials)
    return (
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <div data-testid='loginForm' className='login-form'>
          <h2>Build login form here</h2>
          <form onSubmit={this.login}>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
              data-testid='username'
            />
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
              data-testid='password'
            />
            <button>Log In!</button>
          </form>
        </div>

        <p data-testid='errorMessage' className='error'>{this.error}</p>
      </div>
    )
  }
}

export default Login

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.