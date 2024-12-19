import LoginForm from "../components/auth/LoginForm";
import NewToNaukari from "../components/auth/NewToNaukari";

function LoginPage() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-6 p-4 lg:gap-12">
      <div className="hidden md:block">
        <NewToNaukari />
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
