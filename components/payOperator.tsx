import { useRouter } from "next/dist/client/router";
import InputMask from "react-input-mask";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import {PayResult} from "./payResult"
import { Button, InputSpan } from "../styled.components/styled.components";

export const Pay = () => {
  const router = useRouter();
  const [number, setNumberPhone] = useState<string>("");
  const [sum, setSumPay] = useState<number>(0);
  const [result, setResultPay] = useState<boolean>(false);
  const [state, setStatePay] = useState<boolean>(false);

  function handleChangeNumber(event:{target:{value:string}}) {
    setNumberPhone(event.target.value);
  }

  const handleChangeSum = (event:{target:{value:string}}) => {
    setSumPay(Number(event.target.value));
  }

  const payFormSubmit = (event:{preventDefault:() => void}) => {
    event.preventDefault();
    if (Math.random() * (1 - 0) > 0.5 ) {
      setResultPay(true);
      setStatePay(true);
      setTimeout(() => {
        router.push(`/`);
      }, 1500);
    } else {
      setResultPay(false);
      setStatePay(true);
    }
  };

  return (
    <form name="paymentForm" className={styles.paymentForm} onSubmit={payFormSubmit}>
      <InputSpan>Номер телефона</InputSpan>
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
      <InputSpan>Сумма пополнения</InputSpan>
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
      <Button>
      Оплатить
      </Button>
      <PayResult state={state} result={result} />
    </form>
  );
}


