console.log("Dream Lab JS is running");

const dreamSession =
    document.querySelector(".dream-session");

const shareScene =
    document.querySelector(
        ".dream-session__scene--share"
    );

const thinkScene =
    document.querySelector(
        ".dream-session__scene--think"
    );

const labScene =
    document.querySelector(
        ".dream-session__scene--lab"
    );

const thoughts =
    document.querySelectorAll(
        ".dream-thought"
    );


function clamp(value, min = 0, max = 1) {
    return Math.min(
        Math.max(value, min),
        max
    );
}


function range(progress, start, end) {
    return clamp(
        (progress - start) /
        (end - start)
    );
}


function updateDreamSession() {

    if (
        !dreamSession ||
        !shareScene ||
        !thinkScene ||
        !labScene
    ) {
        return;
    }


    /* =====================================
       CALCULATE SCROLL PROGRESS
    ===================================== */

    const sectionTop =
        dreamSession.offsetTop;

    const sectionHeight =
        dreamSession.offsetHeight;

    const scrollDistance =
        sectionHeight -
        window.innerHeight;

    const distanceIntoSection =
        window.scrollY -
        sectionTop;

    const progress =
        clamp(
            distanceIntoSection /
            scrollDistance
        );


    /* =====================================
       SCENE 1
       Share → exits left
    ===================================== */

    const shareExit =
        range(
            progress,
            0.05,
            0.25
        );

    shareScene.style.opacity =
        1 - shareExit;

    shareScene.style.transform =
        `translateX(${
            -20 * shareExit
        }%)`;


    /* =====================================
       SCENE 2
       Think → enters from right
    ===================================== */

    const thinkEnter =
        range(
            progress,
            0.15,
            0.30
        );

    const thinkExit =
        range(
            progress,
            0.62,
            0.76
        );

    const thinkVisibility =
        Math.min(
            thinkEnter,
            1 - thinkExit
        );

    thinkScene.style.opacity =
        thinkVisibility;

    thinkScene.style.transform =
        `translateX(${
            18 * (1 - thinkEnter) -
            20 * thinkExit
        }%)`;


    /* =====================================
       THOUGHT BUBBLES
    ===================================== */

    thoughts.forEach(
        (thought, index) => {

            const start =
                0.31 +
                index * 0.07;

            const end =
                start + 0.07;

            const appear =
                range(
                    progress,
                    start,
                    end
                );

            const disappear =
                range(
                    progress,
                    0.58,
                    0.66
                );

            const visibility =
                Math.min(
                    appear,
                    1 - disappear
                );

            thought.style.opacity =
                visibility;

            thought.style.transform =
                `
                    translateY(${
                        25 *
                        (1 - appear)
                    }px)

                    scale(${
                        0.8 +
                        appear * 0.2
                    })
                `;
        }
    );


    /* =====================================
       SCENE 3
       Lab → enters from right
    ===================================== */

    const labEnter =
        range(
            progress,
            0.66,
            0.82
        );

    labScene.style.opacity =
        labEnter;

    labScene.style.transform =
        `translateX(${
            18 *
            (1 - labEnter)
        }%)`;
}


window.addEventListener(
    "scroll",
    updateDreamSession,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateDreamSession
);

updateDreamSession();