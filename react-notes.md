# React

## vite - react app

npm create vite@4
npm create vite@latest

npm i
npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev
npm run dev

npm i styled-components

npm i react-router-dom@6

npm i styled-components
npm i @supabase/supabase-js

### vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react(), eslint()],
});

### .eslintrc.json

{
"extends": "react-app"
}

### vite.config.js

import eslint from 'vite-plugin-eslint';

plugins: [react(), eslint()],

### .eslintrc.cjs

I added this rule in the eslintrc file and re-run the npm run dev

"rules": {
"react/prop-types": "off",
"no-unused-vars": "off",
}
--
// eslint-disable-next-line

---

## create app

npx create-react-app profile-card
npx create-react-app@5 profile-card

npm config set legacy-peer-deps true

## npm start

---

## console

ctrl+alt+j

## OMDb API

Here is your key: c4f9f630
OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c4f9f630

http://www.omdbapi.com/?apikey=[yourkey]&

## Faker

npm install @faker-js/faker --save-dev

## Next.js

npx create-next-app@latest
npx create-next-app@14 wild-oasis-website

### update Next ver

npm install next@latest react@latest react-dom@latest eslint-config-next@latest

### doc

https://nextjs.org/docs
https://nextjs.org/blog

**\* VSCode setup
custom labeled
**/app/\*\*/page.js - Page: ${dirname}

### icons

npm i @heroicons/react

## Web Design

## VSCode Extensions

- Prettier
- Color Highlight
- Image preview
- Auto Rename Tag
- Live Server

## Nextjs

npx next -v

## Markdown

npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install -D @tailwindcss/typography
npm install next-mdx-remote-client

### tables

https://dev.to/letsbsocial1/how-to-add-tables-to-react-markdown-21lc

### example

https://dimitrisanastasiadis.com/#home

##################################################

## Design

https://yeun.github.io/open-color/

### contrast checker

https://coolors.co/

## Images

https://unsplash.com/

### Vercel Icons

https://heroicons.com/
https://ionic.io/ionicons

https://www.awwwards.com/websites/

### Tints & Shades

https://maketintsandshades.com/

### Brouser support

https://caniuse.com/

### Compress image

https://squoosh.app/

## Deploy

https://netlify.com/
