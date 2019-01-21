import React from 'react';
import styled from 'styled-components';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { Router } from '@reach/router';
import RouterLink from './RouterLink';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  overflow: hidden;
  justify-content: space-around;
`;

const Grid = styled(GridList)`
  /* min-width: 320px; */
  /* width: 80%; */
  width: 500px;
  margin: 0 auto;
`;

// const ArtworkInfo = styled(GridListTileBar)`
//   /* display: none!important;
//   &:hover {
//     display: block!important;
//   } */
// `;

function handleError() {
  console.log('uh oh');
}

function ArtworkGrid(props) {
  return (
    <Container>
      <Grid cellHeight={180} cols={2}>
        {props.artwork.map(tile => (
          <GridListTile key={tile.img}>
            <RouterLink to={`/artwork/${tile.id}`}>
              <img onError={handleError} src={tile.img} alt={tile.title} />
            </RouterLink>
          </GridListTile>
        ))}
      </Grid>
    </Container>
  );
}

export default ArtworkGrid;

// <RouterLink to={`/artwork/${tile.id}`}>

// </RouterLink> */

/* <GridListTileBar
    title={tile.title}
    subtitle={tile.artist && <span dangerouslySetInnerHTML={{ __html: tile.artist }} />}
  /> */
