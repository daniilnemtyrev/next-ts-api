import React from "react";
import Operator from "./operator";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";


export default function AddForm() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangePicture(event) {
    setPicture(event.target.value);
  }

  async function ButtonPut() {
    let response = await fetch("http://localhost:3000/operator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        id: name,
        name: name,
        picture: picture,
      }),
    });
    
  }

  return (
    <form className={styles.addForm} onSubmit={ButtonPut}>
      <span className={styles.addForm__span}>Оператор</span>
      <input
        type="string"
        required
        placeholder="Название оператора"
        className={styles.addForm__input}
        value={name}
        onChange={handleChangeName}
      />
      <span className={styles.addForm__span}>Логотип</span>
      <input
        type="link"
        required
        placeholder="Ссылка на логотип"
        pattern="https?:\/\/(www.)?(\w*\W*)*"
        className={styles.addForm__input}
        value={picture}
        onChange={handleChangePicture}
      />
      <button type="submit" className={styles.addForm__button}>
        Добавить
      </button>
    </form>
  );
}
