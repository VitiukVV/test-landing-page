import { Container, SectionStyled } from 'components/helpers/styled';
import React from 'react';
import { SocialContainer, SocialLink } from './Social.styled';

const Social = () => {
  return (
    <SectionStyled>
      <Container>
        <SocialContainer>
          <SocialLink
            href="https://www.facebook.com/profile.php?id=100088433736254"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://vnv.solutions/600e79d42eab063f0504b711/600e7e1775f36bf14e617f5f_facebook-app-symbol.svg"
              loading="lazy"
              width="20"
              alt="FaceBook"
            />
          </SocialLink>
          <SocialLink
            href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&amp;_r=1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.cdnlogo.com/logos/t/61/tiktok.svg"
              loading="lazy"
              width="20"
              alt="TikTok"
            />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/company/vnv-tech/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://vnv.solutions/600e79d42eab063f0504b711/60117e2d65f01e68a8dbbfb9_icon-rss-social-in-white.svg"
              loading="lazy"
              width="20"
              alt="LinkedIn"
            />
          </SocialLink>
          <SocialLink
            href="https://t.me/vnv_solutions"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://vnv.solutions/img/tg.png"
              loading="lazy"
              width="20"
              alt="Telegram"
            />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/vnv_solutions?igshid=MWI4MTIyMDE="
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://vnv.solutions/600e79d42eab063f0504b711/600e7e1775f36b6c7b617f61_instagram.svg"
              loading="lazy"
              width="20"
              alt="Instagram"
            />
          </SocialLink>
        </SocialContainer>
      </Container>
    </SectionStyled>
  );
};

export default Social;
