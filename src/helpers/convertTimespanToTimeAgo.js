import {formatDistanceToNowStrict} from "date-fns";

export default function convertTimespanToTimeAgo(timestamp) {
    return formatDistanceToNowStrict(timestamp)
        .replace(' seconds', 's')
        .replace(' second', 's')
        .replace(' minutes', 'm')
}