var author = document.getElementById('author')

var obscureTermsButton = document.getElementById('obscureTermsButton')
var dailyLifeButton = document.getElementById('dailyLifeButton')
var interactiveActivityButton = document.getElementById('interactiveActivityButton')
var funFactsButton = document.getElementById('funFactsButton')

function hideAllSections() {
    const obscureTerms = document.querySelector('.obscure-terms');
    const dailyLife = document.querySelector('.daily-life');
    const interactiveActivities = document.querySelectorAll('.interactive-activity');
    const funFacts = document.querySelector('.fun-facts');
    
    obscureTerms.style.display = 'none';
    dailyLife.style.display = 'none';
    interactiveActivities.forEach(activity => activity.style.display = 'none');
    funFacts.style.display = 'none';
    
    obscureTermsButton.textContent = 'Show';
    dailyLifeButton.textContent = 'Show';
    interactiveActivityButton.textContent = 'Show';
    funFactsButton.textContent = 'Show';
}

obscureTermsButton.addEventListener('click', function() {
    const obscureTerms = document.querySelector('.obscure-terms');
    if (obscureTerms.style.display === 'none' || obscureTerms.style.display === '') {
        hideAllSections();
        obscureTerms.style.display = 'block';
        this.textContent = 'Hide';
    } else {
        obscureTerms.style.display = 'none';
        this.textContent = 'Show';
    }
})

dailyLifeButton.addEventListener('click', function() {
    const dailyLife = document.querySelector('.daily-life');
    if (dailyLife.style.display === 'none' || dailyLife.style.display === '') {
        hideAllSections();
        dailyLife.style.display = 'block';
        this.textContent = 'Hide';
    } else {
        dailyLife.style.display = 'none';
        this.textContent = 'Show';
    }
})

interactiveActivityButton.addEventListener('click', function() {
    const interactiveActivities = document.querySelectorAll('.interactive-activity')
    const firstActivity = interactiveActivities[0];
    if (firstActivity.style.display === 'none' || firstActivity.style.display === '') {
        hideAllSections();
        interactiveActivities.forEach(activity => activity.style.display = 'block');
        this.textContent = 'Hide';
    } else {
        interactiveActivities.forEach(activity => activity.style.display = 'none');
        this.textContent = 'Show';
    }
})

funFactsButton.addEventListener('click', function() {
    const funFacts = document.querySelector('.fun-facts');
    if (funFacts.style.display === 'none' || funFacts.style.display === '') {
        hideAllSections();
        funFacts.style.display = 'block';
        this.textContent = 'Hide';
    } else {
        funFacts.style.display = 'none';
        this.textContent = 'Show';
    }
})

console.log(`Hello ${author.textContent}, you're a Full-Stack Developer!`)