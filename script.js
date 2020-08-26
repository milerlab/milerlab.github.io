function getNums(str) {
  var matches = str.match(/\d+/);
  if (matches) {
    return parseFloat(matches[0]);
  }
}
function fixDouble(num, fixLength) {
  if (num != null) {
    return num.toFixed(fixLength);
  } else {
    return null;
  }
}
// slides
var slideIndex = 0;
showSlide(slideIndex);
var slides = document.getElementsByClassName('mySlides');
function showSlide(num) {
  var tabs = document.querySelectorAll('nav a');
  var slides = document.getElementsByClassName('mySlides');
  slideIndex = num;
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if (num < 0) {
    slideIndex = slides.length - 1;
  }
  if (num >= slides.length) {
    slideIndex = 0;
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = '';
  }
  slides[slideIndex].style.display = 'block';
  tabs[slideIndex].className += ' active';
}
for (var i = 0; i < slides.length; i++) {
  slides[i].style.top = '60px';
}
// online calcs
var fsBoxEls = document.getElementsByClassName('fs-box');
var fsLabelEls = document.getElementsByClassName('fs-label');
var btBoxEls = document.getElementsByClassName('bt-box');
var btLabelEls = document.getElementsByClassName('bt-label');
function positions(elGroup) {
  if (elGroup === fsBoxEls || elGroup === fsLabelEls) {
    if (i >= 4) {
      elGroup[i].style.top = 100 + i * 30 + 30 + 'px';
    } else {
      elGroup[i].style.top = 100 + i * 30 + 'px';
    }
  } else if (elGroup === btBoxEls || elGroup === btLabelEls) {
    elGroup[i].style.top = 100 + i * 30 + 'px';
  }
}
for (var i = 0; i < fsBoxEls.length; i++) {
  positions(fsBoxEls);
}
for (var i = 0; i < fsLabelEls.length; i++) {
  positions(fsLabelEls);
}
for (var i = 0; i < btBoxEls.length; i++) {
  positions(btBoxEls);
}
for (var i = 0; i < btLabelEls.length; i++) {
  positions(btLabelEls);
}
var clarification = document.getElementById('clarification');
clarification.style.top = getNums(fsBoxEls[3].style.top) + 30 + 'px';
var fsCalcBtn = document.getElementById('fs-calcBtn');
var fsClrBtn = document.getElementById('fs-clrBtn');
var btCalcBtn = document.getElementById('bt-calcBtn');
var btClrBtn = document.getElementById('bt-clrBtn');
var fs = {
  mpg: null,
  base: null,
  curPrice: null,
  surcharge: null,
  distance: null,
  quantity: null,
  tripB: null,
  tripC: null,
  tripS: null,
  setMpg: (setMpg = function (value) {
    fs.mpg = value;
  }),
  setBase: (setBase = function (value) {
    fs.base = value;
  }),
  setCurPrice: (setCurPrice = function (value) {
    fs.curPrice = value;
  }),
  setSurcharge: (setSurcharge = function (value) {
    fs.surcharge = value;
  }),
  setDistance: (setDistance = function (value) {
    fs.distance = value;
  }),
  setQuantity: (setQuantity = function (value) {
    fs.quantity = value;
  }),
  setTripB: (setTripB = function (value) {
    fs.tripB = value;
  }),
  setTripC: (setTripC = function (value) {
    fs.tripC = value;
  }),
  setTripS: (setTripS = function (value) {
    fs.tripS = value;
  }),
  calculate: (calculate = function () {
    fs.surcharge = (fs.curPrice - fs.base) / fs.mpg;
    fs.quantity = fs.distance / fs.mpg;
    fs.tripB = fs.base * fs.quantity;
    fs.tripC = fs.curPrice * fs.quantity;
    fs.tripS = fs.surcharge * fs.distance;
    if (fs.mpg == null || fs.base == null || fs.curPrice == null) {
      fs.surcharge = null;
    }
  }),
  clrVars: (clrVars = function () {
    fs.setMpg(null);
    fs.setBase(null);
    fs.setCurPrice(null);
    fs.setSurcharge(null);
    fs.setDistance(null);
    fs.setQuantity(null);
    fs.setTripB(null);
    fs.setTripC(null);
    fs.setTripS(null);
  }),
};
function fsClrBoxes() {
  for (var i = 0; i < fsBoxEls.length; i++) {
    fsBoxEls[i].value = null;
  }
}
function fsClrAll() {
  fsClrBoxes();
  fs.clrVars();
}
function fsCalculateTwice() {
  if (fsBoxEls[0].value !== '') {
    fs.setMpg(fsBoxEls[0].value);
  }
  if (fsBoxEls[1].value !== '') {
    fs.setBase(fsBoxEls[1].value);
  }
  if (fsBoxEls[2].value !== '') {
    fs.setCurPrice(fsBoxEls[2].value);
  }
  if (fsBoxEls[3].value !== '') {
    fs.setSurcharge(fsBoxEls[3].value);
  }
  if (fsBoxEls[4].value !== '') {
    fs.setDistance(fsBoxEls[4].value);
  }
  if (fsBoxEls[5].value !== '') {
    fs.setQuantity(fsBoxEls[5].value);
  }
  if (fsBoxEls[6].value !== '') {
    fs.setTripB(fsBoxEls[6].value);
  }
  if (fsBoxEls[7].value !== '') {
    fs.setTripC(fsBoxEls[7].value);
  }
  if (fsBoxEls[8].value !== '') {
    fs.setTripS(fsBoxEls[8].value);
  }
  fs.calculate();
  fs.calculate();
  fsBoxEls[3].value = fixDouble(fs.surcharge, 3);
  fsBoxEls[5].value = fixDouble(fs.quantity, 3);
  fsBoxEls[6].value = fixDouble(fs.tripB, 3);
  fsBoxEls[7].value = fixDouble(fs.tripC, 3);
  fsBoxEls[8].value = fixDouble(fs.tripS, 3);
}
fsCalcBtn.addEventListener('click', fsCalculateTwice);
fsClrBtn.addEventListener('click', fsClrAll);
var bt = {
  beforeTip: null,
  tax: null,
  tipPercent: null,
  tipAmt: null,
  splitCt: null,
  afterTip: null,
  perPerson: null,
  setBeforeTip: (setBeforeTip = function (value) {
    if (value !== '') {
      bt.beforeTip = parseFloat(value);
    }
  }),
  setTax: (setTax = function (value) {
    if (value !== '') {
      bt.tax = parseFloat(value);
    }
  }),
  setTipPercent: (setTipPercent = function (value) {
    if (value !== '') {
      bt.tipPercent = parseFloat(value);
    }
  }),
  setTipAmt: (setTipAmt = function (value) {
    if (value !== '') {
      bt.tipAmt = parseFloat(value);
    }
  }),
  setSplitCt: (setSplitCt = function (value) {
    if (value !== '') {
      bt.splitCt = parseFloat(value);
    }
  }),
  setAfterTip: (setAfterTip = function (value) {
    if (value !== '') {
      bt.afterTip = parseFloat(value);
    }
  }),
  setPerPerson: (setPerPerson = function (value) {
    if (value !== '') {
      bt.perPerson = parseFloat(value);
    }
  }),
  calculate: (calculate = function () {
    bt.tipAmt = (bt.beforeTip + bt.tax) * (bt.tipPercent / 100);
    bt.afterTip = bt.beforeTip + bt.tax + bt.tipAmt;
    bt.perPerson = bt.afterTip / bt.splitCt;
    if (bt.afterTip === 0) {
      bt.afterTip = null;
    }
    if (bt.tipAmt === 0) {
      bt.tipAmt = null;
    }
  }),
  clrVars: (clrVars = function () {
    bt.setBeforeTip(null);
    bt.setTax(null);
    bt.setTipPercent(null);
    bt.setTipAmt(null);
    bt.setSplitCt(null);
    bt.setAfterTip(null);
    bt.setPerPerson(null);
  }),
};
function btClrBoxes() {
  for (var i = 0; i < btBoxEls.length; i++) {
    btBoxEls[i].value = null;
  }
}
function btClrAll() {
  btClrBoxes();
  bt.clrVars();
}
function btCalculate() {
  bt.setBeforeTip(btBoxEls[0].value);
  bt.setTax(btBoxEls[1].value);
  bt.setTipPercent(btBoxEls[2].value);
  bt.setTipAmt(btBoxEls[3].value);
  bt.setSplitCt(btBoxEls[4].value);
  bt.setAfterTip(btBoxEls[5].value);
  bt.setPerPerson(btBoxEls[6].value);
  bt.calculate();
  btBoxEls[3].value = fixDouble(bt.tipAmt, 3);
  btBoxEls[5].value = fixDouble(bt.afterTip, 3);
  btBoxEls[6].value = fixDouble(bt.perPerson, 3);
}
btCalcBtn.addEventListener('click', btCalculate);
btClrBtn.addEventListener('click', btClrAll);
// normal calc
var calc = document.getElementById('calculator');
var calcBtn = document.getElementsByClassName('calc-btn');
var calcInput = document.querySelectorAll('#calculator input');
function onClickEvent(e) {
  calcInput[0].value += e.target.firstChild.nodeValue;
}
for (var i = 0; i <= 14; i++) {
  calcBtn[i].addEventListener('click', onClickEvent);
}
calcBtn[15].addEventListener('click', function () {
  calcInput[0].value += '*';
});
calcBtn[16].addEventListener('click', function () {
  calcInput[0].value += '/';
});
calcBtn[17].addEventListener('click', function () {
  calcInput[0].value += '**';
});
calcBtn[18].addEventListener('click', function () {
  calcInput[0].value += 'Math.sqrt(';
});
calcBtn[19].addEventListener('click', function () {
  calcInput[0].value += 'Math.sin(';
});
calcBtn[20].addEventListener('click', function () {
  calcInput[0].value += 'Math.cos(';
});
calcBtn[21].addEventListener('click', function () {
  calcInput[0].value += 'Math.tan(';
});
calcBtn[22].addEventListener('click', function () {
  calcInput[0].value += 'Math.asin(';
});
calcBtn[23].addEventListener('click', function () {
  calcInput[0].value += 'Math.acos(';
});
calcBtn[24].addEventListener('click', function () {
  calcInput[0].value += 'Math.atan(';
});
calcBtn[calcBtn.length - 3].addEventListener('click', function () {
  calcInput[0].value = '';
});
calcBtn[calcBtn.length - 2].addEventListener('click', function () {
  calcInput[0].value = calcInput[0].value.substring(
    0,
    calcInput[0].value.length - 1
  );
});
calcBtn[calcBtn.length - 1].addEventListener('click', function () {
  try {
    if (eval(calcInput[0].value) != null && eval(calcInput[0].value) != NaN) {
      calcInput[0].value = eval(calcInput[0].value);
    }
  } catch {
    calcInput[0].style.color = 'firebrick';
  }
});
for (var i = 0; i < calcBtn.length - 1; i++) {
  calcBtn[i].addEventListener('click', function () {
    calcInput[0].style.color = '#595959';
  });
}
calcInput[0].onkeydown = function (e) {
  if (
    e.location == 0 &&
    e.key != 'Escape' &&
    e.key != 'ArrowLeft' &&
    e.key != 'ArrowRight' &&
    e.key != 'ArrowUp' &&
    e.key != 'ArrowDown'
  ) {
    calcInput[0].style.color = '#595959';
  }
  if (e.key == 'Enter') {
    try {
      if (eval(calcInput[0].value) != null) {
        calcInput[0].value = eval(calcInput[0].value);
      }
    } catch {
      calcInput[0].style.color = 'firebrick';
    }
  }
};
