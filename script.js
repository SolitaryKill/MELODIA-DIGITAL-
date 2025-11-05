

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.value = notes[note];
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  });
});
