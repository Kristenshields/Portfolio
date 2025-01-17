import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </footer>
  );
};

export default Footer;
