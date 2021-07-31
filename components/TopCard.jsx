import React from 'react';

function Topcard({ top }) {
  return (
    <div>
      <article className='top-card'>
        <a href={top.url} rel='noreferrer' target='_blank'>
          <figure>
            <div className='image'>
              <img
                src={top.image_url}
                width={150}
                height={200}
                alt='Anime Image'
              />
            </div>
          </figure>
        </a>
        <h3 className='name'>{top.title}</h3>
      </article>
    </div>
  );
}

export default Topcard;
