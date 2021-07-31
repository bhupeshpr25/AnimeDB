import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.png' width={60} height={60} />
      </div>
      <h1 id='site'>ANIME DATABASE</h1>
      <Link href='/anime'>
        <a>Top Anime</a>
      </Link>
      <Link href='/manga'>
        <a>Top Manga</a>
      </Link>

      <Link href='/'>
        <a>Home</a>
      </Link>

      <a id='refresh' href='javascript:location.reload(true)'>
        Refresh
      </a>
    </nav>
  );
};

export default Navbar;
