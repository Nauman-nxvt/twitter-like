import React, {useEffect, useState} from 'react'
import Tweet from './Tweet'
import {tweetsData} from '../observables/tweetsObservable'
import {Container, List} from '@mui/material'
import styled from '@emotion/styled'
import TweetsListHeader from './TweetsListHeader'

const TweetsList = styled(List)`
  width: 100%;
  height: 95%;
  position: sticky;
  overflow: auto;
  margin: 0;
  padding: 0;
`

const TweetsListContainer = styled(Container)`
  height: 100vh;
  margin: 0;
  padding: 0;
`


function TweetList() {
    const [currentTweets, setCurrentTweets] = useState([])

    useEffect(() => {
        const subscription = tweetsData.subscribe(tweets => setCurrentTweets(tweets))
        return () => subscription.unsubscribe();
    }, [])

    return (
        <TweetsListContainer disableGutters maxWidth="md">
            <TweetsList>
                <TweetsListHeader currentTweets={currentTweets}/>
                { currentTweets.length > 0 && currentTweets.map(tweet =>
                    <Tweet tweet={tweet} key={tweet.id}/>
                )}
            </TweetsList>
        </TweetsListContainer>
    )

}

export default TweetList