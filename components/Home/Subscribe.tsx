import { useState } from "react";
import { Modal } from "../Modal/Modal";

const isEmpty = (value: string) => value.trim() === "";
const isTenChars = (value: string) => value.trim().length === 10;
const isEmailValid = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

type FormProps = {
  name: string;
  email: string;
  touched: {
    name: boolean;
    email: boolean;
  };
  validity: {
    name: boolean;
    email: boolean;
  };
};

const initialFormState = {
  name: "",
  email: "",
  touched: {
    name: false,
    email: false,
  },
  validity: {
    name: true,
    email: true,
  },
};

export const Subscribe = () => {
  const [form, setForm] = useState<FormProps>(initialFormState);
  const [renderModal, setRenderModal] = useState<boolean>(false);

  function onClose() {
    setRenderModal(false);
  }

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    const nameisValid = !isEmpty(form.name);

    const emailIsValid = isEmailValid(form.email);

    setForm((current) => ({
      ...current,
      validity: {
        name: nameisValid,
        email: emailIsValid,
      },
    }));

    const formIsValid = nameisValid && emailIsValid;

    if (!formIsValid) {
      return;
    } else {
      const data = {
        name: form.name,
        email: form.email,
      };

      fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      setRenderModal(true);
    }

    setForm(initialFormState);
  };

  return (
    <>
      <form
        className="py-12 mx-auto mt-12 text-white border-2 border-white rounded-md shadow-xl bg-hunter-green w-75vw"
        onSubmit={submitFormHandler}
      >
        <h2 className="text-3xl text-center">Subscribe to our Newsletter</h2>
        <p className="pt-4 text-lg text-center">
          Be the first to know about all things happening at Mello Bistro
        </p>

        <div className="flex flex-col pt-12 md:flex-row md:justify-evenly">
          <div className="self-center">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                className="py-1 pl-2 ml-2 rounded-md text-hunter-green w-[200px]"
                onChange={(e) =>
                  setForm((current) => ({
                    ...current,
                    name: e.target.value,
                    touched: {
                      ...current.touched,
                      name: true,
                    },
                    validity: {
                      ...current.validity,
                      name: true,
                    },
                  }))
                }
                value={form.name}
              />
            </label>
          </div>
          <div className="self-center py-6">
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                className="py-1 pl-2 ml-2 rounded-md text-hunter-green w-[200px]"
                onChange={(e) =>
                  setForm((current) => ({
                    ...current,
                    email: e.target.value,
                    touched: {
                      ...current.touched,
                      email: true,
                    },
                    validity: {
                      ...current.validity,
                      email: true,
                    },
                  }))
                }
                value={form.email}
              />
            </label>
          </div>
          <button className="self-center w-24 py-2 text-xl bg-white rounded-full text-hunter-green hover:bg-slate-100">
            Submit
          </button>
        </div>
      </form>

      <Modal show={renderModal} onClose={onClose}>
        Thank you for signing up to our newsletter! You will be receving a
        confirmation email shortly. Keep an eye out for our emails, we will be
        promoting specials and promos that are taking place at Mello Bistro!
      </Modal>
    </>
  );
};
