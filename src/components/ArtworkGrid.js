import React from 'react';
import styled from 'styled-components';

import GridList from '@material-ui/core/GridList';

import RouterLink from './RouterLink';

const Container = styled.div`
  margin-top: 20px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-around;
`;

const StyledGridList = styled(GridList)`
  width: 500px;
  margin: 0 auto;
`;

const Link = styled(RouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;
`;

const GridImage = styled.img`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
`;

function handleError() {
  console.log('uh oh');
}

function ArtworkGrid(props) {
  return (
    <Container>
      <StyledGridList cellHeight={180} cols={2} spacing={20}>
        {props.artworks.map(artwork => (
          <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
            <GridImage onError={handleError} src={artwork.img} alt={artwork.title} />
          </Link>
        ))}
      </StyledGridList>
    </Container>
  );
}

export default ArtworkGrid;
