import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useMagneticButton from "../../Hooks/AboutPageHooks/useMagneticButton.jsx";

import {
  ContactContainer,
  ContactContent,
  ContactForm,
  ContactButton,
  ConfirmationMessage,
} from "../../Style/ContactMeStyle/ContactMeStyle";

export default function ContactMe() {
  const form = useRef();
  const buttonRef = useRef(null);
  const [confirmation, setConfirmation] = useState("");

  useMagneticButton(buttonRef, 0.5); // Applicare l'effetto magnetico

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qa87gth", "template_l2aqchu", form.current, {
        publicKey: "KtN6gM7SxZPZffzQT",
      })
      .then(
        () => {
          setConfirmation("Your message has been sent!");
          form.current.reset(); // Resetta il form
        },
        (error) => {
          setConfirmation("Failed to send message, please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <ContactContainer>
      <ContactContent>
        <h1 className='animate'>
          If you want to reach me, start the conversation!
        </h1>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <hr />
          <label>1. What's your name?</label>
          <input
            type='text'
            name='user_name'
            placeholder='Alessio Bucheri'
            required
          />
          <hr />
          <label>2. What's your email?</label>
          <input
            type='email'
            name='user_email'
            placeholder='alessiobucheri.dev@gmail.com'
            required
          />
          <hr />
          <label>3. Your message</label>
          <textarea
            name='message'
            placeholder="Hi, I'm interested in your project..."
            required
          />
          <hr />
          <ContactButton ref={buttonRef} type='submit'>
            <div className='btn-fill'></div>
            <div className='btn-text'>Send!</div>
          </ContactButton>
        </ContactForm>
        {confirmation && (
          <ConfirmationMessage>{confirmation}</ConfirmationMessage>
        )}
      </ContactContent>
    </ContactContainer>
  );
}
