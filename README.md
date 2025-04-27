# Trap: A Modern Travel Application

Trap is a sleek and modern travel application built using **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This app is designed to provide a seamless experience for travelers, offering details about travel destinations, hotels, and attractions with stunning web and mobile responsiveness. With features like **smooth scroll animations**, **React Swiper**, and **interactive cursors**, Trap ensures an engaging user experience across all platforms.

---

## 🌟 Features

- **Responsive Design**: A seamless experience across desktop, tablet, and mobile devices.
- **Travel Details**: Find information about travel destinations, hotels, and attractions.
- **Smooth Scroll Animations**: Leveraging AOS (Animate On Scroll) for a polished look.
- **Interactive Elements**:
  - Carousel slides with **React Swiper**.
  - Beautiful icons using **React Icons**.
  - Custom cursors for an enhanced interactive experience.
- **Optimized Performance**: Fast load times and a great user experience.

---

## 📸 Screenshots & 📹 Videos

Check out the amazing UI and functionality of Trap:

### Screenshots
![](https://github.com/Dinuki85/TravelApp/blob/main/public/Screenshots/image1.png)
![](https://github.com/Dinuki85/TravelApp/blob/main/public/Screenshots/image2.png)
![](https://github.com/Dinuki85/TravelApp/blob/main/public/Screenshots/image3.png)
![](https://github.com/Dinuki85/TravelApp/blob/main/public/Screenshots/image4.png)

![](https://github.com/Dinuki85/TravelApp/blob/main/public/Screenshots/image5.png)

![](https://github.com/Dinuki85/TravelApp/blob/main/public/Screenshots/image6.png)


### Demo Videos
[Watch the Demo 1](https://github.com/Dinuki85/TravelApp/blob/main/public/Screenshots/output1.mp4)
[Watch the Demo 2](https://github.com/Dinuki85/TravelApp/blob/main/public/Screenshots/mobile.mp4)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Libraries**:
  - [React Swiper](https://swiperjs.com/react)
  - [React Icons](https://react-icons.github.io/react-icons/)
  

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/trap.git
   cd trap
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development
Run the development server:
```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production
To create an optimized build:
```bash
npm run build
# or
yarn build
```

---

## 📂 Project Structure

```
trap/
├── .next/                     # Build directory
├── app/                       # Application entry point
│   ├── favicon.ico            # Favicon for the application
│   ├── globals.css            # Global CSS styles
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Root page component
├── components/                # Reusable UI components
│   ├── Helper/
│   │   └── SectionHeading.tsx
│   ├── Home/
│   │   ├── Destination/
│   │   │   ├── Destination.tsx
│   │   │   └── DestinationSlider.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── Hero/
│   │   │   └── Hero.tsx
│   │   ├── Hotel/
│   │   │   ├── Hotel.tsx
│   │   │   └── HotelCard.tsx
│   │   ├── Navbar/
│   │   │   └── ResponsiveNav.tsx
│   │   ├── NewLetter/
│   │   │   └── NewLetter.tsx
│   │   ├── News/
│   │   │   ├── News.tsx
│   │   │   └── NewsCards.tsx
│   │   ├── Reviews/
│   │   │   ├── Review.tsx
│   │   │   └── ReviewSlider.tsx
│   │   ├── WhyChoose/
│   │   │   ├── WhyChoose.tsx
│   │   │   └── WhyChooseCard.tsx
│   │   └── Home.tsx
├── constant/
│   └── constant.ts            # Constant variables
├── data/
│   └── data.ts                # Data files for the app
├── node_modules/              # Node.js modules
├── public/
│   ├── images/                # Static images
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore                 # Git ignore file
├── eslint.config.mjs          # ESLint configuration
├── next-env.d.ts              # Next.js environment types
├── next.config.ts             # Next.js configuration
├── package.json               # Package configuration
├── postcss.config.mjs         # PostCSS configuration
├── README.md                  # Project README file
└── tsconfig.json              # TypeScript configuration
```

---

## 🤝 Contributions
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 🌐 Connect
- **Website**: [Trap Travel App](https://trap-travel-app.com)
- **GitHub**: [Your Repository](https://github.com/your-username/trap)
- **Email**: your-email@example.com

