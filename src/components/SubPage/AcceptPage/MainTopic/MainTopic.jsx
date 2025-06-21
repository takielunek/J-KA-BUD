import Usterki from "../../../MainPage/Faults/Usterki";
import { LiaArrowRightSolid } from "react-icons/lia";

const MainTopic = () => {
  const button =
    "inline-block bg-green hover:bg-greenHover text-white text-[14px] xs:text-[18px] w-[180px] xs:w-[200px] text-center py-[6px]";
    const text = "text-black text-center font-raleway";

  return (
    <div className="wrapper">
      <div>
        <p
          className={`${text} text-[14px] xs:text-[18px] pt-[100px] xs:pt-[150px]`}
        >
          odbiór techniczny
        </p>
        <p className={`${text} text-[20px] xs:text-[30px] font-bold`}>
          Właściwy dbiór nieruchomości
        </p>
        <div className="flex justify-center mt-[30px] mb-[50px] xs:mb-[100px]">
          <div className="w-[200px] h-[3px] bg-green"></div>
        </div>
        <p className="text-[14px] xs:text-[18px] text-center font-raleway pb-[50px] m-auto w-[85%] xs:w-[75%]">
          Inżynier dokładnie sprawdza{" "}
          <span className="font-semibold">
            wszystkie elementy nieruchomości
          </span>{" "}
          – począwszy od instalacji elektrycznej, wodno-kanalizacyjnej oraz
          centralnego ogrzewania, poprzez jakość wykończenia ścian, podłóg i
          sufitów, aż po drzwi i okna. Weryfikuje poprawność wykonanych prac,
          ich zgodność ze standardem deweloperskim, warunkami technicznymi,
          normami oraz sztuką budowlaną.
        </p>
        <p className="text-[14px] xs:text-[18px] text-center font-raleway m-auto w-[85%] xs:w-[75%]">
          Celem odbioru jest wykrycie wszelkich wad, usterek oraz niedoróbek,
          które mogą wpływać na komfort i bezpieczeństwo użytkowania
          nieruchomości, a także umożliwienie ich usunięcia przed finalnym
          przekazaniem inwestycji klientowi.
        </p>
      </div>
      <div className="flex justify-center my-[50px] xs:my-[100px]">
        <div className="w-[200px] h-[3px] bg-navy"></div>
      </div>

      <div className="px-[30px] xs:px-[60px]">
        <p className={`${text} text-[20px] xs:text-[30px] font-bold`}>
          Przykładowe usterki
        </p>
        <p className={`${text} text-[14px] xs:text-[18px]`}>
          Zgłoszenie usterki do protokołu odbioru technicznego zobowiązuje
          dewelopera do jej usunięcia!
        </p>
      </div>
      <div className="flex justify-center mt-[30px] mb-[50px] xs:mb-[100px]">
        <div className="w-[200px] h-[3px] bg-green"></div>
      </div>
      <Usterki />

      <div className="flex justify-center pt-[50px] xs:pt-[150px] pb-[100px] xs:pb-[150px]">
        <a className={`${button}`} href="/protokol">
          <p className="flex items-center justify-center">
            KROK <span className="font-montserrat mt-[1.5px]">&nbsp;3</span>
            <LiaArrowRightSolid className="h-[25px] w-[25px] ml-[10px]" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default MainTopic;
