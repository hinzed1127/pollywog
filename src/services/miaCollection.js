const baseUrl = 'https://search.artsmia.org'; // random/art?size=10&q=room:G3*;

export default function getRandomArtworks({ size = 10 } = {}) {
  const url = `${baseUrl}/random/art?size=${size}&q=image:valid%20restricted:0`;

  return fetch(url)
    .then(res => res.json())
    .then(res => res.map(item => item._source));
}
