import { timeSince } from "../../../Internalization/timeSince";
import "./style.css";
import { Image, Row } from "react-bootstrap";

export const Listing = ({ imagePathname, title, time, type}) => {
    const formatTitle = () => {
        let result = "";
        switch (type) {
            case "PushEvent":
                result = "Pushed to";
                break;
            case "CreateEvent":
                result = "Created";
                break;
            case "DeleteEvent":
                result = "Deleted";
                break;
            case "IssuesEvent":
                result = "Opened issue on";
                break;
            case "IssueCommentEvent":
                result = "Commented on issue on";
                break;
            case "PullRequestEvent":
                result = "Opened pull request on";
                break;
            case "PullRequestReviewCommentEvent":
                result = "Commented on pull request on";
                break;
            case "WatchEvent":
                result = "Starred";
                break;
            case "ForkEvent":
                result = "Forked";
                break;
            case "ReleaseEvent":
                result = "Released";
                break;
            case "MemberEvent":
                result = "Added member to";
                break;
            case "PublicEvent":
                result = "Made public";
                break;
            default:
                result = "Unknown action on";
                break;
        }

        return <h6>{result + " "}<strong><a href={`https://github.com/${title}`} target="_blank" style={{color: "black"}} >{title}</a></strong></h6>;
    }
    return <div className="listing">
        <Image src={imagePathname} className="listing-image" fluid roundedCircle />
        <div>
            {formatTitle()}
            <h6 style={{color: "darkgray"}}>{timeSince(new Date(time))} ago</h6>
        </div>
    </div>
}