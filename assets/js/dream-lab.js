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


let dreamSessionHasPlayed = false;


/* =========================================
   INITIAL STATE
========================================= */

function resetDreamSession() {

    shareScene.style.transition = "none";
    thinkScene.style.transition = "none";
    labScene.style.transition = "none";

    shareScene.style.opacity = "1";
    shareScene.style.transform =
        "translateX(0)";

    thinkScene.style.opacity = "0";
    thinkScene.style.transform =
        "translateX(12%)";

    labScene.style.opacity = "0";
    labScene.style.transform =
        "translateX(12%)";

    thoughts.forEach((thought) => {
        thought.style.opacity = "0";

        thought.style.transform =
            "translateY(20px) scale(.85)";
    });
}


resetDreamSession();


/* =========================================
   PLAY DREAM SESSION
========================================= */

function playDreamSession() {

    if (dreamSessionHasPlayed) {
        return;
    }

    dreamSessionHasPlayed = true;


    /* -------------------------------------
       SCENE 1
       Conversation drifts away
    ------------------------------------- */

    setTimeout(() => {

        shareScene.style.transition =
            "opacity 1.4s ease, transform 1.4s ease";

        shareScene.style.opacity = "0";

        shareScene.style.transform =
            "translateX(-10%)";


        thinkScene.style.transition =
            "opacity 1.4s ease, transform 1.4s ease";

        thinkScene.style.opacity = "1";

        thinkScene.style.transform =
            "translateX(0)";

    }, 1800);


    /* -------------------------------------
       THOUGHT 1
    ------------------------------------- */

    setTimeout(() => {
        showThought(thoughts[0]);
    }, 3400);


    /* -------------------------------------
       THOUGHT 2
    ------------------------------------- */

    setTimeout(() => {
        showThought(thoughts[1]);
    }, 4300);


    /* -------------------------------------
       THOUGHT 3
    ------------------------------------- */

    setTimeout(() => {
        showThought(thoughts[2]);
    }, 5200);


    /* -------------------------------------
       SCENE 2 EXITS
    ------------------------------------- */

    setTimeout(() => {

        thoughts.forEach((thought) => {

            thought.style.transition =
                "opacity .6s ease, transform .6s ease";

            thought.style.opacity = "0";

            thought.style.transform =
                "translateY(-15px) scale(.9)";
        });


        thinkScene.style.transition =
            "opacity 1.3s ease, transform 1.3s ease";

        thinkScene.style.opacity = "0";

        thinkScene.style.transform =
            "translateX(-10%)";


        labScene.style.transition =
            "opacity 1.3s ease, transform 1.3s ease";

        labScene.style.opacity = "1";

        labScene.style.transform =
            "translateX(0)";

    }, 7000);
}


/* =========================================
   THOUGHT BUBBLE
========================================= */

function showThought(thought) {

    if (!thought) {
        return;
    }

    thought.style.transition =
        "opacity .7s ease, transform .7s ease";

    thought.style.opacity = "1";

    thought.style.transform =
        "translateY(0) scale(1)";
}


/* =========================================
   START WHEN SECTION ENTERS VIEW
========================================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    playDreamSession();
                }

            });

        },
        {
            threshold: 0.35
        }
    );


if (dreamSession) {
    observer.observe(dreamSession);
}