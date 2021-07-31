import React from 'react';
import styles from '../styles/Home.module.css';

function Searchcard({ results }) {
  return (
    <div>
      <article className={styles.searchlist}>
        {results.map(({ title, image_url, url }, i) => (
          <div key={i} className={styles.card}>
            <a href={url} rel='noreferrer' target='_blank'>
              <figure>
                <div className='image'>
                  <img
                    src={image_url}
                    width={150}
                    height={200}
                    alt='Anime Image'
                  />
                </div>
              </figure>
            </a>
            <h3 className={styles.name}>{title}</h3>
          </div>
        ))}
      </article>
    </div>
  );
}

export default Searchcard;
