import React from "react";
import styled from "@emotion/styled";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {formatDistanceToNowStrict} from 'date-fns'

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
            </ListItemText>
        </ListItem>
    </>
}

export default Tweet