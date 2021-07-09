import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Searchcard from '../components/SearchCard';

//fetch serach results
const apiRequest = async (search) => {
  const api = `https://api.jikan.moe/v3/search/anime?q=${search}`;
  return await fetch(api).then((res) => res.json());
};

//display results(displayResults) when searched anime using searchbar(handleSubmit)
export default function Search() {
  const [animeSearch, setanimeSearch] = useState('');
  const [apiData, setApiData] = useState({});
  const [gotData, setgotData] = useState(true);
  const [dataLoading, setdataLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setgotData(false);
    setdataLoading(true);
    const data = await apiRequest(animeSearch).then((res) => res);
    setApiData(data);
    setdataLoading(false);
  };

  const displayResult = () => {
    if (apiData.status) {
      return <h3 className={styles.searchError}>Enter atleast 3 characters</h3>;
    } else {
      return <Searchcard results={apiData?.results} />;
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={styles.search}>
        <input
          type='search'
          value={animeSearch}
          onChange={(e) => setanimeSearch(e.target.value)}
          placeholder='Search anime, e.g Pokemon'
        />
        <button type='submit' className={styles.btn}>
          Go
        </button>
      </form>
      <div className={styles.searchlist}>
        {gotData ? <></> : dataLoading ? <></> : displayResult()}
      </div>
    </main>
  );
}
