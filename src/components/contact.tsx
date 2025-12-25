"use client";

import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWeb3Forms from "@web3forms/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Input } from "./input";
import { Socials } from "./socials";

const data = {
  heading: `Let's talk`,
  message: `Fill in the form to send me a message. Alternatively, reach out to me at my email address.`,
  email: `drew@drewxs.dev`,
  location: `Calgary, AB, Canada`,
  success: `Thanks for reaching out!\nI will respond as soon as I get a chance!`,
};

type Form = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<Form>();

  const { submit } = useWeb3Forms({
    access_key: "3ad8712e-b5d5-4e68-a4d4-a99b1b429c98",
    settings: { from_name: "drewxs.dev" },
    onSuccess: () => reset(),
    onError: console.error,
  });

  return (
    <section className="home section contact">
      <div className="container">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-row">
          <div className="contact-col content">
            <div className="contact-col__row">
              <h2 className="contact-heading h4">{data.heading}</h2>
              <p className="contact-message">{data.message}</p>
            </div>
            <div className="contact-col__row">
              <div className="contact-block">
                <Link href={`mailto:${data.email}`}>
                  <FontAwesomeIcon className="contact-block__icon" icon={faEnvelope} />
                </Link>
                <p className="contact-block__text">{data.email}</p>
              </div>
              <div className="contact-block">
                <FontAwesomeIcon className="contact-block__icon" icon={faLocationDot} />
                <p className="contact-block__text">{data.location}</p>
              </div>
            </div>
            <div className="contact-col__row">
              <Socials />
            </div>
          </div>
          {!isSubmitSuccessful && (
            <form id="contact-form" className="contact-col contact-form" onSubmit={handleSubmit(submit)}>
              <Input
                type="text"
                label="Name"
                value={watch("name")}
                {...register("name", { required: true })}
                required
                fullwidth
              />
              <Input
                type="email"
                label="Email"
                value={watch("email")}
                {...register("email", { required: true })}
                required
                fullwidth
              />
              <Input
                type="text"
                label="Message"
                value={watch("message")}
                {...register("message", { required: true })}
                required
                fullwidth
                multiline
              />
              <button type="submit" className="button" disabled={isSubmitting}>
                Send
              </button>
            </form>
          )}
          {isSubmitSuccessful && <div className="contact-col">{data.success}</div>}
        </div>
      </div>
    </section>
  );
};
