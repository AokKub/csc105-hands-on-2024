import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NavLink } from "react-router";
const formSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(5, 'Password must have length at least 5.')
})

const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(formSchema) })

  const onSubmit = (data) => {
    console.log("formdata: ", data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col justify-center w-full max-w-md p-4">
        <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input {...register("email")} className="border p-2 mb-2" />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" {...register("password")} className="border p-2 mb-2" />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <br />
          <button className="bg-blue-500 p-2 text-white" type="submit">Login</button>
          <p className="items-center">Don't have an account yet? <NavLink className="text-blue-500" to="/sign-up">SignUp</NavLink></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
