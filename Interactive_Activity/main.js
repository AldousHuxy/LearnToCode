const fullName = 'Justin Howard'
const title = document.getElementById('title').innerText

document.getElementById('output').style.visibility = 'hidden'

document.getElementById('lbsInput').addEventListener('input', function(event) {
    let cfs = event.target.value
    
    document.getElementById('output').style.visibility = 'visible'
    document.getElementById('cfsOutput').innerHTML = cfs + ' ft/s<sup>3</sup>'
    document.getElementById('gpmOutput').innerHTML = cfs * 448.831173401 + ' gal/min'
    document.getElementById('bpdOutput').innerHTML = cfs / 5.6145832761677 + ' bbl/day'
})


console.log(`${fullName}'s ${title} Webpage`)