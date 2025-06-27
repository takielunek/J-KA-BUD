

const Form = () => {

    const forms =
      "border border-navy hover:border-green focus:border-greenHover p-2 rounded-none focus:outline-none";

  return (
    <form className="flex flex-col gap-4 max-w-md text-[14px]">
      <input type="text" placeholder="Imię" className={`${forms}`} required />
      <input
        type="tel"
        placeholder="Numer telefonu"
        className={`${forms}`}
        required
      />
      <input
        type="email"
        placeholder="Adres e-mail"
        className={`${forms}`}
        required
      />
      <textarea
        placeholder="Treść wiadomości"
        className={`${forms} h-[150px]`}
        required
      ></textarea>

      <label className="flex flex-row items-start">
        <input type="checkbox" required className="mr-2 mt-[3px] xs:mt-[5px]" />
        <p>
          Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
          Polityką prywatności.
        </p>
      </label>

      <button
        type="submit"
        className="bg-green hover:bg-greenHover text-white py-2"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}

export default Form