# A simple Counter build on-chain

## Steps 1: Frontend

---

1. Create react application (Same as our repo)

```
create react-app counter-onchain
```

2. Installing tailwindcss

```
yarn add -D tailwindcss@last postcss@latest autoprefixer@latest
```

Choose `Version 3.2.4`, then hint `enter`.

3. Initialize `tailwindcss` by typing:

```
npx tailwind init -p
```

4. Installing material UI dependencies and react notifications

```
npm install react-notifications @mui/material
```

5. Edit `src/index.css` with this content:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;
```

6. Configure `tailwind.config.js` file with this content:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,tw,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

7. Deploy the app with [netlify.com](https://netlify.com/)

## Step 2: Backend

1. Install hardhat

```
npm install hardhat
```

2. Create `Hardhat project`

```
npx hardhat
```

3. Install `hardhat-toolbox` other dependencies

```
npm install --save-dev  @nomicfoundation/hardhat-toolbox
```

4. Install others dependencies

```
npm install ethers chai dotenv
```

5. Edit the `hardhat.config.js` file with essentials parameters.
6. Write the contract file and test file, the runs succevelly these two commands:

```
npx hardhat compile
npx hardhat test
```

7. Write `Deploy` script, and deploy it on `mumbai testnet`:

```
npx hardhat run scripts/deploy.js --network mumbai
```

The result will look like that:

```
Contract Counter deployed successfully at: 0x609BB601d0130697DfbFB43e03484473EF04b151
```

8. Store this address inide `src/config.js` file to be use on the frontend.

9. Run te project:

```
npm start
```
