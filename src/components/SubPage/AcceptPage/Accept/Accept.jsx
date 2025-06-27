import { LiaArrowRightSolid, LiaArrowLeftSolid } from "react-icons/lia";

const Accept = () => {
  const text = "text-white text-center";
  const button =
    "text-[14px] xs:text-[18px] w-[180px] xs:w-[200px] inline-block text-center py-[6px]";
  const button1 =
    "bg-white hover:bg-whiteHover text-black md:absolute md:bottom-[40px] md:right-[290px]";
  const button2 =
    "bg-green hover:bg-greenHover text-white md:absolute md:bottom-[40px] md:right-[60px]";

  return (
    <div className="bg-navy relative pt-[70px] sm:pt-[100px]">
      <div className="wrapper">
        <div className="pt-[50px] pb-[35px] xs:pb-[80px] md:pb-[100px]">
          <p className={`${text} text-[14px] xs:text-[18px] font-montserrat`}>
            krok 2
          </p>
          <h1
            className={`${text} text-[20px] xs:text-[30px] font-bold font-raleway`}
          >
            Odbiór techniczny nieruchomości
          </h1>
        </div>
        <div className="flex flex-col xs:flex-row justify-center items-center gap-[10px] xs:gap-[20px] md:block pb-[40px]">
          <a className={`${button} ${button1}`} href="/analiza-dokumentacji">
            <p className="flex items-center justify-center">
              <LiaArrowLeftSolid className="h-[25px] w-[25px] mr-[10px]" />
              KROK <span className="font-montserrat mt-[2px]">&nbsp;1</span>
            </p>
          </a>

          <a className={`${button} ${button2}`} href="/protokol">
            <p className="flex items-center justify-center">
              KROK <span className="font-montserrat mt-[2px]">&nbsp;3</span>
              <LiaArrowRightSolid className="h-[25px] w-[25px] ml-[10px]" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accept;
