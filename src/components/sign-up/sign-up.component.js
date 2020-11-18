import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    this.setState({ email: '', password: ''});

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign in with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} label='Display Name' name='displayName' type='text' value={this.state.displayName} required />
          <FormInput handleChange={this.handleChange} label='Email' name='email' type='email' value={this.state.email} required />
          <FormInput handleChange={this.handleChange} label='Password' name='password' type='password' value={this.state.password} required />
          <FormInput handleChange={this.handleChange} label='Confirm Password' name='confirmPassword' type='password' value={this.state.confirmPassword} required />
          <div className='buttons'>
            <CustomButton type='submit'>Sign Up</CustomButton>

          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
