import React, {useEffect, useState} from "react";
import Tweet from "./Tweet";
import tweets from "../api/data";
import {map, scan} from 'rxjs/operators';
import {Container, List} from '@mui/material';

function TweetList() {
    const [currentTweets, setCurrentTweets] = useState([])


    useEffect(() => {
        const subscription = tweets.pipe(
            scan((tweets, tweet) => [tweet, ...tweets], []),
            map(tweets => tweets.filter(tweet => Date.now() - tweet.timestamp <= 30000))
        ).subscribe(tweets => setCurrentTweets(tweets))

        return () => subscription.unsubscribe();
    }, [])

    return (
        <Container maxWidth="md">
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                { currentTweets.length > 0 && currentTweets.map(tweet =>
                    <Tweet tweet={tweet} key={tweet.timestamp}/>

                )}
            </List>
        </Container>
    )

}

export default TweetList