import { LiaArrowRightSolid } from "react-icons/lia";

const Analysis = () => {

  const button =
    "bg-green hover:bg-greenHover text-white text-[14px] xs:text-[18px] w-[180px] xs:w-[200px] inline-block text-center py-[6px] absolute bottom-[40px] right-[50%] translate-x-[50%] md:translate-x-0 md:right-[60px]";
    const text = "text-white text-center";

  return (
    <div className="bg-navy relative pt-[70px] sm:pt-[100px]">
      <div className="wrapper">
        <div className="pt-[50px] pb-[100px]">
          <p className={`${text} text-[14px] xs:text-[18px] font-montserrat`}>
            krok 1
          </p>
          <h1
            className={`${text} text-[20px] xs:text-[30px] font-bold font-raleway`}
          >
            Analiza dokumentacji projektowej nieruchomości
          </h1>
        </div>
        <a className={`${button}`} href="/odbior-techniczny">
          <p className="flex items-center justify-center">
            KROK <span className="font-montserrat mt-[2px]">&nbsp;2</span>
            <LiaArrowRightSolid className="h-[20px] xs:h-[25px] w-[20px] xs:w-[25px] ml-[10px]" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Analysis;
