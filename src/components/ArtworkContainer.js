import React from 'react';

import getRandomArtworks from '../services/miaCollection';
import ArtworkGrid from './ArtworkGrid';

// TODO: Figure out whether this is more consistent than the URL in `formatArtwork`
const artworkUrl = ({ id, size = 400 }) => {
  console.log(typeof id);
  let sizeParam;
  if (size === 'full') {
    sizeParam = 'full/';
  } else {
    sizeParam = size > 400 ? '800/' : '';
  }

  return `https://${id % 7}.api.artsmia.org/${sizeParam}${id}.jpg`;
};

function formatArtwork(data) {
  return data.map((artwork) => {
    const {
      id, title, artist, medium
    } = artwork;

    return {
      id,
      title,
      artist,
      medium,
      img: `http://api.artsmia.org/images/${id}/small.jpg`
    };
  });
}

export default class ArtworkContainer extends React.Component {
  state = {
    loading: true,
    artworks: []
  };

  componentDidMount() {
    const cachedArtwork = localStorage.getItem('artwork');

    if (cachedArtwork) {
      this.setState({ loading: false, artworks: JSON.parse(cachedArtwork) });
    } else {
      getRandomArtworks().then((res) => {
        const formattedArtwork = formatArtwork(res);

        localStorage.setItem('artwork', JSON.stringify(formattedArtwork));
        this.setState({ loading: false, artworks: formattedArtwork });
      });
    }
  }

  render() {
    const { loading, artworks } = this.state;

    return loading ? (
      <div>Loading</div>
    ) : (
      <ArtworkGrid artworks={artworks} />
    );
  }
}
