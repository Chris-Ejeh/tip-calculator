import Head from 'next/head';
import Image from 'next/image';
import { TipCard } from '../components/TipCard/TipCard';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Coding Challenge" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <TipCard />
    </div>
  );
}
