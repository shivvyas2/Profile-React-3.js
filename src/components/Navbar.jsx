import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { styles } from './../styles';
import { navLinks } from '../constants/constants';
import { logo, menu, close } from './../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const currentPath = location.pathname;
    const activeLink = navLinks.find(
      (link) => `/${link.id}` === currentPath || `/${link.id}/` === currentPath
    );
    setActive(activeLink ? activeLink.title : '');
  }, [location.pathname]);

  const handleExternalLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Shiv &nbsp;
            <span className='sm:block hidden'> | React Native</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          <li
            className='text-grey hover:text-white text-[18px] font-medium cursor-pointer'
            onClick={() => handleExternalLinkClick('https://www.linkedin.com/in/shivvyas/')}
          >
            LinkedIn
          </li>
          <li
            className='text-grey hover:text-white text-[18px] font-medium cursor-pointer'
            onClick={() =>
              handleExternalLinkClick('https://drive.google.com/file/d/1ab4OT6BLuDoO_818DYl1C4ThGF_7tzPn/view?usp=share_link')
            }
          >
            Resume
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-grey'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} onClick={(e) => e.preventDefault()}>
                    {link.title}
                  </a>
                </li>
              ))}
              <li
                className='text-grey font-poppins font-medium cursor-pointer text-[16px]'
                onClick={() => {
                  setToggle(!toggle);
                  handleExternalLinkClick('https://www.linkedin.com/in/shivvyas/');
                }}
              >
                LinkedIn
              </li>
              <li
                className='text-grey font-poppins font-medium cursor-pointer text-[16px]'
                onClick={() => {
                  setToggle(!toggle);
                  handleExternalLinkClick(
                    'https://drive.google.com/file/d/1ab4OT6BLuDoO_818DYl1C4ThGF_7tzPn/view?usp=share_link'
                  );
                }}
              >
                Resume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;