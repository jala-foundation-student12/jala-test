import React from 'react'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://reqres.in/api/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

function Login() {
  const [formData, setFormData] = React.useState({
    username: '',
    password: ''
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function login() {
    instance
      .post('/login', {
        username: formData.username,
        password: formData.password
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-windows-bg">
      <form className="bg-white rounded-3xl flex flex-col gap-4 p-10 border border-gray-800">
        <input
          type="text"
          placeholder="Name"
          className="rounded-xl border border-gray-800 h-10 placeholder:text-center"
          onChange={handleChange}
          name="username"
          value={formData.username}
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-xl border border-gray-800 h-10 placeholder:text-center"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <button
          onClick={login}
          className="bg-green-700 rounded-xl border h-10 hover:bg-green-300 hover:text-white"
        >
          Enter
        </button>
      </form>
    </div>
  )
}

export default Login
