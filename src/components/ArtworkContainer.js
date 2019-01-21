import React from 'react';

import getRandomArtworks from '../services/miaCollection';
import ArtworkGrid from './ArtworkGrid';

const artworkUrl = ({ id, size = 400 }) => {
  console.log(typeof id);
  let sizeParam;
  if (size === 'full') {
    sizeParam = 'full/';
  } else {
    sizeParam = size > 400 ? '800/' : '';
  }

  return `https://${id % 7}.api.artsmia.org/${sizeParam}${id}.jpg`;
  // return `http://api.artsmia.org/images/${id}/small.jpg`;
};

function formatArtwork(data) {
  return data.map((artwork) => {
    const { id, title, artist } = artwork;

    return {
      id,
      title,
      artist,
      img: artworkUrl({ id })
    };
  });
}

export default class ArtworkContainer extends React.Component {
  state = {
    loading: true,
    artworks: []
  };

  componentDidMount() {
    getRandomArtworks().then((res) => {
      this.setState({ loading: false, artworks: formatArtwork(res) });
    });
  }

  render() {
    const { loading, artworks } = this.state;

    return loading ? (
      <div>Loading</div>
    ) : (
      <ArtworkGrid artwork={artworks} />
    );
  }
}
