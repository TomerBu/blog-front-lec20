import styles from './error.module.scss'

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>Oops</h1>
      <p>Sorry an error occured</p>
      <p>
        <i>Error Message</i>
      </p>
    </div>
  );
};

export default Error;
