import React from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Button } from "../styled.components/styled.components";
import { InputSpan } from "../styled.components/styled.components";



const AddOperator = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [pictureUrl, setPictureUrl] = useState<string>("");

  const handleChangeNameOperator = (event) => {
    setName(event.target.value);
  };

  const handleChangePictureUrlOperator = (event) => {
    setPictureUrl(event.target.value);
  };

  const buttonPut = async () => {
    router.push(`/`);
    try {
      await fetch("http://localhost:3000/operator", {
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
  };

 
  return (
    <form className={styles.addOperator} onSubmit={buttonPut}>
      <InputSpan>Оператор</InputSpan>
      <input
        type="string"
        required
        placeholder="Название оператора"
        className={styles.addOperator__input}
        value={name}
        onChange={handleChangeNameOperator}
      />
      <InputSpan>Логотип</InputSpan>
      <input
        type="link"
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

export default AddOperator;
