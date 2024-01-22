const arrayMovies = [
    {
        immagine: 'brooklyn99.jpg',
        titolo: 'Brooklyn 99',
        descrizione: 'Created by Dan Goor and Michael Schur, it revolves around seven New York City Police Department (NYPD) detectives who are adjusting to life under their new commanding officer, the serious and stern Captain Raymond Holt (Andre Braugher).'
    },
    {
        immagine: 'sherlock.jpg',
        titolo: 'Sherlock',
        descrizione: 'Sherlock depicts "consulting detective" Sherlock Holmes solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson, who has returned from military service in Afghanistan.'
    },
    {
        immagine: 'merlin.jpg',
        titolo: 'Merlin',
        descrizione: 'Merlin (also known as The Adventures of Merlin) is a British fantasy-adventure drama television programme, loosely based on the Arthurian legends regarding the close relations of Merlin and King Arthur.'
    },
    {
        immagine: 'friends.jpg',
        titolo: 'Friends',
        descrizione: 'An American television sitcom created by David Crane and Marta Kauffman revolving around six friends in their 20s and early 30s who live in Manhattan, New York City.'
    },
    {
        immagine: 'vikings.jpg',
        titolo: 'Vikings',
        descrizione: 'The series is inspired by the tales of the Norsemen of early medieval Scandinavia. It broadly follows the exploits of the legendary Viking chieftain Ragnar Lothbrok and his crew, family and descendants.'
    }
]


const thumbnailsHtml = document.getElementById("thumbnails")
const focusCardHtml = document.getElementById("focus-card")
const arrowDownHtml = document.querySelector('.fa-circle-arrow-down')
const arrowUpHtml = document.querySelector('.fa-circle-arrow-up')

let currentMovie = 0


for (let i = 0; i < arrayMovies.length; i++) {

    const movies = arrayMovies[i]
    console.log(movies)

    // thumbnailsHtml.innerHTML += `<div class="thumbnail" style="background-image: url(./assets/img/${movies.immagine})></div>`

    let thumbnail = document.createElement("div")
    thumbnail.classList.add("thumbnail")
    thumbnail.style.backgroundImage = `url(./assets/img/${movies.immagine})`

    thumbnailsHtml.append(thumbnail)


    
    let titleCard = document.createElement("h3")
    titleCard.classList.add("hidden")
    titleCard.textContent = `${movies.titolo}`
    
    focusCardHtml.append(titleCard)


    let descriptionCard = document.createElement("p")
    descriptionCard.classList.add("hidden")
    descriptionCard.textContent = `${movies.descrizione}`
    
    focusCardHtml.append(descriptionCard)


    
    if (i === 0) {
        titleCard.classList.remove("hidden")
        descriptionCard.classList.remove("hidden")
        focusCardHtml.style.backgroundImage = `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.73)), url(./assets/img/${movies.immagine})`
    } 
    
    
    
}



arrowDownHtml.addEventListener('click', function() {
    currentMovie = (currentMovie + 1) % arrayMovies.length;
    updateCarousel();
})

arrowUpHtml.addEventListener('click', function() {
    currentMovie = (currentMovie - 1 + arrayMovies.length) % arrayMovies.length;
    updateCarousel();
})

function updateCarousel() {
    let titles = focusCardHtml.querySelectorAll('h3');
    let descriptions = focusCardHtml.querySelectorAll('p');
    let thumbnails = thumbnailsHtml.querySelectorAll('#focus-card, .thumbnail');

    // Hide all titles, descriptions, and thumbnails
    titles.forEach(title => title.classList.add('hidden'));
    descriptions.forEach(description => description.classList.add('hidden'));
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    // Show the current title, description, and thumbnail
    titles[currentMovie].classList.remove('hidden');
    descriptions[currentMovie].classList.remove('hidden');
    thumbnails[currentMovie].classList.add('active');

    // Update the main photo
    focusCardHtml.style.backgroundImage = `url(./assets/img/${arrayMovies[currentMovie].immagine})`;
}





