const dreamSession =
    document.querySelector(".dream-session");

const dreamVideo =
    document.querySelector(".dream-session__video");

const thoughts =
    document.querySelectorAll(
        ".dream-thought-text, .dream-thought-spark"
    );

let dreamSessionHasPlayed = false;


function showThought(index) {
    thoughts[index]?.classList.add("is-visible");
}


function hideThoughts() {
    thoughts.forEach((thought) => {
        thought.classList.remove("is-visible");
    });
}


function playDreamSession() {

    if (
        dreamSessionHasPlayed ||
        !dreamVideo
    ) {
        return;
    }

    dreamSessionHasPlayed = true;

    dreamVideo.currentTime = 0;

    dreamVideo.play()
        .catch((error) => {
            console.error(
                "Dream Session video failed to play:",
                error
            );
        });
}

const dreamMagic =
    document.querySelector(".dream-magic");

dreamVideo?.addEventListener(
    "timeupdate",
    () => {
        const time = dreamVideo.currentTime;

        thoughts.forEach((thought) => {
            thought.classList.remove("is-visible");
        });

        if (time >= 4.0 && time < 6.2) {

            if (time >= 4.0) {
                thoughts[0]?.classList.add(
                    "is-visible"
                );
            }

            if (time >= 4.9) {
                thoughts[1]?.classList.add(
                    "is-visible"
                );
            }
        }

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