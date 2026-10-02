/* =====================================================
   PORTFOLIO CONFIGURATION
===================================================== */

const emailAddress =
    "staybyplan340@gmail.com";


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navbar =
    document.getElementById("navbar");

const navLinks =
    document.querySelectorAll(".nav-link");


/* =====================================================
   CONTACT ELEMENTS
===================================================== */

const emailDisplay =
    document.getElementById("emailDisplay");

const copyEmailButton =
    document.getElementById("copyEmailButton");


/* =====================================================
   DISPLAY EMAIL
===================================================== */

if (emailDisplay) {

    emailDisplay.textContent =
        emailAddress;

}


/* =====================================================
   MOBILE MENU
===================================================== */

const closeMenu = () => {

    if (navbar) {
        navbar.classList.remove("active");
    }

    if (menuButton) {
        menuButton.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

};


if (menuButton && navbar) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                navbar.classList.toggle("active");

            menuButton.classList.toggle(
                "active",
                isOpen
            );

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}


/* =====================================================
   CLOSE MOBILE MENU AFTER NAVIGATION
===================================================== */

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {
            closeMenu();
        }
    );

});


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    (event) => {

        if (!navbar || !menuButton) {
            return;
        }

        const clickedInsideNavbar =
            navbar.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);

        if (
            navbar.classList.contains("active") &&
            !clickedInsideNavbar &&
            !clickedMenuButton
        ) {
            closeMenu();
        }

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    }
);


/* =====================================================
   COPY EMAIL
===================================================== */

if (copyEmailButton) {

    copyEmailButton.addEventListener(
        "click",
        async () => {

            try {

                await navigator.clipboard.writeText(
                    emailAddress
                );

                copyEmailButton.textContent =
                    "Copied ✓";

            } catch (error) {

                copyEmailButton.textContent =
                    "Copy failed";

            }

            setTimeout(() => {

                copyEmailButton.textContent =
                    "Copy";

            }, 1800);

        }
    );

}


/* =====================================================
   REVEAL ANIMATIONS
===================================================== */

const revealElements =
    document.querySelectorAll(
        "[data-reveal]"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "revealed"
            );

        }
    );

}


/* =====================================================
   ACTIVE NAVIGATION WHILE SCROLLING
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


if (
    "IntersectionObserver" in window &&
    sections.length > 0
) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const currentId =
                                entry.target.id;

                            navLinks.forEach(
                                (link) => {

                                    const linkTarget =
                                        link.getAttribute(
                                            "href"
                                        );

                                    link.classList.toggle(
                                        "active",
                                        linkTarget ===
                                        `#${currentId}`
                                    );

                                }
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );

    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

}
/* =====================================================
   SCROLL PROGRESS
===================================================== */

const scrollProgress =
    document.getElementById("scrollProgress");


if (scrollProgress) {

    const updateScrollProgress = () => {

        const scrollTop =
            window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

        scrollProgress.style.width =
            `${progress}%`;

    };


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();

}
/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    const updateBackToTop = () => {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    };


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    backToTop.addEventListener(
    "click",
    () => {

        const homeSection =
            document.getElementById("home");

        if (homeSection) {

            homeSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }
);


    updateBackToTop();

}
/* =====================================================
   HERO TYPING EFFECT
===================================================== */

const typingText =
    document.getElementById("typingText");

if (typingText) {

    const phrases = [
        "Aspiring Software Developer",
        "Computer Science Enthusiast",
        "Problem Solver",
        "Always Learning. Always Building."
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    const typeSpeed = 85;
    const deleteSpeed = 45;
    const pauseAfterTyping = 1600;

    const typeEffect = () => {

        const currentPhrase =
            phrases[phraseIndex];

        if (!isDeleting) {

            characterIndex++;

            typingText.textContent =
                currentPhrase.substring(
                    0,
                    characterIndex
                );

            if (
                characterIndex ===
                currentPhrase.length
            ) {

                isDeleting = true;

                setTimeout(
                    typeEffect,
                    pauseAfterTyping
                );

                return;
            }

        } else {

            characterIndex--;

            typingText.textContent =
                currentPhrase.substring(
                    0,
                    characterIndex
                );

            if (characterIndex === 0) {

                isDeleting = false;

                phraseIndex =
                    (phraseIndex + 1) %
                    phrases.length;

            }

        }

        setTimeout(
            typeEffect,
            isDeleting
                ? deleteSpeed
                : typeSpeed
        );

    };

    typeEffect();

}