import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Search from '../pages/search';

export default function Home() {
  return (
    <>
      <Head>
        <title>AnimeDB | Home</title>
        <link rel='icon' href='/logo.ico' />
      </Head>
      <body>
        <div className={styles.container}>
          <h1 className={styles.title}>Search any Anime</h1>
        </div>
        <Search />
      </body>
    </>
  );
}
