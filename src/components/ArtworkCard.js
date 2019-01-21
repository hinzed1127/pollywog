import React from 'react';

const artworkUrl = ({ id, size = 400 }) => {
  let sizeParam;
  if (size === 'full') {
    sizeParam = 'full/';
  } else {
    sizeParam = (size > 400) ? '800/' : '';
  }

  return `https://${id % 7}.api.artsmia.org/${sizeParam}${id}.jpg`;
};

export default function ArtworkImage({ id } = {}) {
  return id ? (
    // <img alt="" src={artworkUrl({ id, size: '400' })} />
    <img alt="" src={`http://api.artsmia.org/images/${id}/small.jpg`} />
  ) : null;
}

// http://api.artsmia.org/images/${id}/${size}.jpg has issues with sizes 'medium' and 'large'
// none seen with 'small' so far

// http://api.artsmia.org/images/29486/small.jpg
// http://api.artsmia.org/images/29486/medium.jpg
