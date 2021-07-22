/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Home.module.css";
import Main from "../../components/main";
import Pay from "../../components/payOperator";
import { IOperatorPay } from "../../interfaces/interfaces";
import { IOperator } from "../../interfaces/interfaces";

function OperatorId({ operator }) {


  return (
    <Main>
      <>
        <img
          className={styles.operator__imgPay}
          src={operator.picture}
          alt={operator.name}
        ></img>
        <Pay />
      </>
    </Main>
  );
}

export async function getServerSideProps({query}:IOperatorPay) {
    const res = await fetch(`http://localhost:3000/operator/${query.id}`);
    const operator: IOperator = await res.json();

    if (!operator) {
      return {
        notFound: true,
      };
    }

    return {
      props: { operator }, 
    };
  }

export default OperatorId;