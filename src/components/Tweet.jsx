import React from 'react'
import styled from '@emotion/styled'
import {Favorite, FavoriteBorder} from '@mui/icons-material'
import {likeTweet, unlikeTweet} from '../observables/tweetsObservable'
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemText} from '@mui/material'
import convertTimespanToTimeAgo from '../helpers/convertTimespanToTimeAgo'

const TweetListItem = styled(ListItem)`
  align-items: flex-start;
  border: 1px solid rgb(239, 243, 244);
  :hover {
    background-color: #F7F7F7;
  }
`

const TweetHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
const Author = styled.span`
  font-weight: bold;
  flex: none;
`
const TweetInfo = styled.div`
  color: rgb(83, 100, 113);
  display: flex;
  flex: 0 1 auto;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`

const CenteredDot = styled.div`
    margin: 0 5px;
    padding: 0;
    flex: none;
`

const AuthorId = styled.div`
  flex: 0 1 auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const TimeAgo = styled.div`
  flex: 1 0 auto;
`

const IconBtn = styled(IconButton)`
  margin: 0;
  padding: 0;
`

const HeartIcon = styled(FavoriteBorder)`
  fill: rgb(83, 100, 113);
  cursor: pointer;
  :hover {
    fill: rgb(249, 24, 128);
  }
`

const HeartFilledIcon = styled(Favorite)`
  fill: rgb(249, 24, 128);
  cursor: pointer;
`

const RenderTweetHeader = ({tweet}) => (
    <TweetHeader>
        <Author>{tweet.account}</Author>
        <TweetInfo>
            <AuthorId>{`@${tweet.account}`}</AuthorId>
            <CenteredDot>&#183;</CenteredDot>
            <TimeAgo>{convertTimespanToTimeAgo(tweet.timestamp)}</TimeAgo>
        </TweetInfo>
    </TweetHeader>
)

const Tweet = ({tweet}) => {
    return <>
        <TweetListItem>
            <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>
            <ListItemText>
                <RenderTweetHeader tweet={tweet}/>
                <span>{tweet.content}</span>
                <div>
                    {tweet.liked ?
                        <IconBtn aria-label="unlike tweet" component="span" onClick={()=> unlikeTweet(tweet.id) }>
                            <HeartFilledIcon/>
                        </IconBtn> :
                        <IconBtn aria-label="like tweet" component="span" onClick={() => likeTweet(tweet.id, tweet.timestamp)}>
                            <HeartIcon />
                        </IconBtn>
                    }
                </div>
            </ListItemText>
        </TweetListItem>
    </>
}

export default Tweet