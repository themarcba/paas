# PaaS - Purple As A Service

This is just a small fun-project as a response to [@florinpop1705's tweet](https://twitter.com/florinpop1705/status/1455412349058306048): "PaaS - Purple as a Service. Pay $1 to get a randomly generated purple color. 💜"

It generates a new shade of purple every time you click on the site, and saves that value in your clipboard.

This is to show how I would go about implementing a function that generates different shades of a certain color.
I went with using [HSL](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl()>), since it's the easiest to manipulate color shades in.

# Use

## Install

```bash
yarn install
```

## Run local server

```bash
yarn dev
```

## Recommended IDE Setup

-   [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
