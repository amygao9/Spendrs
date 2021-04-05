import React, {Component} from 'react';

// This component was from https://gist.github.com/WebMaestroFr/dc75df7ff1fd9f78a081cf1c58fd17a8 to display timestamps.

const SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    MONTH = DAY * 30,
    YEAR = DAY * 365;

export const getTimeAgoString = (timestamp) => {
    const elapsed = Date.now() - timestamp,
        getElapsedString = (value, unit) => {
            const round = Math.round(elapsed / value);
            return `${round} ${unit}${round > 1
                ? 's'
                : ''} ago`;
        };
    if (elapsed < MINUTE) {
        return getElapsedString(SECOND, 'second');
    }
    if (elapsed < HOUR) {
        return getElapsedString(MINUTE, 'minute');
    }
    if (elapsed < DAY) {
        return getElapsedString(HOUR, 'hour');
    }
    if (elapsed < MONTH) {
        return getElapsedString(DAY, 'day');
    }
    if (elapsed < YEAR) {
        return getElapsedString(MONTH, 'month');
    }
    return getElapsedString(YEAR, 'year');
};

export default class TimeAgo extends Component {

    state = {
        datetime: null,
        string: ""
    };

    setDateTime = ({timestamp}) => {
        const date = new Date(timestamp);
        this.setState({datetime: date.toISOString(), string: getTimeAgoString(date)});
    };

    componentDidMount() {
        this.setDateTime(this.props);
    }

    componentDidUpdate(props) {
        this.setDateTime(props);
    }

    shouldComponentUpdate(props, {datetime}) {
        return datetime !== this.state.datetime;
    }

    render() {
        const {datetime, string} = this.state;
        return <time className={'postTime'} dateTime={datetime}>{string}</time>;
    }
}