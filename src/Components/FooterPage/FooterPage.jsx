import React from "react";
import {
  FooterContainer,
  FooterHeader,
  FooterText,
  FooterEmail,
  FooterSocial,
  FooterSocialLink,
} from "../../Style/FooterPageStyle/FooterPageStyle";

export default function ContactPage() {
  return (
    <FooterContainer>
      <FooterHeader>
        <span className='material-symbols-outlined'>line_start_circle</span>
        Contact Me
      </FooterHeader>
      <FooterText>
        <h1>Get in touch!</h1>
        <FooterEmail>
          <a href='mailto:hello@danmachado.com'>alessio.j.1993@gmail.com</a>
        </FooterEmail>
      </FooterText>
      <FooterSocial>
        <FooterSocialLink
          className='contact-linkedin'
          href='https://www.linkedin.com/in/alessio-bucheri-462721214/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='btn-fill'></div>
          <div className='btn-text'>LinkedIn</div>
        </FooterSocialLink>
        <FooterSocialLink
          id='contact-github'
          href='https://github.com/AlessioBucheri'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='btn-fill'></div>
          <div className='btn-text'>GitHub</div>
        </FooterSocialLink>
        <FooterSocialLink
          id='contact-instagram'
          href='https://www.instagram.com/alexbucheri/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='btn-fill'></div>
          <div className='btn-text'>Instagram</div>
        </FooterSocialLink>
      </FooterSocial>
    </FooterContainer>
  );
}
