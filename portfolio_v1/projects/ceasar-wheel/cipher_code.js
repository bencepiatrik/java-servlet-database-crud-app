document.addEventListener('DOMContentLoaded', () => {
  let codeContainer = document.querySelector('code')
  let key = '${key * 13.84615}'
  let counter = '${counter}'
  let texts = [`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>The Ceasar Cipher Wheel</title>

    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class="container">
      
      <h1>The Ceasar Cipher Wheel</h1>
      <div class="outer-wheel">
        <li>
          <div class="char">
          <p>A</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">       
          <p>B</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>C</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>D</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>E</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>F</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>G</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>H</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>I</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>J</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>K</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>L</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>M</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>N</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>O</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>P</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>Q</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>R</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>S</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>T</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>U</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>V</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>W</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>X</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>Y</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>Z</p>
        </div>
          <div class="slice"></div>
        </li>
      </div>
      <div class="hide-wheel"></div>
      <div onmousemove="m(event)" class="inner-wheel">
      
        <li>
          <div class="char">
          <p>A</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">       
          <p>B</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>C</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>D</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>E</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>F</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>G</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>H</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>I</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>J</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>K</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>L</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>M</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>N</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>O</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>P</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>Q</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>R</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>S</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>T</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>U</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>V</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>W</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>X</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>Y</p>
        </div>
          <div class="slice"></div>
        </li>
        <li>
          <div class="char">
          <p>Z</p>
        </div>
          <div class="slice"></div>
        </li>
        <div class="scroll">scroll</div>
    <div class="wheel-center">
    
    </div>
      </div>
      <div class="key-info">
        <h1>Enter the key: <br> <input placeholder="0" type="number" class="key"> <br>  Or scroll</h1>
      </div>
    </div>
    <div class="container-2">
      <div class="box-1">    
        <h3>Encrypt</h3>
        <input class="encrypt-text" type="text">
        <div class="your-key">
        <h4>Your given key:</h4>
        <input class="encrypt-key" type="number">
        </div>
        <h4>Your encrypted text: <span class="encrypted-text"></span></h4>
      </div>
      <div class="box-2">
        <h3>Cryptoanalysis</h3>
        <input class="reveal-text" type="text">
        <div class="your-key">
          <h4>Your given key:</h4>
          <input class="reveal-key" type="number">
        </div>
        <h4>Your revealed text: <span class="revealed-text"></span></h4>
      </div>
    </div>

    <script src="./main.js"></script>
  </body>
  </html>   `,`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  .container {
    width: 100vw;
    height: 100vh;
    background-color: white;
  }

  .container h1 {
    text-align: center;
    position: absolute;
    top: 5%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }

  .container .outer-wheel {
    -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
            box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    width: 750px;
    height: 750px;
    border-radius: 100%;
    position: absolute;
    left: 25%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    border: 2px solid black;
    overflow: hidden;
  }

  .container .outer-wheel .slice {
    position: absolute;
    left: -100%;
    width: 200%;
    height: 200%;
  }

  .container .outer-wheel li {
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
    overflow: hidden;
    border-left: 1px solid #000;
  }

  .container .outer-wheel li .char {
    position: absolute;
    top: 55%;
    -webkit-transform: rotate(7.2deg);
            transform: rotate(7.2deg);
  }

  .container .outer-wheel li .char p {
    letter-spacing: 20px;
    width: 100px;
    text-align: center;
    font-size: 3.25em;
    font-weight: 500;
    -webkit-transform: skewY(-162deg);
            transform: skewY(-162deg);
  }

  .container .outer-wheel li:first-child {
    -webkit-transform: rotate(0deg) skewY(162deg);
            transform: rotate(0deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(2) {
    -webkit-transform: rotate(13.84615deg) skewY(162deg);
            transform: rotate(13.84615deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(3) {
    -webkit-transform: rotate(27.6923deg) skewY(162deg);
            transform: rotate(27.6923deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(4) {
    -webkit-transform: rotate(41.53845deg) skewY(162deg);
            transform: rotate(41.53845deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(5) {
    -webkit-transform: rotate(55.3846deg) skewY(162deg);
            transform: rotate(55.3846deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(6) {
    -webkit-transform: rotate(69.23075deg) skewY(162deg);
            transform: rotate(69.23075deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(7) {
    -webkit-transform: rotate(83.0769deg) skewY(162deg);
            transform: rotate(83.0769deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(8) {
    -webkit-transform: rotate(96.92305deg) skewY(162deg);
            transform: rotate(96.92305deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(9) {
    -webkit-transform: rotate(110.7692deg) skewY(162deg);
            transform: rotate(110.7692deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(10) {
    -webkit-transform: rotate(124.61535deg) skewY(162deg);
            transform: rotate(124.61535deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(11) {
    -webkit-transform: rotate(138.4615deg) skewY(162deg);
            transform: rotate(138.4615deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(12) {
    -webkit-transform: rotate(152.30765deg) skewY(162deg);
            transform: rotate(152.30765deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(13) {
    -webkit-transform: rotate(166.1538deg) skewY(162deg);
            transform: rotate(166.1538deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(14) {
    -webkit-transform: rotate(179.99995deg) skewY(162deg);
            transform: rotate(179.99995deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(15) {
    -webkit-transform: rotate(193.8461deg) skewY(162deg);
            transform: rotate(193.8461deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(16) {
    -webkit-transform: rotate(207.69225deg) skewY(162deg);
            transform: rotate(207.69225deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(17) {
    -webkit-transform: rotate(221.5384deg) skewY(162deg);
            transform: rotate(221.5384deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(18) {
    -webkit-transform: rotate(235.38455deg) skewY(162deg);
            transform: rotate(235.38455deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(19) {
    -webkit-transform: rotate(249.2307deg) skewY(162deg);
            transform: rotate(249.2307deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(20) {
    -webkit-transform: rotate(263.07685deg) skewY(162deg);
            transform: rotate(263.07685deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(21) {
    -webkit-transform: rotate(276.923deg) skewY(162deg);
            transform: rotate(276.923deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(22) {
    -webkit-transform: rotate(290.76915deg) skewY(162deg);
            transform: rotate(290.76915deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(23) {
    -webkit-transform: rotate(304.6153deg) skewY(162deg);
            transform: rotate(304.6153deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(24) {
    -webkit-transform: rotate(318.46145deg) skewY(162deg);
            transform: rotate(318.46145deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(25) {
    -webkit-transform: rotate(332.3076deg) skewY(162deg);
            transform: rotate(332.3076deg) skewY(162deg);
  }

  .container .outer-wheel li:nth-child(26) {
    -webkit-transform: rotate(346.15375deg) skewY(162deg);
            transform: rotate(346.15375deg) skewY(162deg);
  }

  .hide-wheel {
    width: 500px;
    height: 500px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 25%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    -webkit-transition: 1s all;
    transition: 1s all;
  }

  .inner-wheel {
    -webkit-transition: all 1s;
    transition: all 1s;
    width: 500px;
    height: 500px;
    border-radius: 100%;
    position: absolute;
    left: 25%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    border: 2px solid black;
    overflow: hidden;
  }

  .inner-wheel .scroll {
    overflow: visible;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    color: red;
    font-size: 12;
    height: 100px;
    width: 100px;
    background-attachment: black;
    z-index: 400;
  }

  .inner-wheel .slice {
    position: absolute;
    left: -100%;
    width: 200%;
    height: 200%;
  }

  .inner-wheel li {
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
    overflow: hidden;
    border-left: 1px solid #000;
  }

  .inner-wheel li .char {
    position: absolute;
    top: 55%;
    -webkit-transform: rotate(7.2deg);
            transform: rotate(7.2deg);
  }

  .inner-wheel li .char p {
    letter-spacing: 20px;
    width: 70px;
    text-align: center;
    font-size: 2em;
    font-weight: 500;
    -webkit-transform: skewY(-162deg);
            transform: skewY(-162deg);
  }

  .inner-wheel li:first-child {
    -webkit-transform: rotate(0deg) skewY(162deg);
            transform: rotate(0deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(2) {
    -webkit-transform: rotate(13.84615deg) skewY(162deg);
            transform: rotate(13.84615deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(3) {
    -webkit-transform: rotate(27.6923deg) skewY(162deg);
            transform: rotate(27.6923deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(4) {
    -webkit-transform: rotate(41.53845deg) skewY(162deg);
            transform: rotate(41.53845deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(5) {
    -webkit-transform: rotate(55.3846deg) skewY(162deg);
            transform: rotate(55.3846deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(6) {
    -webkit-transform: rotate(69.23075deg) skewY(162deg);
            transform: rotate(69.23075deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(7) {
    -webkit-transform: rotate(83.0769deg) skewY(162deg);
            transform: rotate(83.0769deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(8) {
    -webkit-transform: rotate(96.92305deg) skewY(162deg);
            transform: rotate(96.92305deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(9) {
    -webkit-transform: rotate(110.7692deg) skewY(162deg);
            transform: rotate(110.7692deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(10) {
    -webkit-transform: rotate(124.61535deg) skewY(162deg);
            transform: rotate(124.61535deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(11) {
    -webkit-transform: rotate(138.4615deg) skewY(162deg);
            transform: rotate(138.4615deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(12) {
    -webkit-transform: rotate(152.30765deg) skewY(162deg);
            transform: rotate(152.30765deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(13) {
    -webkit-transform: rotate(166.1538deg) skewY(162deg);
            transform: rotate(166.1538deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(14) {
    -webkit-transform: rotate(179.99995deg) skewY(162deg);
            transform: rotate(179.99995deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(15) {
    -webkit-transform: rotate(193.8461deg) skewY(162deg);
            transform: rotate(193.8461deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(16) {
    -webkit-transform: rotate(207.69225deg) skewY(162deg);
            transform: rotate(207.69225deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(17) {
    -webkit-transform: rotate(221.5384deg) skewY(162deg);
            transform: rotate(221.5384deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(18) {
    -webkit-transform: rotate(235.38455deg) skewY(162deg);
            transform: rotate(235.38455deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(19) {
    -webkit-transform: rotate(249.2307deg) skewY(162deg);
            transform: rotate(249.2307deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(20) {
    -webkit-transform: rotate(263.07685deg) skewY(162deg);
            transform: rotate(263.07685deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(21) {
    -webkit-transform: rotate(276.923deg) skewY(162deg);
            transform: rotate(276.923deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(22) {
    -webkit-transform: rotate(290.76915deg) skewY(162deg);
            transform: rotate(290.76915deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(23) {
    -webkit-transform: rotate(304.6153deg) skewY(162deg);
            transform: rotate(304.6153deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(24) {
    -webkit-transform: rotate(318.46145deg) skewY(162deg);
            transform: rotate(318.46145deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(25) {
    -webkit-transform: rotate(332.3076deg) skewY(162deg);
            transform: rotate(332.3076deg) skewY(162deg);
  }

  .inner-wheel li:nth-child(26) {
    -webkit-transform: rotate(346.15375deg) skewY(162deg);
            transform: rotate(346.15375deg) skewY(162deg);
  }

  .wheel-center {
    -webkit-transition: all 0s;
    transition: all 0s;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    border-radius: 100%;
    background-color: #fff;
    z-index: 1001;
    border: 2px solid #000;
  }

  .key-info {
    width: 400px;
    font-size: 0.75em;
    -webkit-transition: all 0s;
    transition: all 0s;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 25%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }

  .key-info h1 {
    font-weight: 500;
  }

  .key-info .key {
    -webkit-transition: all 0s;
    transition: all 0s;
    text-align: center;
    -webkit-appearance: none;
    width: 100px;
    font-size: 1em;
    height: 50px;
    padding-left: 10px;
  }

  .container-2 {
    position: absolute;
    top: 50%;
    right: 10%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }

  .container-2 .your-key {
    padding-top: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }

  .container-2 h4:nth-child(2),
  .container-2 h4:nth-child(4) {
    margin-top: 25px;
  }

  .container-2 h3 {
    text-align: center;
    font-size: 1.75em;
    padding-bottom: 25px;
  }

  .container-2 input[type="text"] {
    font-size: 1.5em;
    width: 20vw;
    text-align: center;
  }

  .container-2 input[type="number"] {
    margin-left: 25px;
    font-size: 1.5em;
    width: 50px;
  }

  .container-2 .box-1 {
    margin: 100px 0;
  }

  .container-2 .box-2 {
    margin: 100px 0;
  }

  .inner-wheel:hover {
    -webkit-transform: translate(-50%, -50%) scale(1.1);
            transform: translate(-50%, -50%) scale(1.1);
  }
  /*# sourceMappingURL=style.css.map */`,`
  const outerWheel = document.querySelector('.outer-wheel');
  const innerWheel = document.querySelector('.inner-wheel');
  const centerWheel = document.querySelector('.wheel-center');
  const hideWheel = document.querySelector('.hide-wheel');
  const container = document.querySelector('.container')
  const box = document.querySelector('.box')
  let key = document.querySelector('.key');
  const body = document.querySelector('body')

  let counter = 0

  key.addEventListener('input', function(e){
    let key = e.target.value
    outerWheel.style.transform = "translate(-50%, -50%) rotate(0deg)"
    innerWheel.style.transform =  "translate(-50%, -50%) rotate(${key}deg)"
    centerWheel.style.transform = "translate(-50%, -50%) rotate(0deg) rotate(${key}deg)"
    counter = key
  })

  let shift = 0
  let shift2 = 0
  let str = ''
  let str2 = ''

  let strBox = document.querySelector('.encrypt-text')
  let shiftBox = document.querySelector('.encrypt-key')
  let strReveal = document.querySelector('.reveal-text')
  let shiftReveal = document.querySelector('.reveal-key')

  body.addEventListener('input', encrypt)
  body.addEventListener('input', reveal)
  shiftBox.addEventListener('input', function (e)  {
    shift = e.target.value
  })
  strBox.addEventListener('input', function(e){
    str = e.target.value 
  })
  shiftReveal.addEventListener('input', function (e)  {
    shift2 = e.target.value
  })
  strReveal.addEventListener('input', function(e){
    str2 = e.target.value 
  })

  function encrypt() {
    let codedStr = '';
    for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    let ascii = char.charCodeAt(0)
    let shiftedAscii = ascii + shift * 2 /2
    switch(true) {
      case (ascii >= 65 && ascii <= 90):
        if (shiftedAscii < 65) {shiftedAscii += 26} 
        if (shiftedAscii > 90) {shiftedAscii -= 26} 
        break;
      case (ascii >= 97 && ascii <= 122):
        if (shiftedAscii < 97) {shiftedAscii += 26} 
        if (shiftedAscii > 122) {shiftedAscii -= 26} 
        break;
      default:
        console.log('nem betu')
        break;  
    } 
    let codedChar = String.fromCharCode(shiftedAscii)
    codedStr += codedChar;
  }
  codedStr= codedStr.substr(codedStr.length - str.length)
  const encryptedText = document.querySelector('.encrypted-text')
  encryptedText.innerHTML = codedStr
  }

  function reveal() {
    let codedStr = '';
    for (let i = 0; i < str2.length; i++) {
    let char = str2.charAt(i)
    let ascii = char.charCodeAt(0)
    let shiftedAscii = ascii - shift2  * 2 /2
    switch(true) {
      case (ascii >= 65 && ascii <= 90):
        if (shiftedAscii < 65) {shiftedAscii += 26} 
        if (shiftedAscii > 90) {shiftedAscii -= 26} 
        break;
      case (ascii >= 97 && ascii <= 122):
        if (shiftedAscii < 97) {shiftedAscii += 26} 
        if (shiftedAscii > 122) {shiftedAscii -= 26} 
        break;
      default:
        console.log('nem betu')
        break;  
    } 
    let codedChar = String.fromCharCode(shiftedAscii)
    codedStr += codedChar;
  }
  codedStr= codedStr.substr(codedStr.length - str2.length)
  const revealedText = document.querySelector('.revealed-text')
  revealedText.innerHTML = codedStr
  }

  innerWheel.addEventListener('wheel', (e) => {
    let Y = e.deltaY 
    if(Y < 0 ) {
      counter = counter + 13.84615
    innerWheel.style.transform = "translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1.1)"
    innerWheel.addEventListener('mouseenter', function() {
      innerWheel.style.transform = "translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1.1)"
      hideWheel.style.transform = 'translate(-50%, -50%) scale(1.1)'
    })
    innerWheel.addEventListener('mouseleave', function() {
      hideWheel.style.transform = 'translate(-50%, -50%) scale(1)'
      innerWheel.style.transform = "translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1)"
    })
    }

    if(Y > 0 ) {
      counter = counter - 13.84615
    innerWheel.style.transform = "translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1.1)"
    innerWheel.addEventListener('mouseenter', function() {
      hideWheel.style.transform = 'translate(-50%, -50%) scale(1.1)'  
      innerWheel.style.transform = "translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1.1)"
    })
    innerWheel.addEventListener('mouseleave', function() {
      hideWheel.style.transform = 'translate(-50%, -50%) scale(1)'
      innerWheel.style.transform = "translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1)"
    })
    }
    let encryptKey = counter / 13.84615
    key.value = Math.round(encryptKey)
  })
  innerWheel.addEventListener('mouseenter', function() {
    hideWheel.style.transform = 'translate(-50%, -50%) scale(1.1)'
    hideWheel.style.boxShadow = '0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)'
    innerWheel.style.transform = 'translate(-50%, -50%) scale(1.1)'
  })
  innerWheel.addEventListener('mouseleave', function() {
    hideWheel.style.transform = 'translate(-50%, -50%) scale(1)'
    hideWheel.style.boxShadow = 'none'
    innerWheel.style.transform = 'translate(-50%, -50%) scale(1)'

  })

  `]

  codeContainer.textContent = texts[0]

  let Btns = document.querySelectorAll('button')
  Btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.id == 0) {
        codeContainer.textContent = ""
        codeContainer.textContent = texts[0]
      }
      else if (btn.id == 1) {
        codeContainer.textContent = ""
        codeContainer.textContent = texts[1]
      }
      else {
        codeContainer.textContent = ""
        codeContainer.textContent = texts[2]
      }
    })
  }) 
})