import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "../../utils";
import { urlFor, client } from "../../client";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    console.log(e.target);
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const formValidation = (e) => {
    e.preventDefault();
    console.log({ errorMessage });
    if (!formData.message) {
      setErrorMessage("A message is required");
    }
    if (!formData.email) {
      setErrorMessage("E-mail is required");
    }
    if (!formData.name) {
      setErrorMessage("Your name makes you you. We'd love to know it");
    }
    if (!formData.message && !formData.name && !formData.email) {
      setErrorMessage("Please fill in all required fields");
    }
    if (formData && formData.name && formData.email && formData.message) {
      handleSubmit();
    }
  };

  console.log("formData", formData.name);

  const handleSubmit = () => {
    setErrorMessage("");
    setLoading(true);

    const contact = {
      _type: "Contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div className="app__contact w-full flex-1 flex-col py-28">
      <h1 className="app__contact-head-text mb-5 flex-1 flex-col text-center font-bold md:text-5xl">
        Get in touch with us
      </h1>
      {!isFormSubmitted ? (
        <form
          noValidate
          onSubmit={formValidation}
          className="app__contact-form flex w-full flex-col items-center"
        >
          <div className="mb-4 flex w-full px-4 md:w-[50%]">
            <input
              className="w-full rounded-xl border-2 bg-light-color p-4 font-sans text-sm placeholder:text-black hover:shadow-md"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              required
              minLength="10"
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-4 flex w-full px-4 md:w-[50%]">
            <input
              className="w-full rounded-xl border-2 bg-light-color p-4 font-sans text-sm placeholder:text-black hover:shadow-md"
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              required
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex w-full px-4 md:w-[50%]">
            <textarea
              className="h-[150px] w-full rounded-xl border-2 bg-light-color p-4 font-sans text-sm placeholder:text-black hover:shadow-md"
              placeholder="Your Message"
              value={message}
              name="message"
              type="textarea"
              required
              minLength="50"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="submit"
            className="mt-5 bg-primary-color text-lg text-white transition duration-300 ease-in-out hover:bg-black hover:text-white"
            // onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3>Thank you for getting in touch!</h3>
        </div>
      )}
      {errorMessage && (
        <div className="easeInOut px-4 transition duration-1000">
          <div className=" mx-auto mt-4 w-full rounded-xl bg-warning-color py-6 px-10 md:w-[50%]">
            <p className="flex items-center justify-between pr-2 text-left text-xl text-white">
              {errorMessage}
              <span
                className="cursor-pointer"
                onClick={() => setErrorMessage("")}
              >
                X
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
