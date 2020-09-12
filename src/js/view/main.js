import "../component/list.js";
import "../component/search.js"
import DataSource from "../data/data-source.js";

// back to top
const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

const main = () => {
    const searchElement = document.querySelector("search-players");
    const playerListElement = document.querySelector("list-players");

    const onButtonSearchClicked = () => {
        DataSource.searchPlayer(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = (results) => {
        playerListElement.pemains = results;
    };

    const fallbackResult = message => {
        playerListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;