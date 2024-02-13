import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUsers } from "./UsersContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const { editUser } = useUsers();
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      {showForm ? (
        <Formik
          initialValues={{ name: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            const res = await fetch(
              `https://json-server-lyko.vercel.app/users/${id}`,
              {
                method: "PUT",
                body: JSON.stringify({ name: values.name }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (res.ok) {
              editUser(id, values.name);
              router.refresh();
              toggleFormVisibility();
            }
            setSubmitting(false);
          }}
        >
          <Form>
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
            <div>
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 text-sm font-semibold mb-2 mr-2"
              >
                Submit
              </button>
              <button
                onClick={toggleFormVisibility}
                type="button"
                className="bg-gray-500 text-white rounded-md px-3 py-1 text-sm font-semibold mb-2"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      ) : (
        <button
          onClick={toggleFormVisibility}
          className="inline-block bg-pink-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default EditButton;
