import { FaSquareFull } from "react-icons/fa";
import { LiaArrowRightSolid } from "react-icons/lia";

const MainTopic = () => {
  const square =
    "h-[7px] xs:h-[10px] w-[7px] xs:w-[10px] text-green";
  const docs = "flex items-center gap-[10px]";
  const button =
    "bg-green hover:bg-greenHover text-white text-[14px] xs:text-[18px] w-[180px] xs:w-[200px] text-center py-[6px]";
  const text = "text-black text-center font-raleway";

  const documents = [
    "Rzut nieruchomości / rzut architektoniczny",
    "Standard deweloperski",
    "Rzut instalacji elektrycznej (opcjonalnie)",
    "Rzut instalacji wodno-kanalizacyjnej (opcjonalnie)",
  ];

  const documents2 = [
    "Rzut instalacji centralnego ogrzewania (opcjonalnie)",
    "Rzut instalacji wentylacyjnej (opcjonalnie)",
    "Zmiany aranżacyjne / lokatorskie (opcjonalnie)",
  ];

  return (
    <div className="wrapper py-[100px] xs:py-[150px]">
      <div>
        <p className={`${text} text-[14px] xs:text-[18px]`}>
          analiza dokumentacji
        </p>
        <p className={`${text} text-[20px] xs:text-[30px] font-bold`}>
          Przygotowanie do odbioru technicznego
        </p>
        <div className="flex justify-center mt-[30px] mb-[50px] xs:mb-[100px]">
          <div className="w-[200px] h-[3px] bg-green"></div>
        </div>
        <p className="text-[14px] xs:text-[18px] text-center font-raleway m-auto w-[85%] xs:w-[75%]">
          Inżynier dokładnie analizuje{" "}
          <span className="font-semibold">
            dokumentację projektową przekazaną przez klienta
          </span>
          , w tym również wszelkie wprowadzone zmiany aranżacyjne lub
          lokatorskie. Celem tej weryfikacji jest sprawdzenie zgodności
          realizacji inwestycji z projektem architektonicznym, standardem
          deweloperskim oraz obowiązującymi przepisami. Podczas analizy
          identyfikowane są również ewentualne odstępstwa i nieprawidłowości,
          które mogą mieć wpływ na jakość i bezpieczeństwo użytkowania
          nieruchomości.
        </p>
      </div>
      <div className="flex justify-center my-[50px] xs:my-[100px]">
        <div className="w-[200px] h-[3px] bg-navy"></div>
      </div>

      <div className="px-[30px] xs:px-[60px]">
        <p className="text-[18px] xs:text-[20px] text-center mb-[30px] xs:mb-[50px] font-bold">
          Klient przekazuje:
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row justify-center items-start gap-[10px] md:gap-0 space-x-0 md:space-x-[50px] xl:space-x-[100px] text-[14px] xs:text-[18px] font-raleway">
            <div className="flex flex-col gap-[10px]">
              {documents.map((doc, index) => (
                <p className={docs} key={index}>
                  <FaSquareFull className={square} />
                  {doc}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-[10px]">
              {documents2.map((doc, index) => (
                <p className={docs} key={index}>
                  <FaSquareFull className={square} />
                  {doc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-[50px] xs:pt-[150px]">
        <a className={button} href="/odbior-techniczny">
          <p className="flex items-center justify-center">
            KROK <span className="font-montserrat mt-[1.5px]">&nbsp;2</span>
            <LiaArrowRightSolid className="h-[20px] xs:h-[25px] w-[20px] xs:w-[25px] ml-[10px]" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default MainTopic;
