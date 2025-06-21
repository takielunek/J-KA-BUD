import { FaSquareFull } from "react-icons/fa";

const PrivacyPolicy = () => {
  const styles = {
    section: "my-[20px] xs:my-[40px]",
    header:
      "bg-navy text-white font-raleway text-center text-[20px] xs:text-[30px] font-semibold py-[50px]",
    title:
      "text-[14px] xs:text-[18px] text-black font-montserrat font-semibold my-[5px]",
    paragraph:
      "text-[14px] xs:text-[18px] text-black font-montserrat ml-[15px]",
    bullet:
      "text-green mt-[6px] xs:mt-[4px] mr-[10px] xs:mr-[15px] h-[7px] xs:h-[10px] w-[7px] xs:w-[10px] shrink-0",
    wrapper: "wrapper px-[30px] xs:px-[60px] py-[50px] xs:py-[80px]",
  };

  const rights = [
    "dostępu do danych osobowych,",
    "sprostowania danych,",
    "usunięcia lub ograniczenia przetwarzania danych,",
    "przenoszenia danych,",
    "wniesienia sprzeciwu wobec przetwarzania danych,",
    "cofnięcia zgody na przetwarzanie danych w dowolnym momencie,",
    "wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).",
  ];

  const sections = [
    {
      title: "1. Administrator danych osobowych",
      content: [
        "Administratorem danych osobowych jest: J-KA BUD Karolina Jesionek.",
      ],
    },
    {
      title: "2. Zakres i cel przetwarzania danych",
      content: [
        "Za pośrednictwem formularza kontaktowego zbierane są następujące dane osobowe: imię, adres e-mail, numer telefonu oraz treść wiadomości. Dane te są przetwarzane wyłącznie w celu nawiązania kontaktu, udzielenia odpowiedzi na zapytanie lub podjęcia współpracy.",
      ],
    },
    {
      title: "3. Podstawa prawna przetwarzania danych",
      content: [
        "Podstawą prawną przetwarzania danych jest zgoda osoby, której dane dotyczą, wyrażona poprzez dobrowolne przesłanie formularza kontaktowego.",
      ],
    },
    {
      title: "4. Przekazywanie danych",
      content: [
        "Dane osobowe są przesyłane i przechowywane na wskazanej skrzynce e-mail, obsługiwanej przez usługę Gmail oraz mogą być przetwarzane przez usługę EmailJS, umożliwiającą obsługę formularza kontaktowego.",
      ],
    },
    {
      title: "5. Okres przechowywania danych",
      content: [
        "Dane osobowe będą przechowywane do momentu ich usunięcia przez Administratora. Z uwagi na specyfikę usługi dane nie są usuwane automatycznie.",
      ],
    },
    {
      title: "6. Prawa osób, których dane dotyczą",
      content: [
        "Osobom, których dane są przetwarzane, przysługują prawa określone w RODO, w tym prawo do:",
      ],
      list: rights,
    },
    {
      title: "7. Bezpieczeństwo danych",
      content: [
        "Administrator stosuje odpowiednie środki techniczne i organizacyjne mające na celu ochronę danych osobowych przed nieuprawnionym dostępem, utratą lub nieuprawnionym przetwarzaniem. Obejmuje to zabezpieczenie dostępu do skrzynki e-mail, regularne aktualizacje oprogramowania oraz wdrożenie odpowiednich procedur ochrony danych.",
      ],
    },
    {
      title: "8. Kontakt",
      content: [
        "Wszelkie pytania dotyczące przetwarzania danych osobowych można kierować na adres e-mail: biuro@j-kabud.pl lub telefonicznie pod numer: 737 161 885.",
      ],
    },
  ];

  return (
    <div className="pt-[80px] sm:pt-[100px]">
      <h1 className={styles.header}>Polityka Prywatności</h1>
      <div className={styles.wrapper}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.title}>{section.title}</h2>

            {section.content.map((text, i) => (
              <p key={i} className={styles.paragraph}>
                {text}
              </p>
            ))}

            {section.list && (
              <div className="mt-[10px] space-y-2 ml-[15px]">
                {section.list.map((item, j) => (
                  <div key={j} className="flex items-start">
                    <FaSquareFull className={styles.bullet} />
                    <span className="text-[14px] xs:text-[18px] font-montserrat text-black leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
