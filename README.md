<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



[![GitHub forks][forks-shield]][forks-url]
[![GitHub stars][stars-shield]][stars-url]
[![GitHub issues][issues-shield]][issues-url]
[![GitHub license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/caw442000/weather-tracker">
    <img src="src/assets/images/weather.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Simply Weather</h3>

  <p align="center">
    A no frills current and 3 day weather forecasting app powered by GoogleAPI and weatherAPI
    <br />
    <a href="https://github.com/caw442000/weather-tracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/caw442000/weather-tracker">View Demo</a>
    ·
    <a href="https://github.com/caw442000/weather-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/caw442000/weather-tracker/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project


Here's why:

- Sometimes you just want to get a quick glimpse of the weather
- You don't want all the extra information getting in the way
- You just want something global and simple

Simply Weather is just that.  A no frills global weather app just for you.

### Built With

- [Material UI](https://material-ui.com/)
- [React](https://reactjs.org/)
- [Context API](https://reactjs.org/docs/context.html)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. ⚠️ Before you can start using the Google Places API and Geocoding API, you must sign up and create a billing account

- [Instructions for Google API](https://developers.google.com/places/web-service/get-api-key)

2. Get a free API Key at [https://www.weatherapi.com/](https://www.weatherapi.com/)

3. Clone the repo
   ```sh
   git clone https://github.com/caw442000/weather-tracker.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create a `.env` file in src folder


6. Enter your API in `.env`
   ```JS
    REACT_APP_WEATHER_API_KEY=ENTER YOUR API;
    REACT_APP_GOOGLE_LOCATION_API_KEY=ENTER YOUR API;
   ```

<!-- USAGE EXAMPLES -->

## Usage

![Simply Weather Simple Demo](https://github.com/caw442000/weather-tracker/blob/contextapi/demo/simplyweather.gif?raw=true)

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/caw442000/weather-tracker/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Cedric Winbush - [@visionNfocus](https://twitter.com/visionNfocus) - cawinbushjr@gmail.com

Project Link: [https://simply-weather.vercel.app/](https://simply-weather.vercel.app/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Google API](https://cloud.google.com/)
- [Weatherapi](https://www.weatherapi.com/)
- [Vercel](https://vercel.com/)
- [use-places-autocomplete](https://github.com/wellyshen/use-places-autocomplete)
- [autosuggest-highlight/parse](https://github.com/moroshko/autosuggest-highlight)
- [Choose an Open Source License](https://choosealicense.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/caw442000/weather-tracker?style=for-the-badge
[forks-url]: https://github.com/caw442000/weather-tracker/network
[stars-shield]: https://img.shields.io/github/stars/caw442000/weather-tracker?style=for-the-badge
[stars-url]: https://github.com/caw442000/weather-tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/caw442000/weather-tracker/issues
[license-shield]: https://img.shields.io/github/license/caw442000/weather-tracker?style=for-the-badge
[license-url]: https://github.com/caw442000/weather-tracker/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/cedricwinbush/
[product-screenshot]: images/screenshot.png


