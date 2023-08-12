import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../NxtWatchContext'

import {
  LoginContainer,
  WebsiteLogo,
  LoginDetailsSection,
  FormContainer,
  LabelInput,
  Label,
  Input,
  CheckboxLabel,
  LoginButton,
  Checkbox,
  LabelText,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    errorMessage: '',
    isDetailsMatched: true,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMessage: errorMsg, isDetailsMatched: false})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onCheckbox = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {
      isShowPassword,
      password,
      username,
      errorMessage,
      isDetailsMatched,
    } = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeActive} = value

          return (
            <LoginContainer isDarkMode={isDarkModeActive}>
              <LoginDetailsSection isDarkMode={isDarkModeActive}>
                <WebsiteLogo
                  src={
                    isDarkModeActive
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.submitForm}>
                  <LabelInput>
                    <Label htmlFor="username" isDarkMode={isDarkModeActive}>
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      isDarkMode={isDarkModeActive}
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </LabelInput>
                  <LabelInput>
                    <Label htmlFor="password" isDarkMode={isDarkModeActive}>
                      PASSWORD
                    </Label>
                    <Input
                      type={isShowPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      onChange={this.onChangePassword}
                      isDarkMode={isDarkModeActive}
                      value={password}
                    />
                  </LabelInput>
                  <CheckboxLabel>
                    <Checkbox
                      type="checkbox"
                      id="show-password"
                      onChange={this.onCheckbox}
                    />
                    <LabelText
                      htmlFor="show-password"
                      isDarkMode={isDarkModeActive}
                    >
                      Show Password
                    </LabelText>
                  </CheckboxLabel>
                  <LoginButton type="submit">Login</LoginButton>
                  {isDetailsMatched ? (
                    ''
                  ) : (
                    <ErrorMsg>{`*${errorMessage}`}</ErrorMsg>
                  )}
                </FormContainer>
              </LoginDetailsSection>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
