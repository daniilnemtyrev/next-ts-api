import styles from '../styles/Home.module.css';
import { IResult } from '../interfaces/interfaces';

export const PayResult = (props:IResult) => {

    return(
        <section className={props.state==true ?styles.payResultActive: styles.payResult  }>
            {props.result == true ? 
            <div className={styles.payResultTrue}>
                <span className={styles.payResultTrue__span}>Счет успешно пополнен</span>
            </div>
            :
            <div className={styles.payResultFalse}>
                <span className={styles.payResultFalse__span}>Произошла ошибка. Попробуйте еще раз</span>
            </div>
            }
        </section>
    )
}

