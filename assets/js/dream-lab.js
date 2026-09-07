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
