import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="p-3 shadow-md lg:w-[40%] lg:ml-auto lg:overflow-y-scroll bg-white flex flex-col items-center">
      <h1 className='max-w-sm w-full text-center text-primary font-bold text-2xl mb-4'>Registro</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
