const Worth = () => {

    const text = "text-black text-center font-raleway";

  return (
    <div
      id="odbiór-techniczny"
      className="px-[30px] xs:px-[60px] py-[100px] xs:py-[200px]"
    >
      <p className={`${text} text-[14px] xs:text-[18px]`}>
        Sprawdzamy to, czego nie widzisz!
      </p>
      <p className={`${text} text-[20px] xs:text-[30px] font-bold`}>
        Dlaczego warto skorzystać z profesjonalnego odbioru technicznego?
      </p>
      <div className="flex justify-center mt-[30px] mb-[50px] sm:mb-[100px]">
        <div className="w-[200px] h-[3px] bg-green"></div>
      </div>
      <div className="wrapper">
        <div className="flex flex-col-reverse sm:flex-row justify-center text-center mx-auto xxl:w-[70%]">
          <a
            className="font-normal font-raleway text-[25px] xs:text-[40px] text-navy mt-[50px] sm:mt-0"
            href="/"
          >
            J-KA <span className="text-green font-bold">BUD</span>
          </a>
          <div className="w-[3px] h-[70px] bg-navy mx-[30px] hidden sm:block"></div>
          <p className="w-full sm:w-[60%] md:w-[70%] xl:w-[75%] text-[14px] xs:text-[18px] text-black font-raleway text-justify">
            <span className="font-bold">Profesjonalny odbiór techniczny</span>{" "}
            to kluczowy etap zakupu nieruchomości, który pozwala na rzetelną
            weryfikację jakości wykonania lokalu przed jego formalnym
            przejęciem. Doświadczony inżynier, posługując się normami
            budowlanymi i wiedzą techniczną, precyzyjnie identyfikuje ewentualne
            wady i niezgodności z umową deweloperską. Sporządzony protokół
            usterek stanowi podstawę do ich usunięcia na koszt dewelopera, co
            minimalizuje ryzyko dodatkowych wydatków w przyszłości. Skorzystanie
            z tej usługi to gwarancja bezpieczeństwa, oszczędności oraz pewność,
            że inwestycja spełnia wszystkie wymagane standardy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Worth;
