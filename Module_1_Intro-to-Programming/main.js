var author = document.getElementById('author')

var modules = document.querySelectorAll('#module')
modules.forEach(item => {
    item.addEventListener('click', function() {
        var span = item.querySelector('span')
        var innerHTML = item.querySelector('span').innerHTML

        switch(innerHTML) {
            case 'Module 1:':
                item.style.backgroundColor = '#ff9999'; // Light Red
                item.style.padding = '10px';
                span.style.backgroundColor = '#ff9999'; // Light Red
                break;
            case 'Module 2:':
                item.style.backgroundColor = '#99ff99'; // Light Green
                item.style.padding = '10px';
                span.style.backgroundColor = '#99ff99'; // Light Green
                break;
            case 'Module 3:':
                item.style.backgroundColor = '#9999ff'; // Light Blue
                item.style.padding = '10px';
                span.style.backgroundColor = '#9999ff'; // Light Blue
                break;
            case 'Module 4:':
                item.style.backgroundColor = '#ffff99'; // Light Yellow
                item.style.padding = '10px';
                span.style.backgroundColor = '#ffff99'; // Light Yellow
                break;
            case 'Module 5:':
                item.style.backgroundColor = '#ff99ff'; // Light Magenta
                item.style.padding = '10px';
                span.style.backgroundColor = '#ff99ff'; // Light Magenta
                break;
            default:
                item.style.backgroundColor = '#ffffff'; // Default to white
                item.style.padding = '0px';
                span.style.backgroundColor = '#ffffff'; // Default to white
        }
    })
})

var obscureTermsButton = document.getElementById('obscureTermsButton')
obscureTermsButton.addEventListener('click', function() {
    const obscureTerms = document.querySelector('.obscure-terms');
    if (obscureTerms.style.display === 'none' || obscureTerms.style.display === '') {
        obscureTerms.style.display = 'block';
        obscureTermsButton.textContent = 'Hide';
        this.innerHTML = 'Hide';
    } else {
        obscureTerms.style.display = 'none';
        obscureTermsButton.textContent = 'Show';
        this.innerHTML = 'Show';
    }
})

var interactiveActivityButton = document.getElementById('interactiveActivityButton')
interactiveActivityButton.addEventListener('click', function() {
    const interactiveActivities = document.querySelectorAll('.interactive-activity')
    interactiveActivities.forEach(activity => {
        if (activity.style.display === 'none' || activity.style.display === '') {
            activity.style.display = 'block';
            interactiveActivityButton.textContent = 'Hide';
            this.innerHTML = 'Hide';
        } else {
            activity.style.display = 'none';
            interactiveActivityButton.textContent = 'Show';
            this.innerHTML = 'Show';
        }
    })
})

var funFactsButton = document.getElementById('funFactsButton')
funFactsButton.addEventListener('click', function() {
    const funFacts = document.querySelector('.fun-facts');
    if (funFacts.style.display === 'none' || funFacts.style.display === '') {
        funFacts.style.display = 'block';
        funFactsButton.textContent = 'Hide';
        this.innerHTML = 'Hide';
    } else {
        funFacts.style.display = 'none';
        funFactsButton.textContent = 'Show';
        this.innerHTML = 'Show';
    }
})

console.log(`Hello ${author.textContent}, you're a Full-Stack Developer!`)