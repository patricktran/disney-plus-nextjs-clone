# Disney Plus Clone - NextJS

> Tech Showcase

Data comes from [TMDB.org](https://www.themoviedb.org/)

> The video player will always play [Big Buck Bunny.](https://en.wikipedia.org/wiki/Big_Buck_Bunny) <br/>

### Environment Variables

You'll need to generate a TMDB API Key and store it in the .env file.

1. Create a [TMDB login](https://developer.themoviedb.org/docs/getting-started)
2. Once logged in, go to the [TMDB API Settings](https://www.themoviedb.org/settings/api) page
3. Generate a API Read Access Token
4. Run the following command create a local .env file
   ```bash
    cp .env.template .env
   ```
5. Copy and paste your API Read Access Token to `TMDB_API_TOKEN`

### How to run

```bash
yarn
yarn dev
```

### Features

- NextJS 14
- React Server-Side Components
- React Server Actions
- Shadcn
- TailwindCSS

## Screens

> Yes, these are actual screenshots from my Display Plus Clone app!

![screenshot](/disney-plus-clone-home.png?raw=true)

<br />

![screenshot](/disney-plus-clone-movie-detail.png?raw=true)

<br />

![screenshot](/disney-plus-clone-tv-detail.png?raw=true)

<br />

![screenshot](/disney-plus-clone-video-player.png?raw=true)
