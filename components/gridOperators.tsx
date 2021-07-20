import React from "react";
import Operator from "./operator";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { IOperator} from "../interfaces/interfaces";

export default function Grid() {
  const [operators, setOperators] = useState<IOperator[]>([]);

  async function getMovies() {
    let response = await fetch("http://localhost:3000/operator");
    let operator = await response.json();
    setOperators(operator);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className={styles.grid}>
      {operators.map((movie) => {
        return (
          <Operator
            key={movie.id}
            id={movie.id}
            name={movie.name}
            picture={movie.picture}
          />
        );
      })}
    </section>
  );
}
