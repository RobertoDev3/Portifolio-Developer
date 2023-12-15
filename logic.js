function getDogImages() {
    const images = document.querySelectorAll('.card-img');
    images.forEach(image => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                image.src = data.message;
            })
            .catch(error => console.error('Ocorreu um erro ao buscar a imagem:', error));
    });
}
getDogImages();