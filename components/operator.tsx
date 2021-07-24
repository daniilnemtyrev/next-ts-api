/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/Home.module.css"
import { IOperator} from "../interfaces/interfaces";


export const Operator = ({id, name, pictureUrl}: IOperator) => {
  const router = useRouter();
  return (
    <a className={styles.operator} key={id} onClick={() => router.push(`/operator/${id}`)} >
      <img
        className={styles.operator__img}
        src={pictureUrl}
        alt={name}
        title={name}
      />
    </a>
  );
}

