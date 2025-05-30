<script>
    let index = 0;
    const images = document.querySelectorAll(".carousel-inner img");
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
            img.setAttribute("aria-hidden", i === index ? "false" : "true");
        });
    }

    document.querySelector(".prev").addEventListener("click", function() {
        index = index > 0 ? index - 1 : totalImages - 1;
        showImage(index);
    });

    document.querySelector(".next").addEventListener("click", function() {
        index = index < totalImages - 1 ? index + 1 : 0;
        showImage(index);
    });

    showImage(index); // Exibir a imagem inicial corretamente
</script>

