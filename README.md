# Naukri Clone Website

A job search platform inspired by Naukri, built using modern web technologies to deliver a seamless experience. This project implements essential features for job seekers, including job listings, search functionality, and user authentication.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Details](#project-details)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out a live demo of the application [here](https://naukari-clone.vercel.app/).

## Features

- Responsive UI inspired by Naukri's design.
- Browse job listings and details without requiring login/signup.
- Secure user authentication using Firebase (email/password).
- Job Management: Apply for jobs and bookmark them for later.
- Authentication Redirect: Users attempting to apply/bookmark are redirected to login/signup if not authenticated.
- State Management: Redux Toolkit for efficient data handling.
- Search Functionality: Filter and search for jobs easily.
- Toast Notifications: Instant feedback using React-Toastify.

## Technologies Used

- **Frontend**: React, JavaScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **State Management**: Redux Toolkit with RTK Query
- **Authentication & Database**: Firebase
- **Notifications**: React-Toastify

## Installation

### Clone the repository:

```bash
git clone https://github.com/Sharatdevadiga/Naukri_Clone.git
cd Naukri_Clone
```

### Install dependencies:

```bash
npm install
```

### Set up Firebase:

1. Go to the Firebase Console and create a new project.
2. Enable Firebase Authentication (Email/Password) and Firestore.
3. Copy your Firebase configuration details.

### Configure environment variables:

Create a .env file in the project root and add your Firebase configuration:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Run the development server:

```bash
npm start
```

## Usage

- Browse job listings and search for jobs without logging in.
- Sign up or log in to apply for jobs or bookmark them.
- Use the search bar to filter jobs based on keywords.

## Project Details

This project ensures a user-friendly job search experience with the following features:

- **Frontend Interface Development**: Built an intuitive and responsive interface inspired by Naukri.
- **User Authentication**: Integrated Firebase for secure email/password authentication.
- **Job Management**: Users can apply for and bookmark jobs, with seamless state management via Redux Toolkit.
- **Search Functionality**: Implemented job search and filtering for easier discovery.
- **Authentication Redirects**: Ensures security by redirecting unauthenticated users to login/signup when accessing personalized features.
- **Notifications**: Instant feedback using React-Toastify.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
