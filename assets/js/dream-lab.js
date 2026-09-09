const dreamSession = document.querySelector(".dream-session");
const thoughts = document.querySelectorAll( ".dream-thought-text, .dream-thought-spark");

let dreamSessionHasPlayed = false;

function showThought(index) {
    thoughts[index]?.classList.add("is-visible");
}
function hideThoughts() {
    thoughts.forEach((thought) => {
        thought.classList.remove("is-visible");
    });
}

/* =========================================
   DREAM SESSION VIDEO
========================================= */

const dreamVideo = document.querySelector("#dream-session-video");
const dreamPlayButton = document.querySelector(".dream-film__play");
const dreamThoughts = document.querySelectorAll(".dream-thought-text");
const dreamThoughtSpark = document.querySelector(".dream-thought-spark");
const dreamMagic = document.querySelector(".dream-magic");


/* =========================================
   HELPERS
========================================= */
function hideDreamThoughts() {
    dreamThoughts.forEach((thought) => {
        thought.classList.remove(
            "is-visible"
        );
    });

    dreamThoughtSpark?.classList.remove(
        "is-visible"
    );
}
function resetDreamEffects() {
    hideDreamThoughts();

    dreamMagic?.classList.remove(
        "is-active"
    );
}
/* =========================================
   PLAY BUTTON
========================================= */
if (
    dreamVideo &&
    dreamPlayButton
) {

    dreamPlayButton.addEventListener(
        "click",
        async () => {

            /*
             * If the video already finished,
             * start again from the beginning.
             */

            if (dreamVideo.ended) {
                dreamVideo.currentTime = 0;

                resetDreamEffects();
            }


            try {
                await dreamVideo.play();
            } catch (error) {
                console.error(
                    "Dream Session video could not play:",
                    error
                );
            }

        }
    );


    /* Hide button once video actually starts */

    dreamVideo.addEventListener(
        "playing",
        () => {
            dreamPlayButton.classList.add(
                "is-hidden"
            );
        }
    );


    /* Bring button back if video is paused */

    dreamVideo.addEventListener(
        "pause",
        () => {

            if (!dreamVideo.ended) {
                dreamPlayButton.classList.remove(
                    "is-hidden"
                );
            }

        }
    );


    /* Bring button back when video finishes */

    dreamVideo.addEventListener(
        "ended",
        () => {
            dreamPlayButton.classList.remove(
                "is-hidden"
            );

            resetDreamEffects();
        }
    );


    /*
     * Clicking the video itself pauses it.
     * The Play button then comes back.
     */

    dreamVideo.addEventListener(
        "click",
        () => {

            if (!dreamVideo.paused) {
                dreamVideo.pause();
            }

        }
    );

}

/* =========================================
   TIMED THINKING + MAGIC EFFECTS
========================================= */
dreamVideo?.addEventListener(
    "timeupdate",
    () => {

        const time =
            dreamVideo.currentTime;


        /* -----------------------------
           THINKING MOMENT
        ----------------------------- */

        hideDreamThoughts();


        if (
            time >= 4 &&
            time < 6.2
        ) {

            if (time >= 4) {
                dreamThoughts[0]
                    ?.classList.add(
                        "is-visible"
                    );
            }


            if (time >= 4.9) {
                dreamThoughts[1]
                    ?.classList.add(
                        "is-visible"
                    );
            }

        }


        /* -----------------------------
           DREAM LAB MAGIC
        ----------------------------- */

        if (
            time >= 10.2 &&
            time < 11.8
        ) {
            dreamMagic?.classList.add(
                "is-active"
            );
        } else {
            dreamMagic?.classList.remove(
                "is-active"
            );
        }

    }
);

/* =========================================
   DREAM SESSION INVITATION
========================================= */

const dreamInvitation = document.querySelector( ".dream-invitation");
const dreamInvitationClosed = document.querySelector(".dream-invitation__closed");
const dreamStoryboard = document.querySelector( ".dream-storyboard");


if (
    dreamInvitation &&
    dreamInvitationClosed &&
    dreamStoryboard
) {
    dreamInvitationClosed.addEventListener(
        "click",
        () => {

            dreamInvitation.classList.add(
                "is-opening"
            );

            window.setTimeout(
                () => {

                    dreamInvitation.classList.add(
                        "is-open"
                    );

                    dreamStoryboard.setAttribute(
                        "aria-hidden",
                        "false"
                    );

                },
                350
            );

        }
    );
}

/* ==================================================
   FROM THE LAB
================================================== */

const labProjects = {
    bwamplerfit: {
        number: "EXPERIMENT 001 / 005",
        title: "BWamplerFit<br>Challenge Experience",
        description:
            "One interactive heat map became paid 30-day challenges, a built-in community, saved progress across devices, and an owner dashboard for managing multiple challenges.",
        scribble:
            "from one idea<br>to a working ecosystem",
        image:
            "assets/images/dream-session/bwamplerfit-ecosystem.png",
        alt:
            "BWamplerFit challenge experience and management dashboard shown across multiple devices"
    },

    nails: {
        number: "EXPERIMENT 002 / 005",
        title: "Custom Nail<br>Builder",
        description:
            "A custom press-on nail business becomes an interactive buying experience where customers can build their own set by choosing the details that make it theirs.",
        scribble:
            "from endless options<br>to an easy yes",
        image:
            "assets/images/from-the-lab/thumb-nails.png",
        alt:
            "Custom press-on nail sets displayed on a creative worktable"
    },

    plumbing: {
        number: "EXPERIMENT 003 / 005",
        title: "Plumbing<br>Quote Builder",
        description:
            "A time-consuming quoting process becomes a guided system for turning project details into faster, more consistent estimates.",
        scribble:
            "less time quoting<br>more time doing",
        image:
            "assets/images/from-the-lab/thumb-plumbing.png",
        alt:
            "Plumbing blueprint, measurements and estimating tools"
    },

    "mr-row": {
        number: "EXPERIMENT 004 / 005",
        title: "Mr Row<br>Homeschool Program",
        description:
            "A creative homeschool idea became an experience that connects lessons, storytelling and hands-on discovery into something children can follow and remember.",
        scribble:
            "from an idea<br>to an educational adventure",
        image:
            "assets/images/from-the-lab/thumb-mr-row.png",
        alt:
            "Mr Row homeschool program"
    },

    pddl: {
        number: "EXPERIMENT 005 / 005",
        title: "PDDL<br>Communication Center",
        description:
            "A scattered client communication process becomes one organized place for requests, updates and the information needed to keep work moving.",
        scribble:
            "from scattered pieces<br>to one clear system",
        image:
            "assets/images/from-the-lab/thumb-pddl.png",
        alt:
            "Pink Desk Diagnostic Lab communication center"
    }
};

const labProjectButtons = [
    ...document.querySelectorAll(
        ".from-the-lab__project"
    )
];

const labFeatureNumber = document.querySelector("#lab-feature-number");
const labFeatureTitle = document.querySelector("#lab-feature-title");
const labFeatureDescription = document.querySelector("#lab-feature-description");
const labFeatureScribble = document.querySelector("#lab-feature-scribble");
const labFeatureImage = document.querySelector("#lab-feature-image");
const labPrev = document.querySelector(".from-the-lab__arrow--prev");
const labNext = document.querySelector(".from-the-lab__arrow--next");

let activeLabIndex = 0;

// function showLabProject(index) {
//     const button = labProjectButtons[index];

//     if (!button) {
//         return;
//     }

//     const projectKey = button.dataset.project;
//     const project = labProjects[projectKey];

//     if (!project) {
//         return;
//     }

//     activeLabIndex = index;

//     labFeatureNumber.textContent =
//         project.number;

//     labFeatureTitle.innerHTML =
//         project.title;

//     labFeatureDescription.textContent =
//         project.description;

//     labFeatureScribble.innerHTML =
//         project.scribble;

//     labFeatureImage.src =
//         project.image;

//     labFeatureImage.alt =
//         project.alt;

//     labProjectButtons.forEach(
//         (projectButton, buttonIndex) => {
//             projectButton.classList.toggle(
//                 "is-active",
//                 buttonIndex === index
//             );
//         }
//     );
// }

// labProjectButtons.forEach(
//     (button, index) => {
//         button.addEventListener(
//             "click",
//             () => {
//                 showLabProject(index);
//             }
//         );
//     }
// );

// labNext?.addEventListener(
//     "click",
//     () => {
//         const nextIndex =
//             (activeLabIndex + 1) %
//             labProjectButtons.length;

//         showLabProject(nextIndex);
//     }
// );

// labPrev?.addEventListener(
//     "click",
//     () => {
//         const previousIndex =
//             (
//                 activeLabIndex -
//                 1 +
//                 labProjectButtons.length
//             ) %
//             labProjectButtons.length;

//         showLabProject(previousIndex);
//     }
// );

// function showLabProject(index) {
//     const button = labProjectButtons[index];

//     if (!button) {
//         return;
//     }

//     const projectKey = button.dataset.project;
//     const project = labProjects[projectKey];

//     if (!project) {
//         return;
//     }

//     const labFeature =
//         document.querySelector(".lab-feature");

//     activeLabIndex = index;

//     labFeature?.classList.add("is-changing");

//     window.setTimeout(() => {
//         labFeatureNumber.textContent =
//             project.number;

//         labFeatureTitle.innerHTML =
//             project.title;

//         labFeatureDescription.textContent =
//             project.description;

//         labFeatureScribble.innerHTML =
//             project.scribble;

//         labFeatureImage.src =
//             project.image;

//         labFeatureImage.alt =
//             project.alt;

//         labProjectButtons.forEach(
//             (projectButton, buttonIndex) => {
//                 projectButton.classList.toggle(
//                     "is-active",
//                     buttonIndex === index
//                 );
//             }
//         );

//         requestAnimationFrame(() => {
//             labFeature?.classList.remove(
//                 "is-changing"
//             );
//         });
//     }, 300);
// }

/* ==================================================
   FROM THE LAB
================================================== */

function initFromTheLab() {

    const projectButtons = [
        ...document.querySelectorAll(
            ".from-the-lab__project"
        )
    ];

    const featureCards = [
        ...document.querySelectorAll(
            ".lab-feature__copy-card"
        )
    ];

    const featureImage =
        document.querySelector(
            "#lab-feature-image"
        );

    const prevButton =
        document.querySelector(
            ".from-the-lab__arrow--prev"
        );

    const nextButton =
        document.querySelector(
            ".from-the-lab__arrow--next"
        );


    /*
     * Stop if the From the Lab section
     * is not present on the page.
     */
    if (
        !projectButtons.length ||
        !featureCards.length
    ) {
        return;
    }


    /* ==================================================
       FEATURED PROJECT IMAGES
    ================================================== */

    const projectImages = {

        bwamplerfit: {
            src:
                "assets/images/dream-session/bwamplerfit-ecosystem.png",

            alt:
                "BWamplerFit challenge experience and management dashboard shown across multiple devices"
        },

        nails: {
            src:
                "assets/images/from-the-lab/thumb-nails.png",

            alt:
                "Custom Nail Builder concept"
        },

        plumbing: {
            src:
                "assets/images/from-the-lab/thumb-plumbing.png",

            alt:
                "Plumbing Quote Builder concept"
        },

        "mr-row": {
            src:
                "assets/images/from-the-lab/thumb-mr-row.png",

            alt:
                "Mr Row homeschool program"
        },

        pddl: {
            src:
                "assets/images/from-the-lab/thumb-pddl.png",

            alt:
                "Pink Desk Diagnostic Lab communication center"
        }

    };


    /* ==================================================
       CURRENT STATE
    ================================================== */

    let activeIndex = 0;

    /*
     * Oldest → newest.
     *
     * BWamplerFit begins on top when
     * the page first loads.
     */
    let cardHistory = [
        "bwamplerfit"
    ];


    /* ==================================================
       UPDATE CARD STACK
    ================================================== */

    function updateCardStack(
        projectKey
    ) {

        /*
         * Remove the selected project
         * from wherever it currently
         * exists in the stack.
         */
        cardHistory =
            cardHistory.filter(
                (key) =>
                    key !== projectKey
            );


        /*
         * Add it back as the newest,
         * top-most card.
         */
        cardHistory.push(
            projectKey
        );


        /*
         * Clear all stack states.
         */
        featureCards.forEach(
            (card) => {

                card.classList.remove(
                    "is-active",
                    "is-under-1",
                    "is-under-2"
                );

            }
        );


        /*
         * Only keep the newest three
         * cards visibly stacked.
         */
        const visibleCards =
            [
                ...cardHistory
            ]
            .reverse()
            .slice(
                0,
                3
            );


        visibleCards.forEach(
            (
                key,
                stackPosition
            ) => {

                const card =
                    featureCards.find(
                        (item) =>
                            item.dataset.featureCard ===
                            key
                    );


                if (!card) {
                    return;
                }


                if (
                    stackPosition === 0
                ) {
                    card.classList.add(
                        "is-active"
                    );
                }


                if (
                    stackPosition === 1
                ) {
                    card.classList.add(
                        "is-under-1"
                    );
                }


                if (
                    stackPosition === 2
                ) {
                    card.classList.add(
                        "is-under-2"
                    );
                }

            }
        );

    }


    /* ==================================================
       UPDATE POLAROIDS
    ================================================== */

    function updateActivePolaroid(
        index
    ) {

        projectButtons.forEach(
            (
                button,
                buttonIndex
            ) => {

                button.classList.toggle(
                    "is-active",
                    buttonIndex === index
                );

            }
        );

    }


    /* ==================================================
       UPDATE FEATURE IMAGE
    ================================================== */

    function updateFeatureImage(
        projectKey
    ) {

        if (!featureImage) {
            return;
        }


        const image =
            projectImages[
                projectKey
            ];


        if (!image) {
            return;
        }


        featureImage.src =
            image.src;

        featureImage.alt =
            image.alt;

    }


    /* ==================================================
       SHOW PROJECT
    ================================================== */

    function showProject(
        index
    ) {

        const button =
            projectButtons[index];


        if (!button) {
            return;
        }


        const projectKey =
            button.dataset.project;


        if (!projectKey) {
            return;
        }


        const matchingCard =
            featureCards.find(
                (card) =>
                    card.dataset.featureCard ===
                    projectKey
            );


        if (!matchingCard) {
            return;
        }


        activeIndex =
            index;


        updateCardStack(
            projectKey
        );


        updateActivePolaroid(
            index
        );


        updateFeatureImage(
            projectKey
        );

    }


    /* ==================================================
       POLAROID CLICKS
    ================================================== */

    projectButtons.forEach(
        (
            button,
            index
        ) => {

            button.addEventListener(
                "click",
                () => {

                    showProject(
                        index
                    );

                }
            );

        }
    );


    /* ==================================================
       NEXT PROJECT
    ================================================== */

    nextButton?.addEventListener(
        "click",
        () => {

            const nextIndex =
                (
                    activeIndex +
                    1
                ) %
                projectButtons.length;


            showProject(
                nextIndex
            );

        }
    );


    /* ==================================================
       PREVIOUS PROJECT
    ================================================== */

    prevButton?.addEventListener(
        "click",
        () => {

            const previousIndex =
                (
                    activeIndex -
                    1 +
                    projectButtons.length
                ) %
                projectButtons.length;


            showProject(
                previousIndex
            );

        }
    );


    /* ==================================================
       INITIAL STATE
    ================================================== */

    showProject(
        0
    );

}


/* ==================================================
   START FROM THE LAB
================================================== */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initFromTheLab
    );

} else {

    initFromTheLab();

}