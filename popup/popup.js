const images = Array.from(document.querySelectorAll("img"));

images.forEach((img) => {
    img.addEventListner("click", ( ) => {
        chrome.storage.local.set({ image: img.src });
    });
});