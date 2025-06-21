import Usterki from "./Usterki";

const Faults = () => {
  const styles = {
    wrapper: "py-[100px] xs:py-[200px]",
    container: "px-[30px] xs:px-[60px]",
    title:
      "text-black text-center font-raleway text-[20px] xs:text-[30px] font-bold mb-[5px]",
    subtitle: "text-black text-center font-raleway text-[14px] xs:text-[18px]",
    underline: "w-[200px] h-[3px] bg-green",
    underlineWrapper:
      "flex justify-center mt-[30px] mb-[50px] xs:mb-[100px] sm:mb-[150px]",
  };

  return (
    <div id="usterki">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p className={styles.title}>Przykładowe usterki</p>
          <p className={styles.subtitle}>
            Zgłoszenie usterki do protokołu odbioru technicznego zobowiązuje
            dewelopera do jej usunięcia!
          </p>
        </div>

        <div className={styles.underlineWrapper}>
          <div className={styles.underline}></div>
        </div>

        <Usterki />
      </div>
    </div>
  );
};

export default Faults;
