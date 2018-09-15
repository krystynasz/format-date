const formatDate = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    const seconds = Math.round(timeInSeconds - hours * 3600 - minutes * 60);

    var showHours;

    if (hours == 0) {
        showHours = '';
    }
    else if (minutes == 0 && seconds == 0) {
        showHours = `${hours}h`
    }
    else {
        showHours = `${hours}h `;
    }

    var showMinutes;

    if (minutes == 0) {
        showMinutes = '';
    }
    else if (seconds == 0) {
        showMinutes = `${minutes}m`;
    }
    else {
        showMinutes = `${minutes}m `;
    };

    var showSeconds;

    if ((hours !== 0 || minutes !== 0) && seconds == 0) {
        showSeconds = '';
    }
    else {
        showSeconds = `${seconds}s`;
    };

    if (timeInSeconds == undefined) {
        return '0s';
    }
    else {
        return showHours + showMinutes + showSeconds;
    }
}

module.exports = formatDate;