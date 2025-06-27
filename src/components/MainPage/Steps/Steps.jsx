const Steps = () => {
  const style =
    "w-[250px] xxs:w-[270px] xs:w-[320px] h-[250px] xs:h-[300px] bg-navy hover:bg-navyHover text-white text-center border-2 border-green p-[30px] pt-[120px] text-[14px] xs:text-[16px] font-raleway relative m-[15px] mx-auto";
  const button =
    "bg-green hover:bg-greenHover text-white text-[14px] xs:text-[16px] w-[160px] xs:w-[200px] inline-block text-center py-[6px] absolute left-[50%] translate-x-[-50%] bottom-[40px]";
  const box = "w-[100%] h-full";
  const number =
    "text-[50px] xs:text-[60px] font-montserrat absolute top-[15px] left-[50%] translate-x-[-50%]";
  const bgNumber =
    "absolute text-[200px] xs:text-[300px] font-montserrat left-[50%] translate-x-[-50%] top-[-50px] xs:top-[-80px] opacity-[3%]";
  const text = "text-white text-center font-raleway";

  const steps = [
    {
      id: 1,
      title: "Analiza dokumentacji projektowej nieruchomości",
      href: "/analiza-dokumentacji",
    },
    {
      id: 2,
      title: "Odbiór techniczny nieruchomości",
      href: "/odbior-techniczny",
    },
    {
      id: 3,
      title: "Podpisanie protokołu z odbioru technicznego nieruchomości",
      href: "/protokol",
    },
  ];

  return (
    <div
      id="odbiory"
      className="bg-navy px-[30px] xs:px-[60px] py-[100px] xs:py-[200px]"
    >
      <div className="pb-[50px] xs:pb-[100px]">
        <p
          className={`${text} text-[20px] xs:text-[30px] font-semibold mb-[5px]`}
        >
          Krok po kroku
        </p>
        <p className={`${text} text-[14px] xs:text-[18px]`}>
          Jak wygląda odbiór techniczny? Sprawdź nas w praktyce!
        </p>
        <div className="flex justify-center mt-[30px]">
          <div className="w-[200px] h-[2px] bg-green"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[30px] bg-navy wrapper">
        {steps.map((step) => (
          <div key={step.id} className={style}>
            <p className={number}>{step.id}</p>
            <p className={bgNumber}>{step.id}</p>
            <div className={box}>
              <p>{step.title}</p>
              <a className={button} href={step.href}>
                Dowiedz się więcej
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
