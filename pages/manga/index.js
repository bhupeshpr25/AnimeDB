import Head from 'next/head';
import MangaCard from '../../components/MangaCard';

export default function Season({ mangas }) {
  //console.log(mangas);
  return (
    <>
      <Head>
        <title>AnimeDB | Top Manga</title>
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div>
        <title>Top Manga</title>
        <meta name='keywords' content='manga' />

        <h1 className='heading'>TOP MANGA</h1>
        <div className='list'>
          {mangas.top.map((manga) => (
            <MangaCard manga={manga} key={manga.mal_id} />
          ))}
        </div>
      </div>
    </>
  );
}

//fetch top manga
export const getStaticProps = async () => {
  const res = await fetch('https://api.jikan.moe/v3/top/manga/1');
  const mangas = await res.json();

  return {
    props: {
      mangas,
    },
  };
};
