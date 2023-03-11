let Links = {
  setColor: function (color) {
    let alist = document.querySelectorAll('a');
      let i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
  } 
}

let Body = {
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  },
  setColor: function (color) {
    document.querySelector('body').style.color = color;
}
}

function nightDayHendler(self){
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white')
    self.value = 'day';
    self.innerText = 'day';
    
    Links.setColor('yellow');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black')
    self.value = 'night';
    self.innerText = 'night';

    Links.setColor('blue');
  }
}