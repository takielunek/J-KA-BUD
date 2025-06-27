import { TfiSearch } from "react-icons/tfi";
import { PiWrenchThin, PiHammerThin } from "react-icons/pi";
import { SlCheck, SlHome, SlPencil } from "react-icons/sl";
import { CiRuler, CiMaximize1 } from "react-icons/ci";

const Header = () => {
  const styles = {
    wrapper: "relative w-full h-[80vh] bg-navy mt-[70px] sm:mt-[100px]",
    text: "text-white text-center font-raleway",
    buttons:
      "text-[14px] xs:text-[16px] font-raleway py-[6px] xs:py-[10px] w-[160px] xs:w-[180px] text-center inline-block",
    icon: "absolute text-white h-[140px] w-[140px] opacity-[3%]",
  };

  return (
    <div className={styles.wrapper}>
      <CiMaximize1
        className={`${styles.icon} hidden sm:block right-[45%] top-[7%]`}
      />
      <PiWrenchThin
        className={`${styles.icon} hidden xs:block left-[15%] md:left-[21%] bottom-[34%]`}
      />
      <SlCheck
        className={`${styles.icon} hidden sm:block left-[50%] bottom-[12%] h-[90px] w-[90px]`}
      />
      <PiHammerThin
        className={`${styles.icon} left-[5%] md:left-[15%] top-[7%]`}
      />
      <CiRuler
        className={`${styles.icon} left-[1%] md:left-[10%] bottom-[10%]`}
      />
      <SlHome
        className={`${styles.icon} right-[18%] md:right-[25%] bottom-[45%] xs:bottom-[32%] h-[98px] w-[98px]`}
      />
      <TfiSearch
        className={`${styles.icon} hidden xs:block right-[10%] md:right-[20%] top-[8%] h-[90px] w-[90px]`}
      />
      <SlPencil
        className={`${styles.icon} hidden xs:block right-[5%] md:right-[15%] bottom-[15%] h-[90px] w-[90px]`}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-[30px] xs:px-[60px]">
        <h1
          className={`${styles.text} text-[30px] sm:text-[40px] ss:text-[45px]`}
        >
          ODBIORY TECHNICZNE NIERUCHOMOŚCI DEWELOPERSKICH
        </h1>
        <p className={`${styles.text} text-[15px] ss:text-[20px] mt-[15px]`}>
          Kielce | Skarżysko-Kamienna | Radom | Końskie | Starachowice
        </p>
        <div className="flex flex-col xs:flex-row space-y-4 xs:space-x-6 xs:space-y-0 mt-[30px] xs:mt-[70px]">
          <a
            className={`${styles.buttons} text-white bg-green hover:bg-greenHover`}
            href="#odbiory"
          >
            krok po kroku
          </a>
          <a
            className={`${styles.buttons} bg-white hover:bg-whiteHover`}
            href="#usterki"
          >
            usterki
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
