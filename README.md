# Milestone Pressure

Tool to always remind you that you got deadlines and are running out of time.

## Configuration

You can configure your milestones by adjusting the `/public/milestones.json` file.
Use the following scheme:

```json
[
  {
    "id": "unique string",
    "start": "1970-01-01T00:00:00",
    "deadline": "1970-01-02T00:00:00",
    "label": "string"
  }
]
```

## Usage

### Local Development

Pre requirements:

- Install `node`
- Run `npm i` within the project directory

Use these npm scripts for local development:

```bash
# Start a local hot reloading development server
npm run start

# Transpile the code into "/dist"
npm run build

# Serve the latest build from "/dist"
npm run preview
```

### Hosting With Docker

You can host the app with the `Dockerfile` and `docker-compose.yml`.

```shell
docker compose up -d
```

### Other Hosting possibilities

Furthermore you can also host the app with any other hosting method like github pages.

Just make sure to build the app with `npm run build` and use the `/dist` folder as source.
