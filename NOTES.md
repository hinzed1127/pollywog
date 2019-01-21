# Stumbling Blocks

- The api doesn't include the actual image data. You can either access that either via a different [endpoint](https://github.com/artsmia/collection), which yielded it's own issues of the documented "small | medium | large" size options not always being an active link. Further digging into the [source](https://github.com/artsmia/art/blob/master/src/image-cdn.js) of the collection's [website](https://collections.artsmia.org/) revealed another way that seemed more stable, but since it's not publically listed in their documentation, it seems less stable or an oversight. After further investigations, it seems like this link also yields dead links for various artworks, but I'm not sure why. I filed an [issue](https://github.com/artsmia/collection/issues/7) in the MIA repository where I found the additional info on image links, so TBD on details witht that.

- Material-UI is rather large and comes with a lot of decisions made by default. This is nice for scaffolding and quick iteration, but at the drawback that you're taking the decisions on faith at first. Trying to configure things to my liking was sometimes cumbersome. Documentation was sprawling but not necessarily always easy to find answers in.
