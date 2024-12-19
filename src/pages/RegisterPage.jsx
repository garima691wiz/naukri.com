import RegisterBenefits from "../components/auth/RegisterBenefits";
import RegisterForm from "../components/auth/RegisterForm";

function RegisterPage() {
  return (
    <div>
      <div className="flex justify-center gap-4 p-4 md:gap-12 md:p-12">
        <div className="sticky top-36 hidden md:block">
          <div className="sticky top-36">
            <RegisterBenefits />
          </div>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
