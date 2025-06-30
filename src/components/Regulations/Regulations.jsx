import { FaSquareFull } from "react-icons/fa";

const Regulations = () => {
  const headerStyle =
    "bg-navy text-white font-raleway text-center text-[20px] xs:text-[30px] font-semibold py-[50px]";
  const sectionTitleStyle =
    "text-[14px] xs:text-[16px] text-black font-montserrat font-semibold my-[10px]";
  const paragraphStyle =
    "text-[14px] text-black font-montserrat ml-[15px]";
  const bulletStyle = "flex items-start ml-[15px] space-x-2";
  const bulletIconStyle =
    "text-green mr-0 xs:mr-[5px] h-[7px] xs:h-[8px] w-[7px] xs:w-[8px] mt-[4px] shrink-0";
  const sectionSpacing = "my-[10px] xs:my-[20px]";

  const regulationsData = [
    {
      title: "1. Postanowienia ogólne",
      content: [
        "1.1. Właścicielem strony internetowej www.j-kabud.pl jest firma J-KA BUD, prowadzona przez Karolinę Jesionek.",
        "1.2. Kontakt z firmą możliwy jest pod numerem tel. 737 161 885 lub e-mailem: biuro@j-kabud.pl.",
        "1.3. Regulamin określa zasady korzystania ze strony oraz przedstawia ogólne warunki świadczenia usług.",
      ],
    },
    {
      title: "2. Zakres świadczonych usług",
      content: [
        "2.1. J-KA BUD świadczy usługi odbioru technicznego nieruchomości (mieszkań i domów) od deweloperów.",
        "2.2. Usługi polegają na:",
        {
          list: [
            "sprawdzeniu zgodności wykonania z dokumentacją projektową,",
            "weryfikacji stanu technicznego zgodnie z normami budowlanymi,",
            "sporządzeniu protokołu odbioru technicznego.",
          ],
        },
        "2.3. Usługi są realizowane na podstawie indywidualnie zawieranej umowy.",
      ],
    },
    {
      title: "3. Formularz kontaktowy",
      content: [
        "3.1. Strona umożliwia wysłanie zapytania za pomocą formularza kontaktowego.",
        "3.2. Wysłanie formularza nie oznacza zawarcia umowy.",
        "3.3. Dane osobowe przetwarzane są zgodnie z Polityką Prywatności.",
      ],
    },
    {
      title: "4. Prawa autorskie",
      content: [
        "4.1. Wszelkie materiały umieszczone na stronie, w tym treści, zdjęcia, grafiki i logo, są chronione prawem autorskim.",
        "4.2. Ich kopiowanie lub wykorzystywanie bez zgody właściciela jest zabronione.",
      ],
    },
    {
      title: "5. Odpowiedzialność",
      content: [
        "5.1. Firma J-KA BUD nie ponosi odpowiedzialności za decyzje podjęte przez użytkowników na podstawie treści zamieszczonych na stronie.",
        "5.2. Informacje zawarte na stronie mają charakter poglądowy i nie stanowią oferty w rozumieniu Kodeksu cywilnego.",
      ],
    },
    {
      title: "6. Zmiany regulaminu",
      content: [
        "6.1. Firma J-KA BUD zastrzega sobie prawo do zmiany niniejszego regulaminu.",
        "6.2. Zmiany obowiązują od momentu opublikowania ich na stronie internetowej.",
      ],
    },
  ];

  return (
    <div className="pt-[80px] sm:pt-[100px]">
      <h1 className={headerStyle}>Regulamin</h1>
      <div className="px-[30px] xs:px-[60px] py-[50px] xs:py-[80px] wrapper">
        {regulationsData.map((section, idx) => (
          <div key={idx} className={sectionSpacing}>
            <h2 className={sectionTitleStyle}>{section.title}</h2>
            <div className="space-y-[4px]">
              {section.content.map((item, i) =>
                typeof item === "string" ? (
                  <p key={i} className={paragraphStyle}>
                    {item}
                  </p>
                ) : (
                  item.list?.map((point, j) => (
                    <div key={j} className={bulletStyle}>
                      <FaSquareFull className={`${bulletIconStyle}`} />
                      <span className="text-[14px] font-montserrat text-black leading-tight">
                        {point}
                      </span>
                    </div>
                  ))
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regulations;
