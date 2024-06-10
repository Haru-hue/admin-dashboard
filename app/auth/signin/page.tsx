"use client";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { CiLock } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { Field, FormikProvider, useFormik } from "formik";
import { profileSchema, profileValues } from "@/lib/schema";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/app/apis/account";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const formik = useFormik({
    initialValues: profileValues,
    validationSchema: profileSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (formData: LoginForm) => loginUser(formData),
    onSuccess: async (res) => {
      setTimeout(() => {
        router.push('/');
      }, 1500);
      localStorage.setItem('userToken', JSON.stringify(res?.data?.data?.userToken));
      localStorage.setItem('localUser', JSON.stringify(res?.data?.data?.userInfo));
      toast.success("Login successful");
    },
    onError: () => {
      toast.error("Error creating user profile");
    },
  });
  return (
    <section>
      <Toaster />
      <Breadcrumb pageName="Sign In" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <Link className="mb-5.5 inline-block" href="/">
                <h1 className="text-2xl font-semibold text-white">
                  JoshDev Admin
                </h1>
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>

              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>
            </div>
          </div>
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to JoshDev Admin
              </h2>
              <FormikProvider value={formik}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Enter your customer ID
                  </label>
                  <div className="relative">
                    <Field
                      name="customerId"
                      type="text"
                      placeholder="i.e joshdev (Your first name and last name)"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      autoComplete="off"
                    />
                    <span className="absolute right-4 top-4">
                      <LuUser2 size={22} />
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      name="password"
                      type="password"
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      autoComplete="off"
                    />
                    <span className="absolute right-4 top-4">
                      <CiLock size={22} />
                    </span>
                  </div>
                </div>
              </FormikProvider>
              <div className="mb-5">
                <button
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  disabled={!formik.isValid || mutation.isPending}
                  onClick={() => {
                    mutation.mutate(formik.values);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="mt-6 text-center">
                <p>
                  Don't have any account?{" "}
                  <Link href="/auth/signup" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;