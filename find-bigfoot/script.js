function loadBigFoot() {
  document.getElementById('bigFoot').src = '/assets/bigfoot.png'
}

function moveBigfoot() {
  alert('Woohoo, you win! You found Bigfoot!');
  
  let pic = document.getElementById('bigFoot');

  let x = Math.random() * 300;
  let y = Math.random() * 300;

  pic.style.left = x + 'px';
  pic.style.right = y + 'px';
}