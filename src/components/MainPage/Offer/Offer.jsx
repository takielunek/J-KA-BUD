import { PiBuildingApartmentThin, PiHouseLineThin } from "react-icons/pi";

const Offer = () => {
  const box =
    "relative border-[2px] border-green w-[250px] xxs:w-[270px] xs:w-[320px] h-[250px] xs:h-[300px] m-[15px] p-[30px] mx-auto text-[14px] xs:text-[18px] hover:bg-navyHover";
  const text = "text-white text-center font-raleway";
  const icon = "h-[65px] xs:h-[90px] w-[65px] xs:w-[90px]";
  const iconBox = "flex justify-center mb-[10px] xs:mb-[20px]";
  const greenButton =
    "bg-green hover:bg-greenHover text-white text-[14px] xs:text-[18px] text-center py-[6px] w-[180px] xs:w-[250px]";
  const bgIcon =
    "absolute h-[180px] xxs:h-[200px] xs:h-[250px] w-[180px] xxs:w-[200px] xs:w-[250px] left-[50%] translate-x-[-50%] opacity-[3%] top-[5px]";
    const button =
      "bg-green hover:bg-greenHover text-white text-[14px] xs:text-[18px] w-[160px] xs:w-[200px] inline-block text-center py-[6px] absolute left-[50%] translate-x-[-50%] bottom-[40px]";
  
  const offers = [
    {
      icon: PiBuildingApartmentThin,
      title: "Mieszkanie do 50 m²",
      price: "500 zł netto",
      href: "#kontakt",
    },
    {
      icon: PiBuildingApartmentThin,
      title: "Mieszkanie do 100 m²",
      price: "700 zł netto",
      href: "#kontakt",
    },
    {
      icon: PiBuildingApartmentThin,
      title: "Mieszkanie od 100 m²",
      price: "od 900 zł netto",
      href: "#kontakt",
    },
    {
      icon: PiHouseLineThin,
      title: "Dom",
      subtitle: "indywidualna wycena",
      href: "#kontakt",
    },
  ];

  return (
    <div
      id="oferta"
      className="bg-navy px-[30px] xs:px-[60px] py-[100px] xs:py-[200px]"
    >
      <p
        className={`${text} text-[20px] xs:text-[30px] font-semibold mb-0 sm:mb-[10px]`}
      >
        Oferta
      </p>
      <p className={`${text} text-[14px] xs:text-[18px]`}>
        Sprawdź czy wpisujemy się w Twoje standardy!
      </p>
      <div className="flex justify-center mt-[30px] mb-[50px] xs:mb-[100px]">
        <div className="w-[200px] h-[2px] bg-green"></div>
      </div>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
      {offers.map((offer, index) => {
  const Icon = offer.icon;
  return (
    <div key={index} className={`${box} ${text}`}>
      <Icon className={bgIcon} />
      <div className={iconBox}>
        <Icon className={icon} />
      </div>
      <p>{offer.title}</p>
      {offer.price && <p>{offer.price}</p>}
      <a className={button} href={offer.href}>
        Umów się
      </a>
    </div>
  );
})}
      </div>
      <div className="flex justify-center mt-[50px] xs:mt-[100px]">
        <a className={greenButton} href="/analiza-dokumentacji">
          Odbiór krok po kroku
        </a>
      </div>
    </div>
  );
};

export default Offer;
