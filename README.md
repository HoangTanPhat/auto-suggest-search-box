# Auto-Suggest Search Box Guidelines

## Introduction

This document provides some essential information for implementing auto-suggest search box feature effectively.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Basic Structure](#basic-structure)
- [Run The Project](#run-the-project)
- [Guidelines](#guidelines)
- [Rules To Follow](#rules-to-follow)
- [Integration](#integration)

## Prerequisites

Before digging deeper on how to implement this feature, ensure that you have the following prerequisites in place:

- You're working with Reactjs or Nextjs frameworks
- Important dependencies that need to be installed:
  - @mui/material
  - axios
  - tailwindcss and its relevance
  - lucide-react
  - autosuggest-highlight

## Basic Structure

This project's folder includes 2 separate parts of the code: A fake server and a client interface.

The fake server is written inside the `route.ts` file in `app/api/search` directory. It returns the static data, which you can find easily inside `data.ts` file in `lib` folder.

The main Auto-suggest search box feature is in `AutoSuggestSearchBox` component in `components/auto-suggest-search-box.tsx` file. Inside the `components` folder, there are several components that are needed to make the main component work.

The `lib` folder contains some basic functions and constants.

## Run The Project

Simply use the command `yarn dev` to execute the code.

## Guidelines

The auto-suggest search box is on the left hand side, and the settings panel is on the right hand side.

As the default state, the search box will always display the results in 3 blocks: Suggested Terms, Collections and Products. The number of character that triggers the display of Suggestions results when typing is 1.

You can customize by display of the blocks and the number of character by checking/un-checking the box or type different number.

## Rules To Follow

- At least 1 option needs to be checked to ensure the data will be displayed correctly.
- The number of character must be greater than 0.

## Integration

To apply this feature to any Search Box, please kindly follow these steps:

- Copy `components` folder and paste it to your project
- Copy `lib/utils.ts` file and paste it to your project
- Make sure you have installed all the necessary dependencies mentioned in the Prerequisites.
- Place `AutoSuggestSearchBox` component to your code
- Inside `AutoSuggestSearchBox` component (`auto-suggest-search-box.tsx` file), you need to replace the current endpoint with your own endpoint inside `handleCallSearch` function: replace `apiUrl + apiRoutes.navigation.searchByTerm` with your custom url.
- Run the project and have fun!
