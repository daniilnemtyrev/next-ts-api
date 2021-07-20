import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/dist/client/router";
import { IChildren } from "../interfaces/interfaces";

export default function Main({ children}: IChildren) {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <Head>
        <title>API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.main__tabs}>
          <Link href={"/"}>
            <a className={styles.main__tabsButton}>Операторы</a>
          </Link>
          <Link href={"/add"}>
            <a className={styles.main__tabsButton}>Добавить</a>
          </Link>
        </div>
        <h1 className={styles.title}>{router.route!=="/add"?`Пополнение баланса ${router.query.id==undefined?'':router.query.id}`:`Добавление оператора`}</h1>
        {children}
      </main>
    </section>
  );
}