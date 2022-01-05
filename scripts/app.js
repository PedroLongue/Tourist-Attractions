document.addEventListener("DOMContentLoaded", () => {
    const atractionList = [];

    const form = document.querySelector(".tourist-attraction-form");
    const imageInput = document.querySelector(".tourist-attraction-form-input-image");
    const titleInput = document.querySelector(".tourist-attraction-form-input-title");
    const descriptionInput = document.querySelector(".tourist-attraction-form-input-description");
    const atractionItems = document.querySelector(".atraction-items");

    form.addEventListener("submit", addTouristAtraction);

    function addTouristAtraction(e) {
        e.preventDefault();

        const atractionImageItem = e.target["atraction-image"].value;
        const atractionTitleItem = e.target["atraction-title"].value;
        const atractionDescriptionItem = e.target["atraction-description"].value;

        if(atractionImageItem !== "" && atractionTitleItem !== "" && atractionDescriptionItem !== "") {
            const item = {
                image: atractionImageItem,
                title: atractionTitleItem,
                description: atractionDescriptionItem,
            };
            atractionList.push(item);
    
            renderTouristAtraction();
            resetInputs();
        } else {
            alert("Por favor, preencha todos os campos!")
        }
    }
    
    function renderTouristAtraction() {
        let itemsStructure = "";

        atractionList.forEach(function (item) {
          itemsStructure += `
                <div class="atraction-items-card">
                    <div class="atraction-items-card-image">
                        
                        <img src="${item.image}" class="atraction-items-card-image-style" alt="${item.title}" />
                    </div>

                    <div class="atraction-items-card-text">
                        <h2 class="atraction-items-card-text-title">${item.title}</h2>
                        <p class="atraction-items-card-text-description">${item.description}</p>
                    </div>
                </div>
            `;
        });

        atractionItems.innerHTML = itemsStructure;
    }

    function resetInputs() {
        imageInput.value = "";
        titleInput.value = "";
        descriptionInput.value = "";
    }
});