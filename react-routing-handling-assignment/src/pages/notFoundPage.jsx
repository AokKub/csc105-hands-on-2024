import { Link } from "react-router"


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center mt-40">
      <div>404 NOT FOUND</div>
      <div><Link className="text-blue-500" to={"/"}>Go to HomePage</Link></div>
    </div>
  )
}
export default NotFoundPage
