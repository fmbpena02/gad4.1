document.addEventListener('DOMContentLoaded', function () {
    const tableOne = document.querySelector('.table-one');
    const tableTwo = document.querySelector('.table-two');

    const addNewEventButton = document.createElement('button');
    addNewEventButton.innerText = 'Add New Event';
    addNewEventButton.classList.add('btn', 'btn-light');
    addNewEventButton.addEventListener('click', function () {
        tableOne.style.display = 'block';
        tableTwo.style.display = 'none';
    });

    const existingEventButton = document.createElement('button');
    existingEventButton.innerText = 'Existing Event';
    existingEventButton.classList.add('btn', 'btn-light');
    existingEventButton.addEventListener('click', function () {
        tableOne.style.display = 'none';
        tableTwo.style.display = 'block';
    });

    document.querySelector('.modal-body').prepend(addNewEventButton, existingEventButton);
});