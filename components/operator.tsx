/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css"
import { IOperator} from "../interfaces/interfaces";



export default function Operator({id, name, picture}: IOperator) {
  return (
      <img
        className={styles.operator__img}
        src={picture}
        alt={name}
        title={name}
      />
  );
}

// Operator.propTypes = {
//   propsInterfaces: PropTypes.object.isRequired,  
//   id: PropTypes.number.isRequired,
//   name: PropTypes.number.isRequired,
//   picture: PropTypes.string.isRequired,
// };