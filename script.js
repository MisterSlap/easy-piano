const pianoRoll = document.getElementById('piano');
const pianoDrag = document.getElementById('piano_drag');
const keys = document.querySelectorAll('.key');

const sound = {
  c: new Audio(),
  cis: new Audio(),
  d: new Audio(),
  dis: new Audio(),
  e: new Audio(),
  f: new Audio(),
  fis: new Audio(),
  g: new Audio(),
  gis: new Audio(),
  a: new Audio(),
  ais: new Audio(),
  b: new Audio(),
  c2: new Audio(),
};
sound.c.src = 'notes/c1.mp3';
sound.cis.src = 'notes/cis.mp3';
sound.d.src = 'notes/d.mp3';
sound.dis.src = 'notes/dis.mp3';
sound.e.src = 'notes/e.mp3';
sound.f.src = 'notes/f.mp3';
sound.fis.src = 'notes/fis.mp3';
sound.g.src = 'notes/g.mp3';
sound.gis.src = 'notes/gis.mp3';
sound.a.src = 'notes/a.mp3';
sound.ais.src = 'notes/ais.mp3';
sound.b.src = 'notes/b.mp3';
sound.c2.src = 'notes/c2.mp3';

let key = [];

pianoDrag.onmousedown = function (e) {
  moveAt(e);
  document.body.appendChild(pianoRoll);

  pianoRoll.style.zIndex = 1000;

  function moveAt(e) {
    pianoRoll.style.left = e.pageX - pianoRoll.offsetWidth / 2 + 'px';
    pianoRoll.style.top = e.pageY - pianoRoll.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function (e) {
    moveAt(e);
  };
  pianoRoll.onmouseup = function () {
    document.onmousemove = null;
    pianoRoll.onmouseup = null;
    pianoDrag.onmouseup = null;
  };
};

pianoDrag.ondragstart = function () {
  return false;
};

keys.forEach((e) => {
  key.push(e);
});

keyPress = function (num, note) {
  key[num].addEventListener('mousedown', (e) => {
    console.log('C');
    note.play();
  });

  key[num].addEventListener('mouseup', (e) => {
    console.log('stop');
    note.currentTime = 0;
    note.pause();
  });
};

keyPress(0, sound.c);
keyPress(1, sound.cis);
keyPress(2, sound.d);
keyPress(3, sound.dis);
keyPress(4, sound.e);
keyPress(5, sound.f);
keyPress(6, sound.fis);
keyPress(7, sound.g);
keyPress(8, sound.gis);
keyPress(9, sound.a);
keyPress(10, sound.ais);
keyPress(11, sound.b);
keyPress(12, sound.c2);
