"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
export default function Login() {
  async function handleLogin(values: any) {
    let status = "" as any;
    console.log(values);
    status = await signIn("credentials", {
      redirect: false,
      typeLogin: "pass",
      email: values?.email,
      password: values?.password,
      callbackUrl: "/",
    });

    if (status.ok) {
      console.log("ok");
    } else {
      console.log("error");
    }
  }
  return (
    <>
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string().required("И-мэйл оруулна уу"),
            password: Yup.string().required("Нууц үг оруулна уу"),
          })}
          onSubmit={handleLogin}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            isValid,
          }) => (
            <form onSubmit={handleSubmit} className="formModal flex-fill">
              <div className="d-flex align-items-center justify-content-between">
                <h1 className="title fs-5 mb-0 fw-semibold">Нэвтрэх</h1>
              </div>

              <hr className="my-4" />
              <div className="form-floating mb-3">
                <div
                  className={`form-floating ${
                    errors.email ? "is-invalid" : ""
                  }`}
                >
                  <input
                    type="email"
                    name={"email"}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="emailInput"
                    placeholder="name@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="emailInput">Имэйл хаяг</label>
                </div>
                {errors.email && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="form-floating mb-3">
                <div
                  className={`form-floating ${
                    errors.password ? "is-invalid" : ""
                  }`}
                >
                  <input
                    type="password"
                    name={"password"}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="floatingPassword"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingPassword">Нууц үг</label>
                </div>
                {errors.password && (
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-end mb-3">
                <button type="button" className="btn">
                  Нууц үг мартсан
                </button>
              </div>
              <div className="d-flex justify-content-end mb-3">
                <button
                  type="submit"
                  className="btn btn-main py-3 w-100"
                  disabled={!isValid}
                >
                  Нэвтрэх
                </button>
              </div>
            </form>
          )}
        </Formik>
      </>
    </>
  );
}
