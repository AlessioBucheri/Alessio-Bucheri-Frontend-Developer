import {
  FooterContainer,
  FooterHeader,
  FooterText,
  FooterEmail,
  FooterSocial,
  FooterSocialLink,
} from "../../Style/FooterPageStyle/FooterPageStyle";
import resumeData from "../../Database/resumeData";

export default function FooterPage() {
  const { profile } = resumeData;

  return (
    <FooterContainer>
      <FooterHeader>
        <span className='material-symbols-outlined'>line_start_circle</span>
        Contact Me
      </FooterHeader>
      <FooterText>
        <h1>Get in touch!</h1>
        <FooterEmail>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </FooterEmail>
      </FooterText>
      <FooterSocial>
        <FooterSocialLink
          className='contact-linkedin'
          href={profile.linkedin}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='btn-fill'></div>
          <div className='btn-text'>LinkedIn</div>
        </FooterSocialLink>
        <FooterSocialLink
          id='contact-github'
          href={profile.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='btn-fill'></div>
          <div className='btn-text'>GitHub</div>
        </FooterSocialLink>
        <FooterSocialLink
          id='contact-instagram'
          href='https://www.instagram.com/alessiobucheri/'
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
