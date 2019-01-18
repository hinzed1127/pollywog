# Background

The Minneapolis Institute of Art (Mia) is a great museum located in the Whittier neighborhood of Minneapolis. They have a massive collection ranging from antiquity to contemporary working artists. They also have a wonderful Elasticsearch API to programmatically “browse” their collection.

# The Challenge

Given the Elasticsearch API, create a React Application to browse artwork in the Mia collection (see API notes below). Your app should meet the following criteria:

## Base Criteria

- Use Material-UI for components.
- Have a landing page that displays 10 random artworks from the collection
- Clicking on an artwork should go to a permalink page that shows information about the
artwork as well as an image of the artwork.
- Use redux, local storage, or equivalent solution to cache response data to minimize the
number of requests to the Elasticsearch API. Going from a list of artworks to a single one in that list should ideally not trigger a new request to the elastic search unless you need additional information not already fetched.

## Bonus Criteria

Want to go above and be beyond? Do any of the following or come up with your own experiment to show your dev chops and creative thinking:

- Customize the Material-UI theme and layout so it doesn’t look like a vanilla android app. Tip: We’re nerds for Mac’s dark theme.
- Allow the viewer to “star” their favorite artworks and create a page to allow the viewer to see a list of artwork they starred.
Top Secret

For Project Pollywog - React Developer - candidates only:

- On an artwork permalink page, show “related” artworks - this could be other works by the same artist, artworks in the same historical period, or artworks in the same gallery, etc
- Create an “audio tour” playlist to browse artwork with audio tours (look for ‘​related:audio-stops​’ in the data for an artwork)
- Unit tests - not very exciting, I know :) API Notes:
- The Elasticsearch host is available at h​ ttps://collections.artsmia.org
- The documentation for the Elasticsearch is located at https://github.com/artsmia/collection-elasticsearch
- You can browse the public collection site at h​ ttps://collections.artsmia.org/
- The permalink for individual artworks contains the id of the artwork in the Elasticsearch.
    - For example, the id of Van Gogh’s ​Olive Trees​ is 1218 from the url: https://collections.artsmia.org/art/1218/olive-trees-vincent-van-gogh​ and the Elasticsearchrecord is h​ttps://search.artsmia.org/id/1218
- As per the Elasticsearch documentation, you can search for “Olive Trees” via: https://search.artsmia.org/olive+trees
- The url to artwork images is in the form of: https://1.api.artsmia.org/1218.jpg

# What We are Looking For out of the Code Challenge
- Ability to write and understand React
- Proficiency with JavaScript ES6 syntax
- Ability to communicate with external APIs
- Ability to use git
- Creative thinking and problem solving
- Ability to make cool stuff

# How to Submit

Please submit your code challenge by 11:59 PM on Sunday, January 20th.

- Create a personal GitHub user if you do not have one
- Create a public project called ​pollywog-challenge​ or similar
- Branch off master and commit all of your assets to this branch
- Create a pull request from your branch to master tagging ​`bgarrett-rt​` and `t​ommyoneill​` as
reviewers to the pull request.
- Please include in your final set of commits a R`​EADME.md​` file describing the approach you
took as well as any of the “bonus criteria” you implemented.
- Note: We will pull down your branch and run locally so if there are any special installation
steps, make note of them in the `README.md​` - otherwise we’ll assume we just install the app via ​`npm install​` and run it ​via `npm start`