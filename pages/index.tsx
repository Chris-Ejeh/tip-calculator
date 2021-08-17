import Head from 'next/head';
import Image from 'next/image';
import MainCard from '../components/MainCard/MainCard';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Coding Challenge" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <MainCard heading="SPLITTER" reset="reset" />
    </div>
  );
}
