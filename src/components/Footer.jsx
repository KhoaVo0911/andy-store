import React, { useEffect, useState } from 'react';

const Footer = ({ footerAPI }) => {
  const [Year, setYear] = useState();

  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);

  if (!footerAPI || !footerAPI.titles || !footerAPI.links) {
    // Trường hợp footerAPI hoặc titles hoặc links không tồn tại
    return null; // hoặc bạn có thể xử lý lỗi khác tùy theo trường hợp của bạn
  }

  const { titles, links } = footerAPI;

  return (
    <footer className='bg-theme pt-7 pb-5'>
      <div className='nike-container text-slate-200'>
        <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
          {titles.map((val, i) => (
            <div key={i} className="grid items-center">
              <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
            </div>
          ))}
          {links.map((list, i) => (
            <ul key={i} className="grid items-center gap-1">
              {list.map((link, i) => (
                <li key={i} className="text-sm sm:text-xs">{link.link}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className='mt-5 text-center'>
          <p className='text-sm md:text-center'>Website by<sup className='text-base font-bold'>&copy;</sup> <span className='font-semibold'>Andy</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
