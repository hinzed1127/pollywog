import React from 'react';

export default function ArtworkDetails(props) {
  return (
    <div>
      artwork details:
      <ul>
        <li>name</li>
        <li>creator</li>
        <li>other stuff</li>
        <li>{props.artworkId}</li>
      </ul>
    </div>
  );
}
