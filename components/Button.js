import React, { useRef, useEffect } from "react";
import styles from "../styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  const btnRef = useRef(null);

  return (
    <a href="/VALENTIN-MOR-CV-2024.pdf" download className={styles.btn}>
      <span className={styles.txt}>
        {" "}
        Télécharger un CV
        <FontAwesomeIcon className="ml-3" icon={faDownload} />
      </span>
    </a>
  );
};

export default Button;
