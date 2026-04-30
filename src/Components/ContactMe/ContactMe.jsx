import { useRef, useState } from "react";
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
  const [isSending, setIsSending] = useState(false);

  useMagneticButton(buttonRef, 0.5);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current || isSending) {
      return;
    }

    setConfirmation("");
    setIsSending(true);

    emailjs
      .sendForm("service_qa87gth", "template_l2aqchu", form.current, {
        publicKey: "KtN6gM7SxZPZffzQT",
      })
      .then(
        () => {
          setConfirmation("Your message has been sent!");
          form.current.reset(); // Resetta il form
        },
        () => {
          setConfirmation("Failed to send message, please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <ContactContainer>
      <ContactContent>
        <h1 className='animate'>
          If you want to reach me, start the conversation!
        </h1>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <hr />
          <label>Name</label>
          <input
            type='text'
            name='user_name'
            placeholder='Your name'
            required
          />
          <hr />
          <label>Email</label>
          <input
            type='email'
            name='user_email'
            placeholder='name@example.com'
            required
          />
          <hr />
          <label>Message</label>
          <textarea
            name='message'
            placeholder='Tell me about your project, role or collaboration idea.'
            required
          />
          <hr />
          <ContactButton ref={buttonRef} type='submit' disabled={isSending}>
            <div className='btn-fill'></div>
            <div className='btn-text'>{isSending ? "Sending..." : "Send"}</div>
          </ContactButton>
        </ContactForm>
        {confirmation && (
          <ConfirmationMessage aria-live='polite'>
            {confirmation}
          </ConfirmationMessage>
        )}
      </ContactContent>
    </ContactContainer>
  );
}
