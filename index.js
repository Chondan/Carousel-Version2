(() => {
    function App() {
        const images = document.getElementsByTagName("img");
        let imageIndex = 0;
        const previousBtn = document.getElementById("previous");
        const nextBtn = document.getElementById("next");
        nextBtn.onclick = function() {
            imageIndex++;
            if (imageIndex == images.length) {
                imageIndex = 0;
            }
            images[imageIndex].scrollIntoView({ behavior: "smooth" });
        }
        previousBtn.onclick = function() {
            imageIndex--;
            if (imageIndex < 0) {
                imageIndex = 3;
            }
            images[imageIndex].scrollIntoView({ behavior: "smooth" });
        }
    }
    App();
})();