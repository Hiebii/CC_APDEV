document.querySelectorAll('.dropdown-item[data-time]').forEach(item => {
    item.addEventListener('click', event => {
        const chosenTime = event.target.getAttribute('data-time');
        console.log('Chosen Time:', chosenTime);
        document.getElementById('time-text').innerText = chosenTime;
    });
});
