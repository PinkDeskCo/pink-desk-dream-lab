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

    if (!dreamSession) {
        return;
    }

    const rect =
        dreamSession.getBoundingClientRect();

    const scrollableDistance =
        dreamSession.offsetHeight -
        window.innerHeight;

    const progress =
        clamp(
            -rect.top /
            scrollableDistance
        );


    /* -----------------------------
       SCENE 1 → SCENE 2
    ----------------------------- */

    const shareExit =
        range(progress, 0.08, 0.27);

    shareScene.style.opacity =
        1 - shareExit;

    shareScene.style.transform =
        `translateX(${
            -18 * shareExit
        }%)`;


    const thinkEnter =
        range(progress, 0.17, 0.32);

    const thinkExit =
        range(progress, 0.60, 0.75);

    thinkScene.style.opacity =
        Math.min(
            thinkEnter,
            1 - thinkExit
        );

    thinkScene.style.transform =
        `translateX(${
            14 * (1 - thinkEnter) -
            18 * thinkExit
        }%)`;


    /* -----------------------------
       THOUGHTS APPEAR
    ----------------------------- */

    thoughts.forEach(
        (thought, index) => {

            const start =
                0.31 + index * 0.07;

            const end =
                start + 0.08;

            const appearance =
                range(
                    progress,
                    start,
                    end
                );

            const disappearance =
                range(
                    progress,
                    0.58,
                    0.67
                );

            const visibility =
                Math.min(
                    appearance,
                    1 - disappearance
                );

            thought.style.opacity =
                visibility;

            thought.style.transform =
                `
                translateY(${
                    25 *
                    (1 - appearance)
                }px)

                scale(${
                    0.8 +
                    appearance * 0.2
                })
                `;
        }
    );


    /* -----------------------------
       SCENE 3 ENTERS
    ----------------------------- */

    const labEnter =
        range(progress, 0.65, 0.82);

    labScene.style.opacity =
        labEnter;

    labScene.style.transform =
        `translateX(${
            14 * (1 - labEnter)
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