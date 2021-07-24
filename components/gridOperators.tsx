import React from "react";
import {Operator} from "./operator";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { IOperator } from "../interfaces/interfaces";


export const GridOperators = () => {
  const [operators, setOperators] = useState<IOperator[]>([]);

  async function getOperators() {
    let response = await fetch("http://localhost:3000/operator");
    let operator = await response.json();
    setOperators(operator);
  }

  useEffect(() => {
    getOperators();
  }, []);

  return (
    <section className={styles.grid}>
      {operators.map(({ id, name, pictureUrl }) => {
        return (
          <Operator key={id} id={id} name={name} pictureUrl={pictureUrl} />
        );
      })}
    </section>
  );
};


