import { useState } from "react";
import { Modal } from "../Modal/Modal";
import classNames from "classnames";
import emailjs from "@emailjs/browser";

type FormProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  touched: {
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
  };
  validity: {
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
  };
};

const initialFormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  touched: {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    message: false,
  },
  validity: {
    firstName: true,
    lastName: true,
    phone: true,
    email: true,
    message: true,
  },
};

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

export const Form = () => {
  const [form, setForm] = useState<FormProps>(initialFormState);
  const [renderModal, setRenderModal] = useState<boolean>(false);

  function onClose() {
    setRenderModal(false);
  }

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    const firstNameisValid = !isEmpty(form.firstName);
    const lastNameisValid = !isEmpty(form.lastName);
    const phoneNumberisValid = isTenChars(form.phone);
    const messageIsValid = !isEmpty(form.message);
    const emailIsValid = isEmailValid(form.email);

    setForm((current) => ({
      ...current,
      validity: {
        firstName: firstNameisValid,
        lastName: lastNameisValid,
        phone: phoneNumberisValid,
        message: messageIsValid,
        email: emailIsValid,
      },
    }));

    const formIsValid =
      firstNameisValid &&
      lastNameisValid &&
      phoneNumberisValid &&
      messageIsValid &&
      emailIsValid;

    if (!formIsValid) {
      return;
    } else {
      emailjs
        .sendForm(
          "contact_service",
          "template_juoa6ir",
          e.target,
          "user_kwfk7unP7jS9DOSbszb09"
        )
        .then(
          (result: any) => {
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.message);
          }
        );
      setRenderModal(true);
    }

    setForm(initialFormState);
  };

  const validInput = classNames(
    "p-4 w-72 md:w-50vw rounded-md outline-equestrian-green"
  );
  const invalidInput = classNames(
    "p-4 w-72 md:w-50vw rounded-md border-2 border-red-300"
  );
  const inputContainer = classNames("m-4 flex flex-col items-center");
  const invalidMessage = classNames("text-red-600 pt-2 text-lg");

  const variants = {
    initial: { opacity: 1 },
    animate: { x: 5, y: 5 },
  };

  return (
    <>
      <form
        className="flex flex-col items-center py-8"
        onSubmit={submitFormHandler}
      >
        <div className={inputContainer}>
          <label htmlFor="fname">
            <input
              id="fname"
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  firstName: e.target.value,
                  touched: {
                    ...current.touched,
                    firstName: true,
                  },
                  validity: {
                    ...current.validity,
                    firstName: true,
                  },
                }))
              }
              value={form.firstName}
              className={form.validity.firstName ? validInput : invalidInput}
            />
          </label>
          {!form.validity.firstName && (
            <span className={invalidMessage}>
              Please enter your first name.
            </span>
          )}
        </div>
        <div className={inputContainer}>
          <label htmlFor="lName">
            <input
              id="lname"
              type="text"
              name="lname"
              placeholder="Last Name"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  lastName: e.target.value,
                  touched: {
                    ...current.touched,
                    lastName: true,
                  },
                  validity: {
                    ...current.validity,
                    lastName: true,
                  },
                }))
              }
              value={form.lastName}
              className={form.validity.lastName ? validInput : invalidInput}
            />
          </label>
          {!form.validity.lastName && (
            <span className={invalidMessage}>Please enter your last name.</span>
          )}
        </div>
        <div className={inputContainer}>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
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
              className={form.validity.email ? validInput : invalidInput}
            />
          </label>
          {!form.validity.email && (
            <span className={invalidMessage}>
              Please enter your email address.
            </span>
          )}
        </div>
        <div className={inputContainer}>
          <label htmlFor="phone">
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  phone: e.target.value,
                  touched: {
                    ...current.touched,
                    phone: true,
                  },
                  validity: {
                    ...current.validity,
                    phone: true,
                  },
                }))
              }
              value={form.phone}
              className={form.validity.phone ? validInput : invalidInput}
            />
          </label>
          {!form.validity.phone && (
            <span className={invalidMessage}>
              Please enter your phone number.
            </span>
          )}
        </div>
        <div className={inputContainer}>
          <label htmlFor="message">
            <textarea
              className={form.validity.message ? validInput : invalidInput}
              id="message"
              name="message"
              placeholder="Leave a message"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  message: e.target.value,
                  touched: {
                    ...current.touched,
                    message: true,
                  },
                  validity: {
                    ...current.validity,
                    message: true,
                  },
                }))
              }
              value={form.message}
            />
          </label>
          {!form.validity.message && (
            <span className={invalidMessage}>Please enter your message.</span>
          )}
        </div>

        <button
          type="submit"
          className="px-8 py-4 text-white rounded-md bg-equestrian-green"
        >
          Submit
        </button>
      </form>
      <Modal show={renderModal} onClose={onClose}>
        Thank you for reaching out to us. We will be in contact within the next
        24 hours!
      </Modal>
    </>
  );
};
