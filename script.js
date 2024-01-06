window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //get the audio with key element

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //get key


    if (!audio) return;// hitting a key with no audio will not do 

    audio.currentTime = 0;  //starts from the beginning

    audio.play()

    key.classList.add('playing');//adds playing class list to the element

    setTimeout(() => {
        key.classList.remove('playing');

    }, 100);

}