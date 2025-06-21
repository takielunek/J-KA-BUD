import { FiHome, FiGrid, FiLayers, FiZap, FiThermometer } from "react-icons/fi";

const Usterki = () => {
  const blockWrapper =
    "wrapper flex flex-col items-center text-center mx-auto w-full xxl:w-[80%] px-[30px] xs:px-[60px] sm:px-0";
  const title =
    "text-[14px] xs:text-[18px] font-raleway font-bold text-black mb-[10px] xs:mb-[20px]";
  const innerRow =
    "flex flex-col-reverse sm:flex-row justify-center text-center w-full";
  const lineSeparator = "w-[3px] h-full bg-navy mx-[20px] hidden sm:flex";
  const paragraph =
    "w-full sm:w-[70%] md:w-[80%] xl:w-[75%] text-[14px] xs:text-[18px] text-black font-raleway text-justify";
const icon =
  "text-green w-[45px] xs:w-[60px] ss:w-[50px] h-[45px] xs:h-[60px] ss:h-[50px] mb-[10px] xs:mb-[20px]";

  const usterki = [
    {
      title: "Stolarka okienna i drzwiowa",
      text: "Usterki w tej kategorii obejmują uszkodzenia ram, skrzydeł czy listew, a także nieprawidłowy montaż, który może skutkować nieszczelnością okien i drzwi. Zbyt wysoki próg może utrudniać użytkowanie i stanowić przeszkodę dla osób z ograniczoną mobilnością.",
      icon: <FiHome className={`${icon}`} />,
    },
    {
      title: "Mury i tynki",
      text: "Brak kątów prostych, nierówne powierzchnie czy ubytki świadczą o niskiej jakości wykonania. Obecność wilgoci lub grzyba może być sygnałem poważniejszych problemów konstrukcyjnych lub braku odpowiedniej wentylacji.",
      icon: <FiGrid className={`${icon}`} />,
    },
    {
      title: "Posadzka i wylewki",
      text: "Niewłaściwie wykonane posadzki mogą prowadzić do problemów z układaniem podłóg oraz powstawania pęknięć. Brak dylatacji, pylenie czy nierówności to częste błędy skutkujące dodatkowymi kosztami remontu.",
      icon: <FiLayers className={`${icon}`} />,
    },
    {
      title: "Instalacja elektryczna i niskoprądowa",
      text: "Błędna lokalizacja gniazdek, zbyt płytkie puszki lub niepodłączone przewody mogą wpłynąć na bezpieczeństwo oraz funkcjonalność instalacji. Problemy z okablowaniem sieciowym mogą uniemożliwić korzystanie z internetu czy domowych systemów multimedialnych.",
      icon: <FiZap className={`${icon}`} />,
    },
    {
      title: "Instalacja centralnego ogrzewania",
      text: "Uszkodzone grzejniki, brak obróbek czy kolizje z innymi instalacjami mogą prowadzić do awarii i braku komfortu cieplnego. Niezgodność z projektem często oznacza kosztowne przeróbki lub nieskuteczne ogrzewanie pomieszczeń.",
      icon: <FiThermometer className={`${icon}`} />,
    },
  ];

  return (
    <div className="space-y-[30px] xs:space-y-[80px]">
      {usterki.map((el, idx) => (
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

export default Usterki;
