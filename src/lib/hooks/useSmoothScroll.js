import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const onClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    links.forEach(link => {
      link.addEventListener('click', onClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', onClick);
      });
    };
  }, []);
};

export default useSmoothScroll;
