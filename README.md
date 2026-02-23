📰 HeadlineHub

HeadlineHub is a responsive news web application built using React and Material UI. It fetches real-time news headlines from NewsAPI and displays categorized content with pagination, loading indicators, and dynamic routing.

🚀 Features

Category-based news filtering

Pagination (Previous / Next navigation)

Loading spinner for API requests

Dynamic routing using React Router

Environment variable support for API key

Responsive card-based UI

Fallback image for missing news thumbnails

Author, source badge, and published date (GMT format)

🛠 Tech Stack

React

React Router (v6)

Material UI (MUI)

NewsAPI

JavaScript (ES6)

CSS

📦 Installation & Setup

Clone the repository:

git clone https://github.com/patilnagesh03/Headline-Hub-News-Application.git

Install dependencies:

npm install

Create a .env file in the root directory and add:

REACT_APP_NEWS_API_KEY=your_api_key_here

Start the development server:

npm start

📌 API Limitation

This project uses the free NewsAPI developer plan, which supports limited country-based filtering. Currently configured with country=us.
