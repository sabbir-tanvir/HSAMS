import { useState } from "react";
import { Typography, Input, Button, Radio } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [role, setRole] = useState("user"); // default to user
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate based on role
    switch(role) {
      case "admin":
        navigate('/manage');
        break;
      case "doctor":
        navigate('/ddash');
        break;
      case "user":
        navigate('/');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center"> 
    <section className="grid text-center bg-white shadow-md max-w-md w-full rounded-2xl items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign In
        </Typography>
        <Typography className="mb-8 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </Typography>
        
        <div className="flex justify-center gap-6 mb-8">
          <Radio
            name="role"
            label="User"
            value="user"
            defaultChecked
            onChange={() => setRole("user")}
          />
          <Radio
            name="role"
            label="Doctor"
            value="doctor"
            onChange={() => setRole("doctor")}
          />
          <Radio
            name="role"
            label="Admin"
            value="admin"
            onChange={() => setRole("admin")}
          />
        </div>

        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>
          <Button 
            onClick={handleLogin} 
            color="gray" 
            size="lg" 
            className="mt-6 cursor-pointer" 
            fullWidth
          >
            Sign in as {role}
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium text-red-700"
              onClick={() => navigate('/send')}
            >
              Forgot password?
            </Typography>
          </div>
          <Button
            variant="outlined"
            size="lg"
            className=" cursor-pointer mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Not registered?{" "}
            <a onClick={() => navigate('/register')} className=" cursor-pointer font-medium text-gray-900">
              Create account
            </a>
          </Typography>
        </form>
      </div>
    </section>
    </div>
  );
}

export default Login;