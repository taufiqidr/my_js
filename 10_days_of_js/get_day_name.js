function getDayName(dateString) {
    let date = new Date(dateString);
    let weekday = date.getDay();
    const options = { weekday: 'long' };
    let dayName = new Intl.DateTimeFormat('en-US', options).format(date);
    // Write your code here

    return dayName;
}

const btn = document.getElementById