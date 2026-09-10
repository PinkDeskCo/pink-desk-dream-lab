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

    /* ==================================================
       ELEMENTS
    ================================================== */

    const projectButtons = [
        ...document.querySelectorAll(
            ".lab-projects__card"
        )
    ];

    const story =
        document.querySelector(
            ".lab-project__story"
        );

    const projectNumber =
        document.querySelector(
            ".lab-project__number"
        );

    const projectTitle =
        document.querySelector(
            ".lab-project__title"
        );

    const projectDescription =
        document.querySelector(
            ".lab-project__description"
        );

    const projectScribble =
        document.querySelector(
            ".lab-project__scribble"
        );

    const notesButton =
        document.querySelector(
            ".lab-project__notes-button"
        );

    const projectBoard =
        document.querySelector(
            "#lab-feature-board"
        );

    const labNotesOverlay =
        document.querySelector(
            "#lab-notes-overlay"
        );

    const labNotesImage =
        document.querySelector(
            "#lab-notes-overlay-image"
        );

    const labNotesCloseButtons = [
        ...document.querySelectorAll(
            "[data-lab-notes-close]"
        )
    ];


    if (
        !projectButtons.length ||
        !story ||
        !projectBoard
    ) {
        return;
    }


    /* ==================================================
       PROJECT DATA
    ================================================== */

    const projects = {

        bwamplerfit: {

            number:
                "EXPERIMENT 001 / 005",

            title:
                "BWamplerFit<br>Challenge<br>Experience",

            description:
                "One interactive heat map became paid 30-day challenges, a built-in community, saved progress across devices, and an owner dashboard for managing multiple challenges.",

            scribble:
                "from one idea<br>to a working ecosystem",

            board:
                "assets/images/the-lab/boards/bwampler-board.png",

            boardAlt:
                "BWamplerFit Challenge Experience project board",

            labNotes:
                "assets/images/the-lab/bwamplerfit-lab-notes.png",

            labNotesAlt:
                "BWamplerFit Challenge Experience Lab Notes"
        },


        nails: {

            number:
                "EXPERIMENT 002 / 005",

            title:
                "Custom Nail<br>Builder",

            description:
                "A custom shopping experience that lets customers build their press-on nail set by choosing shape, size, length, color, finish, accents, and nail art.",

            scribble:
                "from custom orders<br>to a guided builder",

            board:
                "assets/images/the-lab/boards/nail-board.png",

            boardAlt:
                "Custom Nail Builder project board",

            labNotes:
                "assets/images/the-lab/nail-lab-notes.png",

            labNotesAlt:
                "Custom Nail Builder Lab Notes"
        },


        plumbing: {

            number:
                "EXPERIMENT 003 / 005",

            title:
                "Plumbing<br>Quote Builder",

            description:
                "A quoting system designed to turn project details and blueprints into faster, clearer estimates with package options and a streamlined path from quote to approval.",

            scribble:
                "from slow quoting<br>to faster decisions",

            board:
                "assets/images/the-lab/boards/quote-board.png",

            boardAlt:
                "Plumbing Quote Builder project board",

            labNotes:
                "assets/images/the-lab/plumbing-lab-notes.png",

            labNotesAlt:
                "Plumbing Quote Builder Lab Notes"
        },


        "mr-row": {

            number:
                "EXPERIMENT 004 / 005",

            title:
                "Mr Row<br>Homeschool<br>Program",

            description:
                "A creative homeschool idea became an international learning experience connecting lessons, travel, culture, storytelling, and hands-on discovery.",

            scribble:
                "from one spark<br>to a worldwide adventure",

            board:
                "assets/images/the-lab/boards/mr-row-board.png",

            boardAlt:
                "Mr Row Homeschool Program project board",

            labNotes:
                "assets/images/the-lab/mr-row-lab-notes.png",

            labNotesAlt:
                "Mr Row Homeschool Program Lab Notes"
        },


        pddl: {

            number:
                "EXPERIMENT 005 / 005",

            title:
                "PDDL<br>Communication<br>Center",

            description:
                "A scattered client workflow became one organized place for intakes, case files, diagnostic progress, project requests, notes, and active work.",

            scribble:
                "from scattered pieces<br>to one clear system",

            board:
                "assets/images/the-lab/boards/pddl-board.png",

            boardAlt:
                "Pink Desk Diagnostic Lab Communication Center project board",

            labNotes:
                "assets/images/the-lab/pddl-lab-notes.png",

            labNotesAlt:
                "PDDL Communication Center Lab Notes"
        }

    };


    /* ==================================================
       CURRENT PROJECT
    ================================================== */

    let activeProject =
        "bwamplerfit";


    /* ==================================================
       SHOW PROJECT
    ================================================== */

    function showProject(
        projectKey
    ) {

        const project =
            projects[
                projectKey
            ];


        if (!project) {
            return;
        }


        activeProject =
            projectKey;


        story.dataset.featureCard =
            projectKey;


        if (projectNumber) {
            projectNumber.textContent =
                project.number;
        }


        if (projectTitle) {
            projectTitle.innerHTML =
                project.title;
        }


        if (projectDescription) {
            projectDescription.textContent =
                project.description;
        }


        if (projectScribble) {
            projectScribble.innerHTML =
                project.scribble;
        }


        projectBoard.src =
            project.board;

        projectBoard.alt =
            project.boardAlt;


        if (notesButton) {

            notesButton.setAttribute(
                "aria-label",
                `Open the ${project.labNotesAlt}`
            );

        }


        projectButtons.forEach(
            (button) => {

                const isActive =
                    button.dataset.projectTarget ===
                    projectKey;


                button.classList.toggle(
                    "is-active",
                    isActive
                );

            }
        );

    }


    /* ==================================================
       PROJECT POLAROID CLICKS
    ================================================== */

    projectButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const projectKey =
                        button.dataset.projectTarget;


                    if (!projectKey) {
                        return;
                    }


                    showProject(
                        projectKey
                    );

                }
            );

        }
    );


    /* ==================================================
       OPEN LAB NOTES
    ================================================== */

    function openLabNotes() {

        if (
            !labNotesOverlay ||
            !labNotesImage
        ) {
            return;
        }


        const project =
            projects[
                activeProject
            ];


        if (!project) {
            return;
        }


        labNotesImage.src =
            project.labNotes;

        labNotesImage.alt =
            project.labNotesAlt;


        labNotesOverlay.classList.add(
            "is-open"
        );


        labNotesOverlay.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "lab-notes-is-open"
        );

    }


    /* ==================================================
       CLOSE LAB NOTES
    ================================================== */

    function closeLabNotes() {

        if (!labNotesOverlay) {
            return;
        }


        labNotesOverlay.classList.remove(
            "is-open"
        );


        labNotesOverlay.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "lab-notes-is-open"
        );

    }


    /* ==================================================
       LAB NOTES BUTTON
    ================================================== */

    notesButton?.addEventListener(
        "click",
        openLabNotes
    );


    /* ==================================================
       CLOSE BUTTON / BACKDROP
    ================================================== */

    labNotesCloseButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                closeLabNotes
            );

        }
    );


    /* ==================================================
       ESCAPE KEY
    ================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Escape"
            ) {
                closeLabNotes();
            }

        }
    );


    /* ==================================================
       INITIAL STATE
    ================================================== */

    showProject(
        "bwamplerfit"
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