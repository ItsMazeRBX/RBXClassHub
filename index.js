const searchInput = document.getElementById("search");

const categoryFilter = document.getElementById("categoryFilter");

const difficultyFilter = document.getElementById("difficultyFilter");


const cards = document.querySelectorAll(".class-card");



function filterCards(){


    const searchValue = searchInput.value.toLowerCase().trim();

    const categoryValue = categoryFilter.value.toLowerCase();

    const difficultyValue = difficultyFilter.value.toLowerCase();



    cards.forEach(card => {


        const name = card.querySelector(".name")
        ?.textContent.toLowerCase() || "";


        const description = card.querySelector(".description")
        ?.textContent.toLowerCase() || "";


        const category = card.querySelector(".category")
        ?.textContent.toLowerCase() || "";


        const difficulty = card.querySelector(".difficulty")
        ?.textContent.toLowerCase() || "";


        const number = card.querySelector(".number")
        ?.textContent.toLowerCase() || "";



        // Pesquisa

        const content = 
            name + " " +
            description + " " +
            category + " " +
            difficulty + " " +
            number;



        const matchesSearch =
        content.includes(searchValue);



        // Categoria

        const matchesCategory =
        categoryValue === "all" ||
        category.includes(categoryValue);



        // Dificuldade

        const matchesDifficulty =
        difficultyValue === "all" ||
        difficulty.includes(difficultyValue);




        if(
            matchesSearch &&
            matchesCategory &&
            matchesDifficulty
        ){

            card.parentElement.style.display = "";

        }
        else{

            card.parentElement.style.display = "none";

        }


    });


}




searchInput.addEventListener(
    "input",
    filterCards
);



categoryFilter.addEventListener(
    "change",
    filterCards
);



difficultyFilter.addEventListener(
    "change",
    filterCards
);