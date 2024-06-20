# Weather App
![Screenshot (637)](https://github.com/NAHIAN-19/weather-app/assets/106859103/6757d6af-70de-460b-8a5c-c90c7cee474e)

## Varients 
- [Weather App](https://nahian-19.github.io/weather-app)  (vite & react)
- [Weather App](https://nahian-19.github.io/WeatherApp/)  (html , tailwind-css & js)
  
A simple weather application built with React and Vite that fetches and displays the current weather information for a specified city using the OpenWeatherMap API. The app also changes its background image with each weather request using the Unsplash API.

## Features

- Fetch and display current weather information for a specified available city.
- Change background image with each weather request using the Unsplash API.
- Responsive design for both desktop and mobile devices.

## Technologies Used

- React
- Vite
- OpenWeatherMap API
- Unsplash API
- CSS (Bootstrap for styling)
- HTML

## Setup and Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/NAHIAN-19/weather-app.git
    cd weather-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Obtain API keys:**
   - Create an account and get an API key from [OpenWeatherMap](https://openweathermap.org/api).
   - Create an account and get an API key from [Unsplash](https://unsplash.com/developers).

4. **Create a `.env` file in the root directory and add your API keys:**
    ```env
    VITE_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
    VITE_UNSPLASH_API_KEY=your_unsplash_api_key
    ```

5. **Run the development server:**
    ```sh
    npm run dev
    ```

6. **Open your browser and go to:**
    ```
    http://localhost:4000
    ```

## Usage

1. Enter the name of the city you want to check the weather for in the input box.
2. Click on the "Get Weather" button.
3. The weather information will be displayed along with a new background image.
4. If the city is not found, an error page will be displayed with an option to go back.

## Project Structure

```plaintext
weather-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```
## Acknowledgements
  1. [OpenWeatherMap](https://openweathermap.org/api) for providing the weather data API.
  2. [Unsplash](https://unsplash.com/developers) for providing the background images API.
  3. [Bootstrap](https://getbootstrap.com) for the CSS framework used for styling.
  4. [Vite](https://vitejs.dev) for the fast development build tool.
