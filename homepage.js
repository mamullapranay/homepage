const body = document.querySelector("body");
        const navbar = document.querySelector(".navbar");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");
        menuBtn.onclick = () => {
            navbar.classList.add("show");
            menuBtn.classList.add("hide");
            body.classList.add("disabled");
        }
        cancelBtn.onclick = () => {
            body.classList.remove("disabled");
            navbar.classList.remove("show");
            menuBtn.classList.remove("hide");
        }
        window.onscroll = () => {
            this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        }

        document.addEventListener("DOMContentLoaded", function() {
            const bannerHeading = document.querySelector(".banner-heading");
            const bannerCaption = document.querySelector(".banner-caption");
            setTimeout(() => {
                bannerHeading.classList.add("show");
                bannerCaption.classList.add("show");
            }, 50);
        });

        document.addEventListener("DOMContentLoaded", function() {
            const customButtons = document.querySelectorAll(".custom-button");
            setTimeout(() => {
                customButtons.forEach(button => button.classList.add("show"));
            }, 50);
        });


        document.addEventListener("DOMContentLoaded", function() {
            const imageElement = document.querySelector(".image");
            setTimeout(() => {
                imageElement.classList.add("show");
            }, 700);
        });