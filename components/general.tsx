import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/dist/client/router";
import { IChildren } from "../interfaces/interfaces";

const General = ({ children}: IChildren) => {
  const router = useRouter();
  
  return (
    <section className={styles.container}>
      <Head>
        <title>Пополнение баланса</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.general}>
        <div className={styles.general__tabs}>
          <Link href={"/"}>
            <a className={router.route=="/"? styles.general__tabsButtonActive : styles.general__tabsButton}>Операторы</a>
          </Link>
          <Link href={"/add"}>
            <a className={router.route=="/add"? styles.general__tabsButtonActive : styles.general__tabsButton}>Добавить</a>
          </Link>
        </div>
        <h1 className={styles.general__title}>{router.route!=="/add"?`Пополнение баланса ${router.query.id==undefined?'':router.query.id}`:`Добавление оператора`}</h1>
        {children}
      </section>
    </section>
  );
}

export default General;