import { FC } from "react";
import { Card } from "../Card/Card";
import styles from "./MainCard.module.scss";
const cn = require("classnames");

import { split } from "../../utils/funcs";
import Head from "../Head";

interface MainCardProps {
  heading: string;
}

const MainCard: FC<MainCardProps> = ({ heading }) => {
  return (
    <div className={styles.mainContainer}>
      <Head title="Tip Calculator" />
      <h1 className={styles.containerHeading}>{split(heading, 4)}</h1>
      <Card reset="reset" />
    </div>
  );
};

export default MainCard;
