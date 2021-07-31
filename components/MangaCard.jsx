import React from 'react';

function Mangacard({ manga }) {
  return (
    <div>
      <article className='top-card'>
        <a href={manga.url} rel='noreferrer' target='_blank'>
          <figure>
            <div className='image'>
              <img
                src={manga.image_url}
                width={150}
                height={200}
                alt='Manga Image'
              />
            </div>
          </figure>
        </a>
        <h3 className='name'>{manga.title}</h3>
      </article>
    </div>
  );
}

export default Mangacard;
