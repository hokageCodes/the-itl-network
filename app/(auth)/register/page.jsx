"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import api from "../../../lib/api";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-bold mb-6 text-black">Create Account</h1>

      <Formik
        initialValues={{
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          location: "",
          licensingStage: "",
          agreedToTnC: false,
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is required"),
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          phone: Yup.string().required("Phone number is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm your password"),
          location: Yup.string().required("Location is required"),
          licensingStage: Yup.string().required("Licensing stage is required"),
          agreedToTnC: Yup.bool().oneOf([true], "You must agree to the Terms"),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const res = await api.post("/auth/register", {
              ...values,
              role: "member", // force role
            });

            // 🔹 Redirect user to OTP page with email in query
            router.push(`/verify-otp?email=${encodeURIComponent(res.data.email)}`);
          } catch (err) {
            if (err.response?.data?.message) {
              setErrors({ email: err.response.data.message });
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <Field name="firstName" className="w-full px-3 py-2 border rounded-md" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <Field name="lastName" className="w-full px-3 py-2 border rounded-md" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium">Username</label>
              <Field name="username" className="w-full px-3 py-2 border rounded-md" />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <Field name="phone" className="w-full px-3 py-2 border rounded-md" />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium">Location</label>
              <Field name="location" className="w-full px-3 py-2 border rounded-md" />
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Licensing Stage */}
            <div>
              <label className="block text-sm font-medium">Licensing Stage</label>
              <Field
                as="select"
                name="licensingStage"
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select stage</option>
                <option value="NCA Candidate">NCA Candidate</option>
                <option value="Articling">Articling</option>
                <option value="Bar Exam Prep">Bar Exam Prep</option>
                <option value="Licensed Lawyer">Licensed Lawyer</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage
                name="licensingStage"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2">
              <Field type="checkbox" name="agreedToTnC" className="h-4 w-4" />
              <label className="text-sm">
                I agree to the{" "}
                <a href="/terms" className="text-[#dd9933] underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <ErrorMessage
              name="agreedToTnC"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-black text-white rounded-md hover:bg-[#dd9933]"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
