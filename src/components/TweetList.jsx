import React, {useEffect, useState} from "react";
import Tweet from "./Tweet";
import {tweetsData} from "../api/data";
import {Container, List} from '@mui/material';

function TweetList() {
    const [currentTweets, setCurrentTweets] = useState([])

    useEffect(() => {
        const subscription = tweetsData.subscribe(tweets => setCurrentTweets(tweets))
        return () => subscription.unsubscribe();
    }, [])

    return (
        <Container maxWidth="md">
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                { currentTweets.length > 0 && currentTweets.map(tweet =>
                    <Tweet tweet={tweet} key={tweet.id}/>
                )}
            </List>
        </Container>
    )

}

export default TweetList