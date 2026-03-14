document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".stack-section .et_pb_row");

    cards.forEach((card, i) => {

        if (i === cards.length - 1) return;

        let nextCard = cards[i + 1];

        gsap.timeline({
            scrollTrigger: {
                trigger: nextCard,
                start: "top center",
                end: "top 20%",
                scrub: true
            }
        })
            .to(card, {
                scale: 0.92,
                filter: "blur(3px)",

                ease: "none"
            });

    });

    // Image Animation
    gsap.utils.toArray(".service-card-image").forEach((img) => {

        gsap.fromTo(img,
            {
                y: 80,
                scale: 0.9,
                rotate: -6
            },
            {
                y: -80,
                scale: 1.05,
                rotate: 6,
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1.5
                }
            });

    });


});