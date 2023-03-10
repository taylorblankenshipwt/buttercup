import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { NextPage } from 'next';
import { HomePageProps } from '../services/models/pages/HomePage';
import Button from '../components/Button/Button';

const Home: NextPage<HomePageProps> = ({ doggyName, dogImage }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>doggyName: {doggyName}</p>
        <p>
          <Button text="HELLO" />
        </p>
        <img width="200" height="auto" src={dogImage} alt="this be a dog, yo" />
      </main>
    </>
  );
};

export default Home;
