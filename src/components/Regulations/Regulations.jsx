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
        "1.2. Kontakt z administratorem możliwy jest pod adresem e-mail: biuro@j-kabud.pl lub telefonicznie: 737 161 885.",
        "1.3. Regulamin określa zasady korzystania ze strony internetowej oraz sposób świadczenia usług informacyjnych przez firmę J-KA BUD.",
      ],
    },
    {
      title: "2. Zakres świadczonych usług",
      content: [
        "2.1. J-KA BUD świadczy usługi odbiorów technicznych mieszkań i domów od deweloperów, polegające na:",
        {
          list: [
            "sprawdzeniu zgodności wykonania lokalu z dokumentacją projektową,",
            "weryfikacji stanu technicznego zgodnie z normami budowlanymi,",
            "udzieleniu zaleceń dotyczących ewentualnych nieprawidłowości.",
          ],
        },
        "2.2. Usługi są realizowane na podstawie indywidualnie zawieranej umowy.",
        "2.3. Informacje przedstawione na stronie mają charakter poglądowy i nie stanowią oferty handlowej w rozumieniu Kodeksu cywilnego.",
      ],
    },
    {
      title: "3. Warunki współpracy",
      content: [
        "3.1. Klient, po kontakcie z firmą J-KA BUD, może otrzymać wzór umowy określającej szczegółowe warunki współpracy.",
        "3.2. Umowa zawiera m.in. informacje o:",
        {
          list: [
            "adresie nieruchomości podlegającej odbiorowi,",
            "terminie realizacji,",
            "wynagrodzeniu oraz sposobie płatności,",
            "obowiązkach klienta (udostępnienie lokalu, dokumentów).",
          ],
        },
        "3.3. Wymagana jest zaliczka w wysokości 200 zł brutto płatna na konto bankowe wskazane w umowie, najpóźniej na dzień przed terminem odbioru.",
      ],
    },
    {
      title: "4. Formularz kontaktowy",
      content: [
        "4.1. Strona umożliwia wysłanie zapytania za pomocą formularza kontaktowego.",
        "4.2. Wysłanie formularza nie oznacza jeszcze zawarcia umowy.",
        "4.3. Dane osobowe są przetwarzane zgodnie z Polityką Prywatności.",
      ],
    },
    {
      title: "5. Prawa autorskie",
      content: [
        "5.1. Wszelkie materiały umieszczone na stronie, w tym treści, zdjęcia, grafiki i logo, są chronione prawem autorskim.",
        "5.2. Ich kopiowanie lub wykorzystywanie bez zgody właściciela jest zabronione.",
      ],
    },
    {
      title: "6. Odpowiedzialność",
      content: [
        "6.1. Firma J-KA BUD nie ponosi odpowiedzialności za decyzje podjęte przez użytkowników na podstawie treści zamieszczonych na stronie.",
        "6.2. Szczegółowy zakres odpowiedzialności reguluje podpisywana indywidualna umowa.",
      ],
    },
    {
      title: "7. Płatności i kary umowne",
      content: [
        "7.1. Szczegóły płatności określane są w umowie z klientem.",
        "7.2. W przypadku opóźnienia w zapłacie, mogą zostać naliczone odsetki ustawowe za każdy dzień zwłoki.",
      ],
    },
    {
      title: "8. Zmiany regulaminu",
      content: [
        "8.1. Administrator zastrzega sobie prawo do zmiany niniejszego regulaminu.",
        "8.2. Zmiany obowiązują od momentu opublikowania ich na stronie internetowej.",
      ],
    },
    {
      title: "9. Postanowienia końcowe",
      content: [
        "9.1. W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.",
        "9.2. Korzystanie ze strony jest równoznaczne z akceptacją niniejszego regulaminu.",
        "9.3. Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby firmy J-KA BUD.",
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
