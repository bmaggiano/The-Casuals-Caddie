import React, { useState } from "react"
import { LOGIN_USER } from '../utils/mutations'
// import GoogleLogin from './googleLogin';
// import GoogleLogoutButton from './googleLogout';
import auth from '../utils/auth'
import { useMutation } from '@apollo/client'


function LoginForm() {
  const [loginUser, { error }] = useMutation(LOGIN_USER)
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [showError, setShowError] = useState(false);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userFormData }
      });
      auth.login(data.loginUser.token);

    } catch (err) {
      setShowError(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

    return (
        <>
        <div className="flex min-h-full flex-col pt-8 justify-center sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Log in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/Signup" className="font-medium text-green-700 hover:text-green-500">
                Sign up here
              </a>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleLoginSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={userFormData.email}
                      onChange={handleInputChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={userFormData.password}
                      onChange={handleInputChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
                <div>
                {error && (
  <div className="text-center alert alert-danger" role="alert">
    {error.message}
  </div>
)}
                </div>
              </form>
  
              {/* <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
  
                <div className="mt-6 flex justify-center mx-auto">

These login buttons and logout buttons are fully functional, however if we choose to launch, we need to 
really make sure user data is safe and secured, and also register our website using https://console.cloud.google.com/apis/credentials/consent?project=the-casuals-caddie
        <GoogleLogin/>
      <GoogleLogoutButton/>
                  </div>
                </div> */}
              </div>
            </div>
        </div>
      </>
    )
}

export default LoginForm;
