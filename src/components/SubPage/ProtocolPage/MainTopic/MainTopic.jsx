

const MainTopic = () => {
    const button =
      "inline-block bg-green hover:bg-greenHover text-white text-[14px] xs:text-[18px] w-[180px] xs:w-[200px] text-center py-[6px]";
      const text = "text-center font-raleway";
      const box = "flex flex-wrap justify-center"
      const textBox =
        "w-[250px] xxs:w-[270px] xs:w-[320px] h-[200px] xs:h-[300px] p-[20px] m-[15px] flex items-center border-green border-[3px] text-navy hover:bg-whiteHover";
      const span = "font-semibold";

  return (
    <div className="wrapper">
      <div>
        <p
          className={`${text} text-[14px] xs:text-[18px] pt-[100px] xs:pt-[150px]`}
        >
          protokół techniczny
        </p>
        <p className={`${text} text-[20px] xs:text-[30px] font-bold`}>
          Podpisanie protokołu z odbioru nieruchomości
        </p>
        <div className="flex justify-center mt-[30px] mb-[50px] xs:mb-[100px]">
          <div className="w-[200px] h-[3px] bg-green"></div>
        </div>
        <p
          className={`${text} text-[14px] xs:text-[18px] m-auto w-[85%] xs:w-[75%]`}
        >
          Po przeprowadzeniu szczegółowej analizy stanu technicznego
          nieruchomości, sporządzany jest{" "}
          <span className="font-semibold">protokół techniczny</span>. Dokument
          ten zawiera wykaz wszystkich zidentyfikowanych usterek, niezgodności
          oraz elementów wymagających poprawek lub naprawy ze strony dewelopera.
          Protokół podpisywany jest przez obie strony klienta oraz
          przedstawiciela dewelopera i stanowi formalną podstawę do zgłoszenia
          ewentualnych roszczeń oraz rozpoczęcia procesu usuwania usterek w
          wyznaczonym terminie.
        </p>
      </div>
      <div className="flex justify-center my-[50px] xs:my-[100px]">
        <div className="w-[200px] h-[3px] bg-navy"></div>
      </div>
      <div className="mb-[50px] xs:mb-[100px] px-[30px] xs:px-[60px]">
        <p className={`${text} text-[20px] xs:text-[30px] font-bold`}>
          Warto wiedzieć
        </p>
        <p className={`${text} text-[12px] xs:text-[18px]`}>
          Ustawa z dnia 20.05.2021 r. o ochronie praw nabywcy lokalu
          mieszkalnego lub domu jednorodzinnego:
        </p>
      </div>
      <div className={`${box}`}>
        <div className={`${textBox}`}>
          <p className={`${text} text-[12px] xs:text-[18px]`}>
            <span className={`${span}`}>Deweloper ma 14 dni</span> na
            ustosunkowanie się do zgłoszonych usterek oraz{" "}
            <span className={`${span}`}>poinformowanie</span> o zamiarze ich
            naprawy lub ewentualnym odrzuceniu. W przypadku odrzucenia,
            konieczne jest{" "}
            <span className={`${span}`}>podanie uzasadnienia</span>.
          </p>
        </div>
        <div className={`${textBox}`}>
          <p className={`${text} text-[12px] xs:text-[18px]`}>
            <span className={`${span}`}>Brak pisemnej odpowiedzi</span> ze
            strony dewelopera w wyznaczonym terminie oznacza{" "}
            <span className={`${span}`}>tzw. cichą zgodę</span> na usunięcie
            wszystkich usterek ujętych w protokole odbioru.
          </p>
        </div>
        <div className={`${textBox}`}>
          <p className={`${text} text-[12px] xs:text-[18px]`}>
            Deweloper zobowiązany jest do usunięcia zaakceptowanych usterek w{" "}
            <span className={`${span}`}>terminie do 30 dni</span> od daty
            odbioru technicznego.
          </p>
        </div>
        <div className={`${textBox}`}>
          <p className={`${text} text-[12px] xs:text-[18px]`}>
            <span className={`${span}`}>W szczególnych przypadkach</span> czas
            realizacji napraw może się{" "}
            <span className={`${span}`}>wydłużyć</span>, na przykład z powodu
            konieczności oczekiwania na produkcję lub dostawę niestandardowych
            elementów, takich jak szyby.
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-[50px] xs:pt-[150px] pb-[100px] xs:pb-[150px]">
        <a className={`${button}`} href="/">
          <p className="flex items-center justify-center">POWRÓT</p>
        </a>
      </div>
    </div>
  );
}

export default MainTopic