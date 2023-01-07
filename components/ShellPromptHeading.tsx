import React, { CSSProperties } from "react";
import styles from "../styles/ShellPromptHeading.module.css";

type ShellPromptHeadingProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

const CURSOR = "\u2588";

export const ShellPromptHeading = ({ text, className, style = {} }: ShellPromptHeadingProps) => {
  return (
    <div className={[styles.main, className].join(" ")} style={style}>
      ${" "}
      <span className={styles["content-wrapper"]}>
        <span className={styles["text-wrapper"]}>{text}</span>
      </span>
    </div>
  );
};
