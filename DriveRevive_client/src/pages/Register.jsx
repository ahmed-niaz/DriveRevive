import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import SocialLogin from "../components/SocialLogin";

import useAuth from "./../hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email, password };
    console.log(newUser);
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset()
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <main>
      <div className="flex container mx-auto gap-8 ">
        <div className="w-1/2 mx-auto flex justify-center p-24">
          <img src={login} alt="" />
        </div>
        <div className="w-1/2 border-[#D0D0D0] border-2 py-10 rounded-2xl">
          <p className="font-bold text-4xl text-[#dd3811] text-center">
            Sign Up
          </p>
          <div className="w-3/4 mx-auto space-y-4">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  Sign up
                </button>
              </div>
              <div className="divider w-full mx-auto">or Sign In with</div>
              <SocialLogin />
              <div className="text-sm text-center">
                Have an account?
                <Link to="/login" className="font-bold text-[#DD3811] ml-1">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
