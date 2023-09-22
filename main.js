
// Funcion para traer las cards 
const container = document.getElementById("container");
let currentPage = 1;
let totalPages=0;
let pageNumber= 1;

const todosBtn= document.getElementById("todos")
const femaleBtn= document.getElementById("female")
const genderlessBtn= document.getElementById("genderless")
const unknownBtn= document.getElementById("unknown")



 const getCharacters = (pageNumber) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => res.json())
    .then((data) => {
        characters(data)
        totalPages = data.info.pages;
    })
}

const characters = (data) => {
    container.innerHTML = "";
    

    data.results.forEach(character => {
    container.innerHTML +=

`<div class="card">
    <h2>${character.name}</h2>
    <img src="${character.image}" alt=""> 
    <p>${character.status}</p>
    <p>${character.location.name}</p>
    <p>${character.species}</p>
    <p>${character.type}</p>
    <p>${character.gender}</p>
    <p>${character.origin.name}</p>     
    
</div>`


});
};


// Funcion para la paginacion

getCharacters(currentPage);

const nextBtn = document.getElementById("nextButton");
const prevBtn = document.getElementById("prevButton");
  

nextBtn.addEventListener("click", () => {
    console.log(currentPage);
    if (currentPage <= 1){
        currentPage++;
    } else if (currentPage >1 && currentPage < totalPages){
        prevBtn.removeAttribute("disabled", false)
        currentPage++;
    } 
    else {
        nextBtn.setAttribute("disabled", true)
    }


  getCharacters(currentPage);

});

prevBtn.addEventListener("click", () => {
    console.log(currentPage);
    if (currentPage <= 1){
        prevBtn.setAttribute("disabled", true)
    } else if (currentPage >1 && currentPage < totalPages){
        currentPage--;
        nextBtn.removeAttribute("disabled", false)
    } 
    else{
        nextBtn.setAttribute("disabled", true)
        currentPage--;
    }


  getCharacters(currentPage);

});

const filterCharacters= (filterParam, valueParam)=>{
    fetch(`https://rickandmortyapi.com/api/character/?${filterParam}=${valueParam}`).then(res => res.json()).then(data=>characters(data))


}

 
  femaleBtn.addEventListener("click", () => {
    console.log("click")
    filterCharacters("gender", "female")})


    todosBtn.addEventListener("click" , () => {
        console.log("click")
        getCharacters(currentPage)})


        genderlessBtn.addEventListener("click", () => {
            console.log("click")
            filterCharacters("gender", "genderless")})

            unknownBtn.addEventListener("click", () => {
                console.log("click")
                filterCharacters("gender", "unknown")})
            

    
   

    






































