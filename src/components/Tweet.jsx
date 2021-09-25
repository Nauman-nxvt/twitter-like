import React from "react";
import styled from "@emotion/styled";
import {Favorite, FavoriteBorder} from '@mui/icons-material';
import {formatDistanceToNowStrict} from 'date-fns'
import {likedTweets} from "../api/data";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

const TweetHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
const Author = styled.span`
  font-weight: bold;
`
const TweetInfo = styled.span`
  color: rgb(83, 100, 113);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  span {
    margin: 0 5px;
  }
`

const HeartIcon = styled(FavoriteBorder)`
  fill: rgb(83, 100, 113);
`

const HeartFilledIcon = styled(Favorite)`
  fill: rgb(249, 24, 128);
`

const Tweet = ({tweet}) => {
    return <>
        <ListItem alignItems="flex-start" sx={{border: '1px solid rgb(239, 243, 244)'}}>
            <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>
            <ListItemText>
                <TweetHeader>
                    <Author>{tweet.account}</Author>
                    <TweetInfo> {`@${tweet.account}`} <span>&#183;</span>{`${formatDistanceToNowStrict(tweet.timestamp)}`}</TweetInfo>
                </TweetHeader>
                <span>{tweet.content}</span>
                <p>
                    {
                        tweet.liked ?
                            <HeartFilledIcon onClick={()=> likedTweets.next(likedTweets.value.filter(t => t !== tweet.id )) }/> :
                            <HeartIcon onClick={() => likedTweets.next([...likedTweets.value, tweet.id])}/>
                    }
                </p>
            </ListItemText>
        </ListItem>
    </>
}

export default Tweet