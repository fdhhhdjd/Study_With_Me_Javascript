function removeTransition(e) {
    if (e.propertyName != 'transform') return; // skip se non è una 'transform'
    this.classList.remove('playing');
}
function playSound(e) {
    // Attenzione agli apici, quelli più esterni sono quelli sotto la tilde
    // nella tastiera americana!
    //
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    const key = document.querySelector(`.key[data-key="${e.which}"]`);
    if(!audio) return; // esce non premi il tasto giusto
    audio.currentTime = 0; // riavvia il file audio da capo. se premi ripetutamente un tasto corrispondente ad un audio con qualche secondo di silenzio alla fine l'effetto è che sembra che salti qualche pressione perchè non viene eseguito finchè non termina. così si evita questo.
    audio.play(); // esegue il file audio
    key.classList.add('playing');
}
const keys = document.querySelectorAll('.key');
// Keys è una lista di nodi, non è un array, non posso usare for/in
// for (var key in keys) {
//     key.classList.remove('playing');
// }
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
