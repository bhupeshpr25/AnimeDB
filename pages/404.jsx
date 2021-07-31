import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {});

  return (
    <div className={styles.error}>
      <div>
        <Image src='/404.png' width={300} height={250} alt='404' />
      </div>
      <h1 className={styles.errorHead}>OOPS....LINK NOT FOUND</h1>
      <h2 className={styles.errorText}>
        <p>
          Go Back to{' '}
          <Link href='/'>
            <a>Homepage</a>
          </Link>
        </p>
      </h2>
    </div>
  );
};

export default NotFound;
