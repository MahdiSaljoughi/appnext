import MainLayout from "@/layouts/MainLayouts";
import { ReactElement, useContext, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { register } from "@/services/auth/index";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Register: NextPageWithLayout<{}> = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    register(form)
      .then((res) => {
        toast.success("Register success");
        window.location.href = "/auth/login";
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  console.log(form);

  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-40 sm:px-6 lg:px-8 cursor-default">
        <div className="w-full max-w-sm">
          <form
            className="sm:shadow-lg sm:border-[1px] rounded-[16px] md:w-[500px] md:px-10 py-16"
            action="#"
            method="POST"
          >
            <div>
              <div className="flex items-center gap-x-4 pb-10 justify-between">
                <div className="flex items-center gap-x-4">
                  <Link href="/">
                    <Image
                      src="/favicon.png"
                      alt="logo"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <h2 className="text-right text-2xl font-bold text-gray-900 font-[morabba]">
                    ثبت نام
                  </h2>
                </div>
                <Link href="/">
                  <div className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-[8px] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="font-[dana] mb-2 mt-4 block">آدرس ایمیل</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block placeholder:font-[dana] px-2 w-full rounded-[8px] border-[1px] py-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm outline-none"
                  placeholder="ایمیل"
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <label htmlFor="name" className="font-[dana] mb-2 mt-4 block">نام کاربری</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  required
                  className="block placeholder:font-[dana] px-2 w-full rounded-[8px] border-[1px] py-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm outline-none"
                  placeholder="نام کاربری"
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="font-[dana] mb-2 mt-4 block">رمزعبور</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block placeholder:font-[dana] px-2 w-full rounded-[8px] border-[1px] py-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm outline-none"
                  placeholder="رمزعبور"
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="mt-12 mb-5">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-[8px] bg-indigo-600 py-2 md:py-2.5 text-[15px] font-[dana] text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                ثبت نام
              </button>
            </div>
            <p className="text-center text-sm text-gray-500 font-[dana] text-[13px] md:text-[14px]">
              حساب کاربری دارید؟{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 hover:text-blue-500 font-[dana] text-[14px] md:text-[15px]"
              >
                ورود
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Register;
