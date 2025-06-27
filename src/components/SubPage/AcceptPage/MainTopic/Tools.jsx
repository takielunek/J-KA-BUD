import { FiTool } from "react-icons/fi";
import { FiMaximize2 } from "react-icons/fi";
import { FiDroplet } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";
import { FiWind } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";
import { FiZap } from "react-icons/fi";

const Tools = () => {
  const blockWrapper =
    "wrapper flex flex-col items-center text-center mx-auto w-full xxl:w-[80%] px-[30px] xs:px-[60px] sm:px-0";
  const title =
    "text-[14px] xs:text-[18px] font-raleway font-bold text-black mb-[10px] xs:mb-[20px]";
  const innerRow =
    "flex flex-col-reverse sm:flex-row justify-center text-center w-full";
  const lineSeparator = "w-[3px] h-full bg-navy mx-[20px] hidden sm:flex";
  const paragraph =
    "w-full sm:w-[70%] md:w-[80%] xl:w-[75%] text-[14px] xs:text-[16px] text-black font-raleway text-justify";
  const icon =
    "text-green w-[45px] xs:w-[60px] ss:w-[50px] h-[45px] xs:h-[60px] ss:h-[50px] mb-[10px] xs:mb-[20px] sm:mb-0";

  const sprzet = [
    {
      title: "Łata kontrolna 2 m",
      text: "Umożliwia precyzyjny pomiar odchyłek od płaszczyzny poziomej lub pionowej na dużych powierzchniach, np. ścianach i posadzkach.",
      icon: <FiMaximize2 className={`${icon}`} />,
    },
    {
      title: "Kątownica budowlana",
      text: "Służy do sprawdzania kątów prostych w narożnikach pomieszczeń, wnękach okiennych i framugach drzwiowych.",
      icon: <FiBox className={`${icon}`} />,
    },
    {
      title: "Szczelinomierz",
      text: "Pozwala na zmierzenie szerokości szczelin przy oknach, drzwiach, listwach przypodłogowych oraz innych elementach wykończenia.",
      icon: <FiActivity className={`${icon}`} />,
    },
    {
      title: "Miernik wilgotności",
      text: "Umożliwia kontrolę wilgotności tynków - szczególnie istotne przy ocenie gotowości do dalszych prac wykończeniowych.",
      icon: <FiDroplet className={`${icon}`} />,
    },
    {
      title: "Miernik napięcia",
      text: "Służy do weryfikacji obecności napięcia w gniazdkach i instalacjach elektrycznych.",
      icon: <FiZap className={`${icon}`} />,
    },
    {
      title: "Tester RJ45",
      text: "Sprawdza poprawność połączeń w instalacji sieciowej oraz ciągłość przewodów internetowych.",
      icon: <FiCpu className={`${icon}`} />,
    },
    {
      title: "Anemometr",
      text: "Miernik prędkości powietrza – wykorzystywany do kontroli działania wentylacji grawitacyjnej i mechanicznej.",
      icon: <FiWind className={`${icon}`} />,
    },
    {
      title: "Dalmierz laserowy",
      text: "Umożliwia szybki i precyzyjny pomiar odległości, wysokości oraz powierzchni pomieszczeń, przydatny do weryfikacji zgodności z projektem.",
      icon: <FiTarget className={`${icon}`} />,
    },
  ];

  return (
    <div className="space-y-[30px] xs:space-y-[60px]">
      {sprzet.map((el, idx) => (
        <div key={idx} className={blockWrapper}>
          <div className="block sm:hidden">{el.icon}</div>
          <p className={title}>{el.title}</p>
          <div className={innerRow}>
            <div className="flex items-center">
              <div className="hidden sm:block">{el.icon}</div>
              <div className={lineSeparator}></div>
            </div>
            <p className={paragraph}>{el.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
