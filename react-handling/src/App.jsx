//import { useState } from 'react'
import './App.css'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  password: z.string().min(5, 'Password is required.'),
})


function App() {
  //const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  //const [errors, setErrors] = useState({ name: '', email: '', password: '' })
  //const handleSubmit = (e) => {
  //  e.preventDefault()
  //  const result = formSchema.safeParse(formData)
  //  if (result.success) {
  //    setErrors({ name: '', email: '', password: '' })
  //    console.log(formData)
  //  }
  //  else {
  //    console.log(result)
  //    const errorMap = {}
  //    result.error.errors.forEach((error) => {
  //      errorMap[error.path[0]] = error.message
  //    })
  //    setErrors(errorMap)
  //  }
  //
  //}

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(formSchema) })

  const onSubmit = (data) => {
    console.log("formData: ", data)
  }

  //const handleChange = (e) => {
  //  const { name, value } = e.target
  //  setFormData((prevData) => ({ ...prevData, [name]: value }))
  //}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for='name'>name: </label>
        <input type='text' {...register("name")} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}<br />
        <label for='email'>email: </label>
        <input type='text' {...register("email")} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}<br />
        <label for='name'>password: </label>
        <input type='text' {...register("password")} />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}<br />
        <button type='submit'>submit</button>
      </form>
    </div >
  )
}

export default App
