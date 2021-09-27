# Twitter-like application

## Steps to run the application

In the project directory, you can run:
### `yarn install`
and then
### `yarn start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## App features

1. The app is built using react and rxjs.
   
2. It takes the tweets observable and renders the tweets as a list.
   The tweets are ordered by date descending.

3. Tweets older than 30 secs are not be shown in the list anymore.
4. Tweets can be liked and unliked.
   There is a counter in the Sub-Header that shows the number of liked tweets
   contained within the list.
5. It is possible to toggle between "all tweets" and "liked tweets" by clicking the Toggle button in the Sub-Header.
6. The list of tweets can be cleared using the CLEAR TWEETS button in the Sub-header. Any future tweets will continue to be listed.