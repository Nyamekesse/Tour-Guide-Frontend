# Tour Guide - Frontend

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Google Collaboratory Notebooks](#google-collaboratory-notebooks)
- [Screenshots Demo](#screenshots-demo)
- [Contributing](#contributing)

## Introduction

Welcome to the frontend repository of Tour Guide, a project combining Machine learning and Natural Language Processing to help people learning and understand more about a tourist attraction or site and also performs sentiment analysis using custom trained model, representing it in a graphical form.

## Features

- **Real-time GPS Locator:** Instantly locate patients during emergencies or in need of quick medical help.
- **AI Health Assistant:** Advanced AI-powered tools provide accurate diagnosis and personalized healthcare recommendations.
- **Fast Medical Care Access:** Connect patients to licensed medical professionals for quick and reliable care.
- **User-friendly Interface:** Intuitive design for easy navigation and seamless user experience.
- **Secure Authentication:** Protects sensitive user information with encrypted authentication.

## Tech Stack

The frontend is built using modern technologies and libraries to ensure a smooth and responsive user interface:

- [React](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): Handles navigation and routing within the application.
- [React Query](https://react-query.tanstack.com/): Enables efficient data fetching and synchronization for improved performance.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building custom and responsive designs.

## Google Collaboratory Notebooks

- Chat Bot
  - [Data preparation Notebook](https://drive.google.com/file/d/1sj2xIyyEjt3wqqCcoHfyboODRFkxj6An/view?usp=sharing) : Dataset used was any blog or article that could be found on the internet. Gathered them through internet scrapping.
  - [Populating database Notebook](https://drive.google.com/file/d/1GISH6Dzg1AqCSX9IxbSRuKMP5CYZJLod/view?usp=sharing): Pinecone free vector database for ML was used.
  - [Creating main pipeline Notebook](https://drive.google.com/file/d/1WtPP2v-PzfH8Y8yd4fm45cYS-yYveVIr/view?usp=sharing) : The [flax-sentence-embeddings/all_datasets_v3_mpnet-base](https://huggingface.co/flax-sentence-embeddings/all_datasets_v3_mpnet-base) model was used as the embedding/retrieval model and [vblagoje/bart_lfqa](https://huggingface.co/vblagoje/bart_lfqa) served as the Generative model.
- Sentiment Analysis Model
  - [Model Notebook](https://drive.google.com/file/d/1ggVVPdiQ3Nwpqbr6Cx0pWMKnvDlqw7vK/view?usp=sharing)
  - [The Roberta Base Sentiment Model used](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest)

## Screenshots Demo

This section displays some of the screens of the project:

- ### Login page

  ![log in page view](https://github.com/Nyamekesse/Tour-Guide-Frontend/blob/main/screenshots/1.LOG-IN-PAGE.png)

- ### Conversation User and Tour Guide

  ![conversation user and tour guide](https://github.com/Nyamekesse/Tour-Guide-Frontend/blob/main/screenshots/5.CHAT-CONVERSATION-1.png)

- ### Interactive Chat UI loading screen

  ![Chat UI loading](https://github.com/Nyamekesse/Tour-Guide-Frontend/blob/main/screenshots/4.CHAT-UI-LOADING.png)

- ### Sentiment Analysis Dashboard

  ![sentiment analysis dashboard](https://github.com/Nyamekesse/Tour-Guide-Frontend/blob/main/screenshots/9.SENTIMENT-ANALYSIS-RESULTS.png)

- ### Sentiment Analysis Result

  ![sentiment analysis result](https://github.com/Nyamekesse/Tour-Guide-Frontend/blob/main/screenshots/9.SENTIMENT-ANALYSIS-RESULTS.png)


## Contributing

I welcome contributions to improve this project. Feel free to open issues, submit pull requests, or provide feedback to help us enhance the platform.

For more information about the backend of Tour guide, please visit the [Backend repository](https://github.com/Nyamekesse/Tour-Guide-Ai-Server.git) .If you have any questions or need support, contact me on[nyamekessesamuel@duck.com](mailto:nyamekessesamuel@duck.com) .Thank you!
