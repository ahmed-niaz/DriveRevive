import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import SocialLogin from "../components/SocialLogin";
import Navbar from "./shared/Navbar";


const Login = () => {
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    const newUser = {email,password}
    console.log(newUser);
  }
  return (
    <main>
     <Navbar/>
      <div className="flex container mx-auto gap-8 ">
        <div className="w-1/2 mx-auto flex justify-center p-24">
          <img src={login} alt="" />
        </div>
        <div className="w-1/2 border-[#D0D0D0] border-2 py-10 rounded-2xl">
          <p className="font-bold text-4xl text-[#dd3811] text-center">
            Sign in
          </p>
          <div className="w-3/4 mx-auto space-y-4">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn glass bg-[#DD3811] text-white font-bold">
                  Sign in
                </button>
              </div>
              <div className="divider w-full mx-auto">or Sign In with</div>
              <SocialLogin/>
              <div className="text-sm text-center">Have an account? 
              <Link to='/register' className="font-bold text-[#DD3811] ml-1">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
