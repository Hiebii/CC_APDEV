document.querySelectorAll('.dropdown-item[data-lab]').forEach(item => {
        item.addEventListener('click', event => {
            const chosenLab = event.target.getAttribute('data-lab');
            console.log('Chosen Lab:', chosenLab);
            document.getElementById('lab-menu').innerText = chosenLab;
        });
    });

