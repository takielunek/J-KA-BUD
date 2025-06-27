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
    "w-full sm:w-[70%] md:w-[80%] xl:w-[75%] text-[14px] xs:text-[16px] text-black font-raleway text-justify";
const icon =
  "text-green w-[45px] xs:w-[60px] ss:w-[50px] h-[45px] xs:h-[60px] ss:h-[50px] mb-[10px] xs:mb-[20px]";

  const usterki = [
    {
      title: "Stolarka okienna i drzwiowa",
      text: "Najczęściej występujące usterki to nieprawidłowy docisk i regulacja skrzydeł, uszkodzenia lub przerwy w uszczelkach, zarysowania szyb i profili, a także brak elementów takich jak klamki, osłonki czy maskownice. W drzwiach często pojawiają się wady montażowe, źle osadzona ościeżnica, uszkodzony szyld lub wizjer oraz trudności z prawidłowym zamykaniem skrzydła.",
      icon: <FiHome className={`${icon}`} />,
    },
    {
      title: "Mury i tynki",
      text: "Do typowych usterek należą pęknięcia i odspojenia tynków, nadmierna wilgotność ścian, obecność grzyba lub wykwitów, uszkodzenia narożników oraz nieprawidłowo wykonane kąty i płaszczyzny. Tynki mogą być również głuche (niedostatecznie związane z podłożem), co prowadzi do ich odpadania.",
      icon: <FiGrid className={`${icon}`} />,
    },
    {
      title: "Posadzka i wylewki",
      text: "Nierówności, brak dylatacji, pęknięcia, ubytki czy zbyt cienka warstwa wylewki to częste problemy. Błędy te mogą skutkować trudnościami przy montażu podłóg oraz ich późniejszym uszkodzeniem, np. wybrzuszeniami paneli czy pękaniem płytek.",
      icon: <FiLayers className={`${icon}`} />,
    },
    {
      title: "Instalacja elektryczna i niskoprądowa",
      text: "Niekiedy punkty elektryczne są rozmieszczone niezgodnie z projektem lub normami – np. zbyt wysoko lub nisko. Występują też błędy takie jak brak napięcia w gniazdkach, niezakończone przewody, źle zarobione kable, porysowany osprzęt czy brak ramki. Problemy obejmują także nieciągłość instalacji internetowej (RJ45) oraz nieprawidłowe oznaczenia przewodów.",
      icon: <FiZap className={`${icon}`} />,
    },
    {
      title: "Instalacja centralnego ogrzewania",
      text: "Typowe usterki to uszkodzenia mechaniczne grzejników, ich zapowietrzenie, nieszczelne podejścia, brak odpowiednich obróbek wokół wyprowadzeń instalacji oraz kolizje z innymi elementami wykończenia wnętrz. Często zdarza się również niezgodność z projektem, co może wpływać na efektywność ogrzewania.",
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
