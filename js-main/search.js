
document.addEventListener("DOMContentLoaded", () => {
    const userCardContainer = document.querySelector(".suggestion-card")
    const userCardTemplate = document.querySelector(".user-card-template")
    const searchInput = document.querySelector(".searchInput")
    if (!userCardTemplate) {
        console.error("Template not found");
        return;
    } 

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        userCardContainer.forEach(user => {
            const name = user.textContent.trim().toLowerCase();
            user.classList.toggle("hide", !name.includes(value));
        });
    });

























    
    //let users = []
    
    ///*event listener that reads user input*/
    //searchInput.addEventListener("input", (e) => {
    //    const value = e.target.value.toLowerCase()  //  turn input('value') to lower case
    //    users.forEach(user => {
    //        const isVisible = user.name.toLowerCase().includes(value) // checker if input('value') is included in the 'user.name'
    //        user.element.classList.toggle("hide", !isVisible)   // if !isVisible is true, add the hide class
    //    })
    //})

    // 
    ///*fetches the data*/
    ///*Note: change fetch location to database*/
    //fetch("")
    //.then(res => res.json())
    //.then(data => {     
    //    users = data.map(user => {  /*this assigns the corresponding data for each template*/
    //        const card = userCardTemplate.content.cloneNode(true).children[0]
    //        card.textContent = user.name
    //        userCardContainer.append(card)  // append 'card' inside 'container' 
    //        return{name: user.name, element: card}
    //    })
    //})
    //

})
    
    