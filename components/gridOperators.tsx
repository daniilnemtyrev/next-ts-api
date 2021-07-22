import React from "react";
import Operator from "./operator";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { IOperator} from "../interfaces/interfaces";

export default function Grid() {
  const router = useRouter();
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
      {operators.map((operator) => {
        return (
          <a className={styles.operator} key={operator.id} onClick={() => {router.push(`/operator/${operator.id}`)} } >
          <Operator
            key={operator.id}
            id={operator.id}
            name={operator.name}
            picture={operator.picture}
          />
          </a>
        );
      })}
    </section>
  );
}
