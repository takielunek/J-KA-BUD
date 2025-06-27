import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const icon = "mr-[5px] mt-[3px]";
  const text = "text-white text-[14px] font-montserrat";
  const columns = "flex flex-col space-y-[5px] xs:space-y-[10px]";
  const media =
    "text-white hover:text-green h-[25px] xs:h-[30px] w-[25px] xs:w-[30px]";

  return (
    <div id="kontakt" className="bg-navy">
      <div className="wrapper px-[30px] xs:px-[60px] pt-[30px] xs:pt-[60px] space-y-[20px]">
        <div className="flex justify-between mb-[30px]">
          <a
            className="font-normal font-raleway text-[25px] xs:text-[30px] sm:text-[40px] text-white"
            href="/"
          >
            J-KA <span className="text-green font-bold">BUD</span>
          </a>
          <div className="flex items-center space-x-[10px]">
            <a
              href="https://www.facebook.com/profile.php?id=61577693998379"
              target="_blank"
              alt="facebook icon"
            >
              <CiFacebook className={`${media}`} />
            </a>
            <a
              href="https://www.instagram.com/jka_bud/"
              target="_blank"
              alt="instagram icon"
            >
              <CiInstagram className={`${media}`} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-[30px] xs:space-y-[50px] sm:space-y-0 sm:space-x-[10%]">
          <div className={`${columns}`}>
            <a className={`${text} flex hover:text-green`} href="tel:737161885">
              <FiPhone className={`${icon}`} />
              737 161 885
            </a>
            <a
              className={`${text} flex hover:text-green`}
              href="mailto:biuro@j-kabud.com"
            >
              <TfiEmail className={`${icon}`} />
              biuro@j-kabud.com
            </a>
            <p className={`${text}`}>NIP : </p>
            <p className={`${text}`}>REGON : </p>
          </div>
          <div className={`${columns}`}>
            <a className={`${text} hover:text-green`} href="/">
              Home
            </a>
            <a
              className={`${text} hover:text-green`}
              href="/polityka-prywatnosci"
            >
              Polityka prywatności
            </a>
            <a className="text-[14px] font-montserrat text-green hover:text-green" href="/regulamin">
              Regulamin
            </a>
          </div>
        </div>
        <p className="text-white text-[12px] font-montserrat flex justify-end pt-[100px] pb-[15px]">
          programmed by
          <a
            className="hover:text-green"
            target="_blank"
            href="https://github.com/takielunek?tab=repositories"
          >
            &nbsp;takielunek
          </a>
        </p>
      </div>
      <div className="w-full h-[1px] bg-green"></div>
      <div className="wrapper">
        <p className="text-white text-[10px] xs:text-[12px] font-montserrat flex justify-center py-[20px]">
          Copyright &copy; {currentYear}{" "}
          <span className="hidden xs:block">
            &nbsp;wszelkie prawa zastrzeżone&nbsp;
          </span>{" "}
          J-KA
          <span className="text-green font-bold">&nbsp;BUD</span>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
