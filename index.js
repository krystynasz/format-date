const formatDate = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    const seconds = Math.round(timeInSeconds - hours * 3600 - minutes * 60);

    const showTime = [];

    if (hours !== 0) {
       showTime.push(`${hours}h`)
    }

    if (minutes !== 0) {
        showTime.push(`${minutes}m`);
    }

    if (seconds !== 0) {
        showTime.push(`${seconds}s`);
    };

    if (timeInSeconds == undefined) {
        return '0s';
    }
    else {
        const result = showTime.join(' ');
        return result;
    }
}

module.exports = formatDate;