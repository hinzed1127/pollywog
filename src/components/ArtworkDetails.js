import React from 'react';
import styled from 'styled-components';

export default function ArtworkDetails(props) {
  const cachedArtwork = JSON.parse(localStorage.getItem('artwork'));
  const selectedWork = cachedArtwork.find(artwork => artwork.id === props.artworkId);

  const {
    title, artist, medium, id
  } = selectedWork;

  const Container = styled.div`
    padding: 55px 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
  `;
  return (
    <Container>
      <div css="padding-right: 20px;">
        <h2>{title}</h2>
        {artist && <h3>{artist}</h3>}
        <h4>{medium}</h4>
      </div>
      <div>
        <img alt={title} src={`http://api.artsmia.org/images/${id}/small.jpg`} />
      </div>
    </Container>
  );
}
