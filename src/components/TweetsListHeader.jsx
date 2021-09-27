import React from 'react'
import ToggleButton from './atoms/ToggleButton'
import {toggleLikedOrAllTweets, clearList} from '../observables/tweetsObservable'
import styled from '@emotion/styled'
import {Button, ListSubheader} from '@mui/material'

const TOGGLE_OPTION_ALL = {
    value: 'all',
    text: 'All Tweets'
}

const TOGGLE_OPTION_LIKED = {
    value: 'liked',
    text: 'Liked Tweets'
}

const SubHeader = styled(ListSubheader)`
  position: sticky;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid rgb(239, 243, 244);
  width: 100%;
  ${({theme}) => theme.breakpoints.down('sm')} {
    padding: 0 20%;
    flex-direction: column;
    justify-content: center;
    &div {
      width: 30%;
      justify-content: center;
    }
  }
`
const LikedTweets = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100%;
`

const ClearTweetsButton = styled(Button)`
  border-radius: 15px;
  ${({theme}) => theme.breakpoints.down('sm')} {
    width: 100%;
  }
`

const TweetsListHeader = ({currentTweets}) => (
    <SubHeader component="div">
        <LikedTweets> Liked Tweets: {currentTweets.filter(tweet => tweet.liked).length}</LikedTweets>
        <div>
            <ToggleButton
                options={[{value: TOGGLE_OPTION_ALL.value, text: TOGGLE_OPTION_ALL.text},
                    {value: TOGGLE_OPTION_LIKED.value, text: TOGGLE_OPTION_LIKED.text}]}
                onChange={toggleLikedOrAllTweets}
                defaultValue={TOGGLE_OPTION_ALL.value}
            />
        </div>
        <div>
            <ClearTweetsButton size="small" variant="contained" onClick={clearList}>Clear List</ClearTweetsButton>
        </div>
    </SubHeader>
)

export default TweetsListHeader