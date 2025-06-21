import { useState } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { CiFacebook, CiInstagram } from "react-icons/ci";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const icon = "mr-[5px] mt-[3px]";
  const info =
    "text-white hover:text-green text-[12px] xs:text-[14px] font-normal font-montserrat flex";
  const desktopLink =
    "text-black text-[18px] font-semibold font-raleway underline-hover";
  const media =
    "text-navy hover:text-green h-[25px] xs:h-[35px] w-[25px] xs:w-[35px]";

  const navItems = [
    { label: "HOME", href: "#odbiór-techniczny" },
    { label: "ODBIORY", href: "#odbiory" },
    { label: "OFERTA", href: "#oferta" },
    { label: "KONTAKT", href: "#kontakt" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="py-[5px] bg-navy">
        <div className="flex flex-row justify-between xs:justify-end mx-[30px] sm:mx-[60px] xs:space-x-[50px]">
          <a className={info} href="tel:737161885">
            <FiPhone className={icon} /> 737 161 885
          </a>
          <a className={info} href="mailto:biuro@j-kabud.com">
            <TfiEmail className={icon} /> biuro@j-kabud.com
          </a>
        </div>
      </div>
      <div className="wrapper">
        <div
          className="flex justify-between mx-[30px] sm:mx-[60px] my-[5px] items-center"
        >
          <a
            className="font-normal font-raleway text-[25px] xs:text-[30px] sm:text-[40px] text-navy"
            href="/"
          >
            J-KA <span className="text-green font-bold">BUD</span>
          </a>

          {/* mobile */}
          <button
            className="md:hidden text-navy hover:text-green"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>

          {/* desktop */}
          <div className="hidden md:flex justify-between items-center space-x-16">
            {navItems.map((item) => (
              <a key={item.label} className={desktopLink} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* mobile menu */}
        {isVisible && (
          <div className="flex flex-col items-center space-y-8 bg-white pt-20 h-[100vh] md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="text-navy text-[14px] xs:text-[18px] font-semibold font-raleway hover:text-green"
                href={item.href}
                onClick={() => setIsVisible(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-[10px] pt-[50px]">
              <a
                href="https://www.facebook.com/profile.php?id=61577693998379"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                onClick={() => setIsVisible(false)}
              >
                <CiFacebook className={media} />
              </a>
              <a
                href="https://www.instagram.com/jka_bud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => setIsVisible(false)}
              >
                <CiInstagram className={media} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
