import { useRouter } from "next/dist/client/router";
import InputMask from "react-input-mask";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { PayResult } from "./payResult";

export default function Pay() {
  const router = useRouter();
  const [number, setNumber] = useState<string>("");
  const [sum, setSum] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);
  const [state, setState] = useState<boolean>(false);

  function handleChangeNumber(event) {
    setNumber(event.target.value);
  }

  function handleChangeSum(event) {
    setSum(event.target.value);
  }

  const PayFormSubmit = (e) => {
    e.preventDefault();
    if (Math.random() * (1 - 0) > 0.5 ) {
      setResult(true);
      setState(true);
      setTimeout(() => {
        router.push(`/`);
      }, 1500);
    } else {
      setResult(false);
      setState(true);
    }
  };

  return (
    <form
      name="paymentForm"
      className={styles.paymentForm}
      onSubmit={PayFormSubmit}
    >
      <span className={styles.paymentForm__span}>Номер телефона</span>
      <InputMask
        mask="8(999)999-99-99"
        className={styles.paymentForm__input}
        required
        placeholder="8(999)999-99-99"
        type="string"
        name="phone"
        value={number}
        pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
        onChange={handleChangeNumber}
      />
      <span className={styles.paymentForm__span}>Сумма пополнения</span>
      <input
        className={styles.paymentForm__input}
        type="number"
        min="1"
        max="1000"
        required
        placeholder="Сумма пополнения"
        value={sum}
        onChange={handleChangeSum}
      />
      <div className={styles.paymentForm__result}></div>
      <button type="submit" className={styles.paymentForm__button}>
        Оплатить
      </button>
      <PayResult state={state} result={result} />
    </form>
  );
}
