import {BehaviorSubject, interval, merge, timer} from 'rxjs';
import { map, combineLatestWith } from 'rxjs/operators';

const createTweetSource = (frequency, account, attribute) => {
    return interval(frequency).pipe(map(i => ({
        account,
        timestamp: Date.now(),
        content: `${attribute} Tweet number ${i + 1}`
    })));
}
const tweets = merge(
    createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
    createTweetSource(3000, 'iamdevloper', 'Expert'),
    createTweetSource(5000, 'CommitStrip', 'Funny')
);
tweets.subscribe(console.log.bind(console));

const deleteOlderThan30s = tweets => tweets.filter(tweet => Date.now() - tweet.timestamp <= 30000)
const oneSecondTimer = timer(0, 1000)

// This subject will cast an array of objects (with properties: id and timestamp) of all liked tweets
export const likedTweets = new BehaviorSubject([])

// Pluck IDs of liked tweets, delete those which are older than 30s
const currentLikedTweetsIDs = likedTweets.pipe(
    map(deleteOlderThan30s),
    map(tweets => tweets.map(t => t.id))
)

// This Subject casts the state of the ToggleButton. Emitted value will be true when Liked Tweets toggle is selected
// and false when All Tweets toggle is selected
export const showOnlyLikedTweets = new BehaviorSubject(false)

// This subject subscribes to the tweets observable and stores all tweets
export const tweetsSubject = new BehaviorSubject([])
tweets.subscribe(tweet => tweetsSubject.next([{...tweet, id: tweet.account + tweet.timestamp}, ...tweetsSubject.value]))

export const tweetsData = tweetsSubject.pipe(
    combineLatestWith(currentLikedTweetsIDs),
    map(([tweets, likedTweetsIDs]) => tweets.map(t => ({...t, liked: likedTweetsIDs.includes(t.id)}))),
    combineLatestWith(oneSecondTimer),
    map(([tweets]) => deleteOlderThan30s(tweets)),
    combineLatestWith(showOnlyLikedTweets),
    map(([tweets, showOnlyLiked]) => showOnlyLiked ? tweets.filter(t=> t.liked) : tweets)
)

// Utility functions

// Clears the current list of tweets
export function clearList() {
    tweetsSubject.next([])
}

// Toggle to list only liked tweets or All tweets
export function toggleLikedOrAllTweets() {
    showOnlyLikedTweets.next(!showOnlyLikedTweets.value)
}

export function unlikeTweet(idOfClickedTweet) {
    likedTweets.next(likedTweets.value.filter(tweet => tweet.id !== idOfClickedTweet ))
}

export function likeTweet(id, timestamp) {
    likedTweets.next([...likedTweets.value, {id, timestamp}])
}

export default tweets