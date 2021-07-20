import React from "react";
import Operator from "./operator";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { IOperator } from "../interfaces/interfaces";

export default function AddForm() {

    

  return (
      <form className={styles.payForm}>
        <span className={styles.payForm__span}>Оператор</span>
        <input
          type="string"
          required
          placeholder="Название оператора"
          className={styles.payForm__input}
        //   value={name}
        //   onChange={handleEditName}
        />
        <span className={styles.payForm__span}>Логотип</span>
        <input
          type="link"
          required
          placeholder="Ссылка на логотип"
          pattern="https?:\/\/(www.)?(\w*\W*)*"
          className={styles.payForm__input}
        //   value={link}
        //   onChange={handleEditLink}
        />
        <button type="submit" className={styles.payForm__button}>
          Добавить
        </button>
      </form>
  );
}
