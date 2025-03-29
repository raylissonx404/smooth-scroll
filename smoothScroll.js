[

    { trigger: "btn1", target: "section1", offset: 0, speed: 1000 },
    { trigger: "btn2", target: "section2", offset: 0, speed: 1000 },
    { trigger: "btn3", target: "section3", offset: 0, speed: 1000 }


].forEach(({ trigger, target, offset, speed }) => {
    document.getElementById(trigger)?.addEventListener("click", () => {
        const start = window.scrollY, end = document.getElementById(target).offsetTop - offset, t0 = performance.now();
        requestAnimationFrame(function step(t) {
            const p = Math.min((t - t0) / speed, 1), e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
            window.scrollTo(0, start + (end - start) * e);
            if (p < 1) requestAnimationFrame(step);
        });
    });
});
