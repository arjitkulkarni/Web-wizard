function updateCountdown() {
    const now = new Date();
    const halloween = new Date(now.getFullYear(), 9, 31); // October 31

    // If the current date is past Halloween this year, set to next year's Halloween
    if (now > halloween) {
        halloween.setFullYear(halloween.getFullYear() + 1);
    }

    const timeDiff = halloween - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();
