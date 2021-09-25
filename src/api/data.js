import {BehaviorSubject, interval, merge} from 'rxjs';
import { map, scan, combineLatestWith } from 'rxjs/operators';

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
// tweets.subscribe(console.log.bind(console));

export const likedTweets = new BehaviorSubject([])

export const tweetsData = tweets.pipe(
    scan((tweets, tweet) => [{...tweet, id: tweet.account + tweet.timestamp}, ...tweets], []),
    combineLatestWith(likedTweets),
    map(([tweets, likedTweets]) => {
        return tweets.map(t => ({...t, liked: likedTweets.includes(t.id)}))
    }),
    map(tweets => tweets.filter(tweet => Date.now() - tweet.timestamp <= 30000))
)

export default tweets