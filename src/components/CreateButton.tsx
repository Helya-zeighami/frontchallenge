import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUsers } from "./UsersContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { API_URL } from "@/lib/users";

interface CreateButtonProps {
  onClick?: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = () => {
  const router = useRouter();
  const { addUser } = useUsers();
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col items-center">
      {showForm && (
        <Formik
          initialValues={{ name: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            const res = await fetch(`${API_URL}/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: values.name }),
            });
            if (res.ok) {
              const newUser = await res.json();
              addUser(newUser);
              router.refresh();
              toggleFormVisibility();
            }
            setSubmitting(false);
          }}
        >
          <Form className="text-center">
            <Field
              type="text"
              name="name"
              placeholder="Enter name"
              className="border rounded-md px-2 py-1 mb-2 mr-2 text-black"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 text-lg font-semibold mb-2"
            >
              Submit
            </button>
          </Form>
        </Formik>
      )}
      <button
        onClick={toggleFormVisibility}
        className="bg-pink-500 text-white rounded-full px-[100px] py-3 text-lg font-semibold mb-4"
      >
        {showForm ? "Cancel" : "Create"}
      </button>
    </div>
  );
};

export default CreateButton;
