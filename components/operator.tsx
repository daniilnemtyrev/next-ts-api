import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css"
import { IOperator} from "../interfaces/interfaces";



export default function Operator({id, name, picture}: IOperator) {
  return (
    <div className={styles.operator}>
      <Image
        className={styles.operatorImg}
        src={picture}
        alt={name}
        title={name}
        width={300}
        height={200}
      />
    </div>
  );
}

// Operator.propTypes = {
//   propsInterfaces: PropTypes.object.isRequired,  
//   id: PropTypes.number.isRequired,
//   name: PropTypes.number.isRequired,
//   picture: PropTypes.string.isRequired,
// };