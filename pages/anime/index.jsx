import Head from 'next/head';
import Topcard from '../../components/TopCard';

export default function Top({ tops }) {
  //console.log(tops);
  return (
    <>
      <Head>
        <title>AnimeDB | Top Anime</title>
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div>
        <title>Top Anime</title>
        <meta name='keywords' content='anime' />

        <h1 className='heading'>TOP ANIME</h1>
        <div className='list'>
          {tops.top.map((top) => (
            <Topcard top={top} key={top.mal_id} />
          ))}
        </div>
      </div>
    </>
  );
}

//fetch top anime
export const getStaticProps = async () => {
  const res = await fetch('https://api.jikan.moe/v3/top/anime/1/tv');
  const tops = await res.json();

  return {
    props: {
      tops,
    },
  };
};
