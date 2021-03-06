import React, { ChangeEvent, FormEvent } from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Button } from "../styled.components/styled.components";
import { InputSpan } from "../styled.components/styled.components";



export const AddOperator = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [pictureUrl, setPictureUrl] = useState<string>("");

  const handleChangeNameOperator = (event:ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangePictureUrlOperator = (event:ChangeEvent<HTMLInputElement>) => {
    setPictureUrl(event.target.value);
  };

  const buttonPut = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("https://operatorapi.herokuapp.com/operator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          id: name,
          name: name,
          pictureUrl: pictureUrl,
        }),
      });
    } catch (error) {
      console.error("Ошибка:", error);
    }
    router.push(`/`);
  };

 
  return (
    <form className={styles.addOperator} onSubmit={buttonPut}>
      <InputSpan>Оператор</InputSpan>
      <input
        type="text"
        required
        placeholder="Название оператора"
        className={styles.addOperator__input}
        value={name}
        onChange={handleChangeNameOperator}
      />
      <InputSpan>Логотип</InputSpan>
      <input
        type="text"
        required
        placeholder="Ссылка на логотип"
        pattern="https?:\/\/(www.)?(\w*\W*)*"
        className={styles.addOperator__input}
        value={pictureUrl}
        onChange={handleChangePictureUrlOperator}
      />
      <Button>
        Добавить
      </Button>
    </form>
  );
};


