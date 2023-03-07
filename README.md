# A simple Counter build on-chain

### [Netlify link of the App](https://counter-onchain.netlify.app/)

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
    "./src/**/*.{js,jsx,ts,tsx}",
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

---

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

On Localhost

```
npx hardhat run scripts/deploy.js --network localhost
```

On `mumbai`

```
npx hardhat run scripts/deploy.js --network mumbai
```

The result will look like that:

```
Contract Counter deployed successfully at: 0x62Ecc819e15c7d5ef471E3356FdaF9Da52C591C7
```

8. Store this address inide `src/config.js` file to be use on the frontend.

9. Run te project:

```
npm start
```

## Step 3: Dapp screenshots

---

### 1. Gas report

![1-GasReporter](https://user-images.githubusercontent.com/15903230/223419136-c22140ad-15c3-48ce-96ed-111ccc0c7e6b.png)

### 2. Main page

![2-Page](https://user-images.githubusercontent.com/15903230/223419152-48172c62-d4d5-4215-902d-b4dfe77f1d5c.png)

### 3. Confirm Incrementation

![3-Confirm Increment](https://user-images.githubusercontent.com/15903230/223419159-e87d83ac-064c-469e-8a5c-95b339deb32b.png)

### 4. Incrementation done

![4-Increment done](https://user-images.githubusercontent.com/15903230/223419171-2550574d-0ae3-4ded-9d9b-a9b10e1ab5d8.png)

### 5. Confirm Decrementation

![5-Confirm Decrement](https://user-images.githubusercontent.com/15903230/223419174-f3f9b518-6549-4ea7-a5cf-c63b04874b7a.png)

#### 6. Decrementation done

![6-Decrement done](https://user-images.githubusercontent.com/15903230/223419182-ad9f33e4-38b5-47ba-9e17-c45d9f9cfdc6.png)
