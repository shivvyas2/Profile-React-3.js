import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Toggler from './Toggler';
import logo from './../assets/logo.png';

const Navbar = ({ initialTextColor = "white", initialIconColor = "white", forceIconColor }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isToggled, setIsToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsToggled(false);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDarkBackground = isMobile || isScrolled;
  const textColor = isDarkBackground ? "white" : initialTextColor;
  const iconColor = forceIconColor || (isDarkBackground ? "white" : initialIconColor);
  const backgroundColor = isDarkBackground ? 'rgba(2, 2, 6, 0.95)' : 'transparent';

  return (
    <>
      <header
        ref={navbarRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '80%',
          margin: '0 auto',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '15px 25px' : '20px 40px',
          backgroundColor: backgroundColor,
          boxShadow: isDarkBackground ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
          borderRadius: '25px',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <ScrollLink to="home" smooth={true} duration={500} offset={-70} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img src={logo} alt="Logo" width={45} height={45} />
        </ScrollLink>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '20px', position: 'relative' }}>
            
            <ScrollLink to="about" smooth={true} duration={500} offset={-70} style={getLinkStyle(isScrolled, textColor)}>About Me</ScrollLink>
          
           
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} style={getLinkStyle(isScrolled, textColor)}>Contact</ScrollLink>
            <a href="https://www.linkedin.com/in/shivvyas" target="_blank" rel="noopener noreferrer" style={getLinkStyle(false, textColor)}>LinkedIn</a>
            <a href="/resume.pdf" download="Shiv_Vyas_Resume.pdf" style={getLinkStyle(false, textColor)}>Resume</a>
          </nav>
        )}

        {/* Toggler for Mobile Overlay */}
        {isMobile && (
          <Toggler
            onChange={() => setIsToggled(!isToggled)}
            style={{ color: iconColor }}
          />
        )}
      </header>

      {/* Mobile Centered Overlay */}
      {isMobile && isToggled && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#020206',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          overflow: 'hidden',
        }}>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70} style={getOverlayLinkStyle()} onClick={() => setIsToggled(false)}>About Me</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70} style={getOverlayLinkStyle()} onClick={() => setIsToggled(false)}>Contact</ScrollLink>
          <a href="https://www.linkedin.com/in/shivvyas" target="_blank" rel="noopener noreferrer" style={getOverlayLinkStyle()} onClick={() => setIsToggled(false)}>LinkedIn</a>
          <a href="/resume.pdf" download="Shiv_Vyas_Resume.pdf" style={getOverlayLinkStyle()} onClick={() => setIsToggled(false)}>Resume</a>
        </div>
      )}
    </>
  );
};

const getLinkStyle = (isActive, color) => ({
  color: isActive ? '#ffffff' : color,
  fontWeight: '500',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
});

const getOverlayLinkStyle = () => ({
  color: '#cccccc',
  fontSize: '1.5rem',
  fontWeight: '500',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
});

export default Navbar;
