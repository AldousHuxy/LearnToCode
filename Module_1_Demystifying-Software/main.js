// Query the button element
const button = document.querySelector('#main button')

// Add an event listener to the button
button.addEventListener('click', showMore)

function showMore () {
    // Query the hidden content
    const hiddenList = document.querySelector('#main .hidden')
    // Remove the hidden class
    hiddenList.classList.remove('hidden')
    // Add the show class
    hiddenList.classList.add('show')
    // Log the action
    console.log('Showing hidden content')
}