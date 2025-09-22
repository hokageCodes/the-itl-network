"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuth();
  const [loginError, setLoginError] = useState("");

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow p-8 rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-black">Login</h1>

      {loginError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {loginError}
        </div>
      )}

      <Formik
        initialValues={{ identifier: "", password: "" }}
        validationSchema={Yup.object({
          identifier: Yup.string().required("Email or username required"),
          password: Yup.string().required("Password required"),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            setLoginError(""); // Clear any previous errors
            await login(values);
          } catch (error) {
            console.error("Login error:", error);
            console.error("Error response:", error.response?.data);
            
            // Handle validation errors
            if (error.response?.data?.errors) {
              console.log("Validation errors:", error.response.data.errors);
              setLoginError(`Validation errors: ${error.response.data.errors.join(', ')}`);
            }
            // Handle different types of errors
            else if (error.response?.status === 403) {
              setLoginError("Please verify your email first before logging in.");
            } else if (error.response?.status === 401) {
              setLoginError("Invalid credentials. Please check your email/username and password.");
            } else if (error.response?.data?.message) {
              setLoginError(error.response.data.message);
            } else {
              setLoginError("Login failed. Please try again.");
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email / Username</label>
              <Field
                name="identifier"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage name="identifier" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <Field
                name="password"
                type="password"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-black text-white rounded-md hover:bg-[#dd9933] disabled:opacity-50"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}