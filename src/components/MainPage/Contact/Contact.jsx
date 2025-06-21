import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import Form from "./Form";

const Contact = () => {
  const styles = {
    wrapper: "wrapper",
    container: "px-[30px] xs:px-[60px] py-[100px] xs:py-[200px]",
    title:
      "text-black text-center font-raleway text-[20px] xs:text-[30px] font-bold",
    subtitle: "text-black text-center font-raleway text-[14px] xs:text-[18px]",
    underline: "w-[200px] h-[3px] bg-green",
    layout:
      "flex flex-col lg:flex-row justify-center space-y-[50px] xs:space-y-[80px] sm:space-y-[100px] lg:space-y-0 space-x-0 lg:space-x-[5%] xl:space-x-[10%]",
    brand: "font-normal font-raleway text-[30px] xs:text-[40px] text-navy",
    divider:
      "w-[70px] ss:w-[3px] h-[3px] ss:h-[70px] bg-navy my-[20px] xs:my-[30px] mx-auto ss:mx-[30px] ss:my-0",
    contactText:
      "text-[14px] xs:text-[18px] text-black font-montserrat hover:text-green",
    icon: "mr-[5px] mt-[3px]",
  };

  return (
    <div className={styles.wrapper} id="kontakt">
      <div className={styles.container}>
        <p className={styles.title}>Kontakt</p>
        <p className={styles.subtitle}>
          Skontaktuj się z inżynierem przed odbiorem!
        </p>

        <div className="flex justify-center mt-[30px] mb-[50px] xs:mb-[80px] sm:mb-[100px]">
          <div className={styles.underline}></div>
        </div>

        <div className={styles.layout}>
          <div className="flex flex-col ss:flex-row justify-center text-center">
            <a className={styles.brand} href="/">
              J-KA <span className="text-green font-bold">BUD</span>
            </a>

            <div className={styles.divider}></div>

            <div className="mt-[5px] space-y-[15px]">
              <a
                className={`${styles.contactText} flex justify-center ss:justify-start`}
                href="tel:737161885"
              >
                <FiPhone className={styles.icon} />
                737 161 885
              </a>
              <a
                className={`${styles.contactText} flex justify-center`}
                href="mailto:biuro@j-kabud.com"
              >
                <TfiEmail className={styles.icon} />
                biuro@j-kabud.com
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
