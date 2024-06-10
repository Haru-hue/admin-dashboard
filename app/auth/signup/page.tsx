"use client";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { CiLock, CiMail } from "react-icons/ci";
import { Field, Form, FormikProvider, useFormik } from "formik";
import { userSchema, userValues } from "@/lib/schema";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/app/apis/account";
import toast, { Toaster } from "react-hot-toast";
import assignRandomRole from "@/utils/getRandomRole";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const formik = useFormik({
    initialValues: userValues,
    validationSchema: userSchema,
    validateOnMount: true,
    onSubmit: (values) => console.log(values),
    validateOnChange: true,
    validateOnBlur: true,
  });
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (formData: UserForm) => {
      const userId =
        formData.firstname.toLowerCase() + formData.lastname.toLowerCase();
      return registerUser({
        ...formData,
        customerId: userId,
        role: assignRandomRole(),
      });
    },
    onSuccess: () => {
      toast.success("User profile created successfully");
      setTimeout(() => {
        router.push("/auth/signin");
      }, 1000);
    },
    onError: () => {
      toast.error("Error creating user profile");
    },
  });

  return (
    <section>
      <Toaster />
      <Breadcrumb pageName="Sign Up" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <Link className="mb-5.5 inline-block" href="/">
                <h1 className="text-3xl text-white">JoshDev Admin</h1>
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

              <span className="mt-15 inline-block"></span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to JoshDev
              </h2>
              <FormikProvider value={formik}>
                <Form>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      First Name
                    </label>
                    <Field
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Last Name
                    </label>
                    <Field
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        autoComplete="off"
                        autoSave="off"
                      />
                      <span className="absolute right-4 top-4">
                        <CiMail />
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        autoComplete="off"
                        autoSave="off"
                      />
                      <span className="absolute right-4 top-4">
                        <CiLock size={20} />
                      </span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Re-type Password
                    </label>
                    <div className="relative">
                      <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Re-enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        autoComplete="off"
                      />
                      <span className="absolute right-4 top-4">
                        <CiLock />
                      </span>
                    </div>
                  </div>
                </Form>
              </FormikProvider>
              <div className="mb-5">
                <button
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 disabled:cursor-not-allowed disabled:bg-indigo-600"
                  disabled={!formik.isValid || mutation.isPending}
                  onClick={() => {
                    mutation.mutate(formik.values);
                  }}
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-center">
                <p>
                  Already have an account?{" "}
                  <Link href="/auth/signin" className="text-primary">
                    Sign in
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

export default SignUp;