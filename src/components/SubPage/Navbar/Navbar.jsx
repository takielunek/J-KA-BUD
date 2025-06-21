import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineRollback } from "react-icons/ai";

const Navbar = () => {
  const icon = "mr-[5px] mt-[3px]";
  const info =
    "text-white hover:text-green text-[12px] xs:text-[14px] font-normal font-montserrat flex";
  const desktopLink =
    "text-black text-[12px] xs:text-[18px] font-semibold font-raleway underline-hover";

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Górna belka z telefonem i e-mailem */}
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

      {/* Główna część navbara */}
      <div className="wrapper">
        <div className="flex justify-between mx-[30px] xs:mx-[60px] my-[5px]">
          <a
            className="font-normal font-raleway text-[25px] xs:text-[30px] sm:text-[40px] text-navy"
            href="/"
          >
            J-KA <span className="text-green font-bold">BUD</span>
          </a>
          <div className="flex items-center">
            <a className={desktopLink} href="/">
              <p className="flex items-center">
                POWRÓT{" "}
                <AiOutlineRollback className="h-[20px] xs:h-[25px] w-[20px] xs:w-[25px] ml-[5px] mb-[3px] xs:mb-0" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
