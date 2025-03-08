# E-Commerce Shop
## Table of Contents
- [Project Setup](#project-setup)
- [Tech Stack Used](#tech-stack-used)
- [Contribution](#contribution)
- [Useful HTML Code Snippets](#useful-html-code-snippets)
- [Useful Spacing Options for the Deals Tags](#useful-spacing-options-for-the-deals-tags)
- [Useful Resources](#useful-resources)
- [Branch Order](#branch-order)
- [Colors Used](#colors-used)

### Project Setup

- First clone the repository either running one of the commands
<details>
<summary>1.<code>https</code></summary>
<br>

```bash
git clone https://github.com/Ssaava/e-commerce-shop.git
cd e-commerce-shop
```
</details>
<br>
<details>
<summary>2.<code>ssh</code></summary>
<br>

```bash
git clone git@github.com:Ssaava/e-commerce-shop.git
cd e-commerce-shop
```
</details>

- Second step is installing the necessary packages using npm

```bash
npm i
# or
npm install
```

- Finally run the following command in the terminal to add tailwindcss to the project

```bash
npm run dev

```

### Tech Stack Used
- HTML5
- Tailwind CSS
- JavaScript

### Contribution
- Create a new branch to avoid conflicts using the git command below
```bash
git branch new-branch-name
# switch to new branch
git checkout new-branch-name
```

- Do not merge directly to main branch instead create a pull request to the branch named **test**.
- Then, if no conflicts, merge the changes and make a pull request directly to the main branch to include the changes to the project.
- If you want to include the test branch on local repository, then run the followinf command
```bash
git fetch origin test/branch name
# then
git checkout test/branchname 
```

### Useful Resources
- [Main Figma Design](https://www.figma.com/design/74NALN2NWtQYeJSiTgcbXn/Clicon---eCommerce-Marketplace-Website-Figma-Template-(Community)-(Community)?m=auto&is-community-duplicate=1&fuid=1388884085494947125)
- [e-commerce Design Examples](https://www.figma.com/community/tag/e-commerce/files)
- [PX to REM converter](https://nekocalc.com/px-to-rem-converter)
- [Clamp Calculator](https://clamp.font-size.app/?config=eyJyb290IjoiMTYiLCJtaW5XaWR0aCI6IjMwMHB4IiwibWF4V2lkdGgiOiIxMDI0cHgiLCJtaW5Gb250U2l6ZSI6IjI1MHB4IiwibWF4Rm9udFNpemUiOiI0NDhweCJ9)
- [Tailwindcss docs](https://tailwindcss.com/)

### Useful Spacing Options for the Deals Tags
- top-[1rem] for the first tag
- top-[3.5rem] for the second tag
- top-[6rem] for the third tag
- top-[6rem] for the fourth tag

### Useful HTML Code Snippets
- Percentage off
```html

<button className="block text-xs absolute left-4 top-4 ml-auto z-10 bg-warning-400 text-gray-900 font-bold rounded-sm px-4 py-2">32&percnt; OFF</button>
```
- Hot deal
```html
<button className="block text-xs absolute left-4 top-4 ml-auto z-10 bg-danger-500 text-gray-00 font-bold rounded-sm px-4 py-2">HOT</button>
```
- Best Deal
```html
<button className="hidden text-xs absolute left-4 top-4 ml-auto z-10 bg-secondary-500 text-gray-00 font-bold rounded-sm px-4 py-2">BEST DEALS</button>
```
- Sold Out
```html
<button className="block absolute text-xs left-4 top-4 ml-auto z-10 bg-gray-400 text-gray-00 font-bold rounded-sm px-4 py-2">SOLD OUT</button>
```
- Discount
```html
<p className="text-gray-300 line-through font-medium">&dollar;865.99</p>
```
- Offers Period
```html
<button className="block absolute text-xs left-4 top-4 ml-auto z-10 bg-gray-00 text-gray-900 font-bold rounded-sm px-4 py-2">
    ENDS OF CHRISTMAS
</button>
```

### Branch Order
- main
- test
- home
- product
- auth
- about
- wishlist
### Colors Used
- Background: **#E3E6E6**
***
- Gray-00: **rgba(255, 255, 255, 1)**
- Gray-50: **rgba(242, 244, 245, 1)**
- Gray-100: **rgba(228, 231, 233, 1)**
- Gray-300: **rgba(173, 183, 188, 1)**
- Gray-400: **rgba(146, 159, 165, 1)**
- Gray-500: **rgba(119, 135, 143, 1)**
- Gray-600: **rgba(95, 108, 114, 1)**
- Gray-700: **rgba(71, 81, 86, 1)**
- Gray-800: **rgba(48, 54, 57, 1)**
- Gray-900: **rgba(25, 28, 31, 1)**
***
- Secondary-100: **rgba(213, 237, 253, 1)**
- Secondary-500: **rgba(45, 165, 243, 1)**
- Secondary-600: **rgba(36, 132, 194, 1)**
- Secondary-700: **rgba(27, 99, 146, 1)**
***
- Primary-100: **rgba(255, 231, 214, 1)**
- Primary-200: **rgba(255, 206, 173, 1)**
- Primary-500: **rgba(250, 130, 50, 1)**
***
- Warning-200: **rgba(247, 233, 158, 1)**
- Warning-300: **rgba(243, 222, 109, 1)**
- Warning-400: **rgba(239, 211, 61, 1)**
- Warning-500: **rgba(235, 200, 12, 1)**
***
- Success-50: **rgba(234, 247, 233, 1)**
- Success-100: **rgba(213, 240, 211, 1)**
- Success-500: **rgba(45, 178, 36, 1)**
***
- Dark-Blue-200: **rgba(255, 255, 255, 0.12)**:
- Dark-Blue-800: **rgba(18, 66, 97, 1)**
***
- Red-Text: **rgba(190, 70, 70, 1)**
- Danger-500: **rgba(238, 88, 88, 1)**

