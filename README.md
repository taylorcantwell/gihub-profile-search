**Index:**

1.1 - Introduction

1.2 - User stories

1.3 - Technology

1.4 - Wireframe

1.5 - Features that could be added and improved

1.1 **Introduction**

![Alt Text](https://i.gyazo.com/a4f6aa17b0419272442363aa5d393f0b.gif)

Having somewhat gained a grasp of React and Redux, I felt I was ready to take on a project without the crutch of having the solution easily accessible in the form of a tutorial.

The idea of this project was taken from here: [https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/GitHub-Profiles.md](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/GitHub-Profiles.md)

1.2 **The user stories of the project are the follow:**

- [ ]  User can enter a username
- [ ]  User can click on search button to retrieve information
- [ ]  User can see the avatar, username, followers and repository count of searched user
- [ ]  User can see the top 4 repositories of searched user
- [ ]  User should get an alert if the username is not valid

1.3 **Technology used:**

- React
- Redux/React-Redux/Redux-Thunk
- Styled Components
- GitHub API: [https://docs.github.com/en/free-pro-team@latest/rest](https://docs.github.com/en/free-pro-team@latest/rest)
- Google Fonts
- Font Awesome

1.4 **Here is a simple wireframe I put together for some structure and aim for the project:**

![Alt Text](https://i.gyazo.com/4bf0ac2cbcd51314db4b496aa9270b0f.png)

1.5 **Features that could be added/improved**

- To improve the app client shouldn't be able to search without entering an input or without changing the input since last search.
- Input should be checked to see if it's valid.
- UI should reset when client search returns a non existent user instead of past search results.
