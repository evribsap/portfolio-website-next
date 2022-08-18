import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href="tel:111-111-1111">
            111-111-1111
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href="mailto:example@gmail.com">
            example@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovation one project at a time
          </Slogan>
       </CompanyContainer>
       <SocialIcons href="https://github.com" target="_blank">
        <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com" target="_blank">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://instagram.com" target="_blank">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
