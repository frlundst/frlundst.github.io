import {
    GoComment,
    GoGitPullRequest,
    GoGlobe,
    GoIssueOpened,
    GoMarkGithub,
    GoPerson,
    GoRepo,
    GoRepoForked,
    GoRepoPush,
    GoStar,
    GoTag,
    GoTrashcan,
} from "react-icons/go";
import { timeSince } from "../../../../../Internalization/timeSince";
import "./style.css";

const EVENTS = {
    PushEvent: { label: "Pushed to", icon: GoRepoPush },
    CreateEvent: { label: "Created", icon: GoRepo },
    DeleteEvent: { label: "Deleted", icon: GoTrashcan },
    IssuesEvent: { label: "Opened issue on", icon: GoIssueOpened },
    IssueCommentEvent: { label: "Commented on issue on", icon: GoComment },
    PullRequestEvent: { label: "Opened pull request on", icon: GoGitPullRequest },
    PullRequestReviewCommentEvent: { label: "Commented on pull request on", icon: GoComment },
    WatchEvent: { label: "Starred", icon: GoStar },
    ForkEvent: { label: "Forked", icon: GoRepoForked },
    ReleaseEvent: { label: "Released", icon: GoTag },
    MemberEvent: { label: "Added member to", icon: GoPerson },
    PublicEvent: { label: "Made public", icon: GoGlobe },
};

const FALLBACK_EVENT = { label: "Activity on", icon: GoMarkGithub };

export const Listing = ({ title, time, type }) => {
    const { label, icon: Icon } = EVENTS[type] || FALLBACK_EVENT;

    return (
        <li className="listing">
            <span className="listing-icon" aria-hidden="true"><Icon /></span>
            <span className="listing-text">
                {label}{" "}
                <a href={`https://github.com/${title}`} target="_blank" rel="noreferrer">{title}</a>
            </span>
            <time className="listing-time" dateTime={time}>{timeSince(new Date(time))} ago</time>
        </li>
    );
};
