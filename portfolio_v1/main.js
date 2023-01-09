document.addEventListener("DOMContentLoaded", () => {
  let liBg = document.querySelectorAll(".li-bg");
  let liGreenBg = document.querySelectorAll(".li-green-bg");
  let sections = document.querySelectorAll("section");
  let sideBar = document.querySelector(".sidebar");
  let counter = false;
  let languageImg = document.querySelectorAll(".languages-container > img");
  let toolsImg = document.querySelectorAll(".tools-container > img");
  let openContainer = document.querySelector('.open-container');
  let openBar1 = document.querySelector('.open-bar-1')
  let openBar2 = document.querySelector('.open-bar-2')
  let openBar3 = document.querySelector('.open-bar-3')
  let open = true
  let close = false

  const mediaQueryMobile = window.matchMedia('(min-width: 320px)')
  const mediaQueryTablet = window.matchMedia('(min-width: 481px)')
  const mediaQueryLaptop = window.matchMedia('(min-width: 769px)')
  const mediaQueryDesktop = window.matchMedia('(min-width: 1025px)')
  const mediaQueryExtra = window.matchMedia('(min-width: 1201px)')

  let mediaQuery = []
  let mobile, tablet, laptop, desktop, extra = false
  function mediaSize(e) {
    if (mediaQueryMobile.matches) {
      mediaQuery = []
      mediaQuery.push('mobile')
    }
    if (mediaQueryTablet.matches) {
      mediaQuery = []
      mediaQuery.push('tablet')
    }
    if (mediaQueryLaptop.matches) {
      mediaQuery = []
      mediaQuery.push('laptop')
    }
    if (mediaQueryDesktop.matches) {
      mediaQuery = []
      mediaQuery.push('desktop')
    }
    if (mediaQueryExtra.matches) {
      mediaQuery = []
      mediaQuery.push('extra')
    }
    console.log(mediaQuery)
    if (mediaQuery[0] === 'mobile') {
      tablet, laptop, desktop, extra = false
      mobile = true
    }
    if (mediaQuery[0] === 'tablet') {
      mobile, laptop, desktop, extra = false
      tablet = true
    }
    if (mediaQuery[0] === 'laptop') {
      tablet, mobile, desktop, extra = false
      laptop = true
    }
    if (mediaQuery[0] === 'desktop') {
      tablet, laptop, mobile, extra = false
      desktop = true
    }
    if (mediaQuery[0] === 'extra') {
      tablet, laptop, desktop, mobile = false
      extra = true
    }
  }
  mediaQueryMobile.addListener(mediaSize)
  mediaQueryTablet.addListener(mediaSize)
  mediaQueryLaptop.addListener(mediaSize)
  mediaQueryDesktop.addListener(mediaSize)
  mediaQueryExtra.addListener(mediaSize)

  mediaSize()

  
  let start = () => {
    let liBg = document.querySelectorAll('.li-bg')
    for (let i = 0; i < 4; i++) {
      setTimeout((i) => {
        liBg[i].style.right = '0'
      }, i * 250,i);      
    }
    let firstName = document.querySelector('.first-name')
    let lastName = document.querySelector('.last-name')
    let dots = document.querySelector('.dot-art')
    let meImg = document.querySelector('.img')
    let meImgBg = document.querySelector('.img-background')
    let links = document.querySelector('.links')
    let linksImg = document.querySelectorAll('.links > img')
    setTimeout(() => {
      firstName.style.opacity = '1'
      meImgBg.style.opacity = '1'
    }, 250);
    setTimeout(() => {
      firstName.style.opacity = '0'
    }, 350);
    setTimeout(() => {
      firstName.style.opacity = '1'
      meImgBg.style.opacity = '0'
      let liA = document.querySelectorAll('.li-a')
      greenWidth = liA[0].getBoundingClientRect().width
      liGreenBg[0].style.width = `${greenWidth+1}px`;
    }, 450);
    setTimeout(() => {
      lastName.style.opacity = '1'
      meImgBg.style.opacity = '1'
      dots.style.opacity = '1'
      if (mobile || tablet) {
        links.style.height = '325px'
      }
      else {
        links.style.width = '325px'
      }
    }, 600);
    setTimeout(() => {
      meImg.style.opacity = '1'
      meImgBg.style.backgroundColor = 'var(--main-green)'
      meImgBg.style.top = '65px'
      meImgBg.style.left = '65px'
      dots.style.top = '0px'
      dots.style.left = '0px'
      for (let i = 0; i < 3; i++) { 
        setTimeout((i) => {
          linksImg[i].style.transform = 'scale(1)'
        }, i * 150, i);      
      }
    }, 1200);
    setTimeout(() => {
      let linksImgLast = document.querySelector('.gmail')
      linksImgLast.style.transform = 'scale(1)'
    }, 1650);
    let fiverr = document.querySelector('.my-fiverr')
    let fiverrBg = document.querySelector('.fiverr-bg')
    setTimeout(() => {
      fiverrBg.style.opacity = '1'
    }, 1250);
    setTimeout(() => {
      fiverrBg.style.opacity = '0'
    }, 1350);
    setTimeout(() => {
      fiverrBg.style.backgroundColor = '#e8e8e8'
      fiverrBg.style.opacity = '1'
    }, 1450);
    setTimeout(() => {
      fiverr.style.opacity = '1'
      if (mobile || tablet) {
      } else {
        fiverr.style.top = '445px'
        fiverr.style.left = 'calc(182% + 20px)'
      }
    }, 1500);
    setTimeout(() => {
      fiverr.style.transition = '.25s ease-in-out'
      if (mobile || tablet) {
      } else {
        fiverr.style.top = '425px'
        fiverr.style.left = '182%'
      }
    }, 1600);
    let aboutMe = document.querySelector('.about-me')
    let aboutMeMe = document.querySelector('.me')
    let aboutMeInfo = document.querySelector('.me-info')
    setTimeout(() => {
      if (mobile || tablet) {
        aboutMe.style.width = '80vw'
        aboutMe.style.height = '355px'
      } else {
        aboutMe.style.width = '750px'
        aboutMe.style.height = '355px'
      }
    }, 1000);
    setTimeout(() => {
      aboutMeMe.style.opacity = '1'
      aboutMeInfo.style.opacity = '1'
      setThinkBg();
    }, 1250);
    let thinkBg = document.querySelector('.thinking-bg')
    let thinkWhite = document.querySelector('.thinking-white')
    setTimeout(() => {
      thinkWhite.style.left = `${meInfo.getBoundingClientRect().right - 225}px`
    }, 1250);
    setTimeout(() => {
      thinkWhite.style.opacity = '1'
    }, 1300);
    setTimeout(() => {
      thinkWhite.style.opacity = '0'
      thinkBg.style.opacity = '1'
    }, 1500);
  }
  start();

  setTimeout(() => {
    let link = document.querySelectorAll('.link')
    link.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(.9)'
      })
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)'
      })
    });
  }, 1000);

  let noProjectAnims = () => {}
  let projectAnims = () => {
    projectAnims = noProjectAnims
    let projectContainer = document.querySelector('.project-container')
    let projectsHeader = document.querySelector('.projects-header')
    let cards = document.querySelector('.cards')
    let card = document.querySelectorAll('.card')
    setTimeout(() => {
    if (mobile) {
      projectContainer.style.width = 'auto'
      projectContainer.style.height = 'auto'
    } else {
      //projectContainer.style.width = '100%'
      //projectContainer.style.height = '100%'
    }
    }, 250);
    setTimeout(() => {
      projectsHeader.style.opacity = '1'
      cards.style.opacity = '1'
    }, 750);
    setTimeout(() => {
      for (i = 0; i < card.length; i++) {
        setTimeout(
          (i) => {
            card[i].style.opacity = "1";
          },
          i * 100,
          i
        );
      }
      tab1Bg.style.opacity = '1'
    }, 1000);
    let tab1 = document.querySelector('.tab-1')
    let tab2 = document.querySelector('.tab-2')
    let tab3 = document.querySelector('.tab-3')
    let tab1Bg = document.querySelector('.tab-1-bg')
    let tab2Bg = document.querySelector('.tab-2-bg')
    let tab3Bg = document.querySelector('.tab-3-bg')
    setTimeout(() => {
      tab1Bg.style.opacity = '0'
      tab2Bg.style.opacity = '1'
    }, 1200);
    setTimeout(() => {
      tab1.style.opacity = '1'
      tab2Bg.style.opacity = '0'
    }, 1400);
    setTimeout(() => {
      tab2.style.opacity = '1'
      tab3Bg.style.opacity = '1'
    }, 1600);
    setTimeout(() => {
      tab3Bg.style.opacity = '0'
    }, 1800);
    setTimeout(() => {
      tab3.style.opacity = '1'
      star1.style.opacity = '1'
    }, 2000);
    setTimeout(() => {
      star2.style.opacity = '1'
    }, 2250);
    setTimeout(() => {
      star3.style.opacity = '1'
    }, 2500);
    let star1 = document.querySelector('#star-1')
    let star2 = document.querySelector('#star-2')
    let star3 = document.querySelector('#star-3')
  }

  let noSkillsAnim = () => {}
  let skillsAnim = () => {
    let lang = document.querySelector('.lang')
    let langBg = document.querySelector('.language-bg')
    let langContainer = document.querySelector('.languages-container')
    let tool = document.querySelector('.tool')
    let toolBg = document.querySelector('.tools-bg')
    let toolContainer = document.querySelector('.tools-container')
    setTimeout(() => {
      if(mobile) {
        lang.style.height = 'auto'
        lang.style.width = 'auto'
      }
      else if (tablet) {

      }
      else {
        lang.style.height = '155px'
        lang.style.width = '865px'
      }

    }, 250);
    setTimeout(() => {
      langBg.style.opacity = '1';
      langContainer.style.opacity = '1';
      if(mobile) {
        tool.style.height = 'auto'
        tool.style.width = 'auto'
      } else {
        tool.style.height = '155px'
        tool.style.width = '560px'
      }
    }, 500);
    setTimeout(() => {
      toolBg.style.opacity = '1';
      toolContainer.style.opacity = '1';
    }, 750);
    let notebookContainer = document.querySelector('.notebook-container')
    let notebook = document.querySelector('.notebook-container > svg')
    setTimeout(() => {
      notebookContainer.style.height = '325px'
    }, 1000);
    setTimeout(() => {
      notebookContainer.style.height = '0px'
    }, 1400);
    setTimeout(() => {
      notebookContainer.style.backgroundColor = '#f8f1f1'
      notebook.style.opacity = '1'
    }, 1650);
    skillsAnim = noSkillsAnim
  }

  let noContactAnim = () =>{}
  let contactAnim = () =>{
      contactAnim = noContactAnim
        let xlMail1 = document.querySelector('.xl-mail-1')
        let xlMail2 = document.querySelector('.xl-mail-2')
        let xlMail3 = document.querySelector('.xl-mail-3')
        let lMail1 = document.querySelector('.l-mail-1')
        let lMail2 = document.querySelector('.l-mail-2')
        let lMail3 = document.querySelector('.l-mail-3')
        let lMail4 = document.querySelector('.l-mail-4')
        let mMail1 = document.querySelector('.m-mail-1')
        let mMail2 = document.querySelector('.m-mail-2')
        let mMail3 = document.querySelector('.m-mail-3')
        let mMail4 = document.querySelector('.m-mail-4')
        let sMail1 = document.querySelector('.s-mail-1')
        let sMail2 = document.querySelector('.s-mail-2')
        let sMail3 = document.querySelector('.s-mail-3')
        let sMail4 = document.querySelector('.s-mail-4')
        let contactContainer = document.querySelector('.contact-me-container')
        let contactHeader = document.querySelector('.contact-me-header')
        let contactForm = document.querySelector('.form-container')
        setTimeout(() => {
          if(mobile) {
            contactContainer.style.width = '80vw'
            contactContainer.style.height = '75vh'
          }
          else if (tablet) {
            contactContainer.style.width = '80vw'
            contactContainer.style.height = '65vh'
          }
          else {
          contactContainer.style.width = '900px'
          contactContainer.style.height = '555px'
          }
        }, 250);
        setTimeout(() => {
          contactHeader.style.opacity = '1'
          contactForm.style.opacity = '1'
        }, 750);
        setTimeout(() => {
          xlMail1.style.transform = 'scale(1.1)'
        }, 250 + 1000);
        setTimeout(() => {
          mMail3.style.transform = 'scale(1.1)'
        }, 300 + 1000);
        setTimeout(() => {
          lMail4.style.transform = 'scale(1.1)'
        }, 350 + 1000);
        setTimeout(() => {
          mMail1.style.transform = 'scale(1.1)'
        }, 400 + 1000);
        setTimeout(() => {
          xlMail2.style.transform = 'scale(1.1)'
        }, 450 + 1000);
        setTimeout(() => {
        lMail2.style.transform = 'scale(1.1)'    
        xlMail1.style.transform = 'scale(1)'
        }, 500 + 1000);
        setTimeout(() => {
          lMail3.style.transform = 'scale(1.1)'
          mMail3.style.transform = 'scale(1)'
        }, 550 + 1000);
        setTimeout(() => {
          mMail2.style.transform = 'scale(1.1)'
          lMail4.style.transform = 'scale(1)'
        }, 600 + 1000);
        setTimeout(() => {
          lMail1.style.transform = 'scale(1.1)'
          mMail1.style.transform = 'scale(1)'
        }, 650 + 1000);
        setTimeout(() => {
          sMail3.style.transform = 'scale(1.1)'
          xlMail2.style.transform = 'scale(1)'
        }, 700 + 1000);
        setTimeout(() => {
          mMail4.style.transform = 'scale(1.1)'
          lMail2.style.transform = 'scale(1)'    
        }, 750 + 1000);
        setTimeout(() => {
          sMail4.style.transform = 'scale(1.1)'
          lMail3.style.transform = 'scale(1)'
        }, 800 + 1000);
        setTimeout(() => {
          sMail1.style.transform = 'scale(1.1)'
          mMail2.style.transform = 'scale(1)'
        }, 850 + 1000);
        setTimeout(() => {
          xlMail3.style.transform = 'scale(1.1)'
          lMail1.style.transform = 'scale(1)'
        }, 900 + 1000);
        setTimeout(() => {
          sMail2.style.transform = 'scale(1.1)'
          sMail3.style.transform = 'scale(1)'
        }, 950 + 1000);
        setTimeout(() => {
          mMail4.style.transform = 'scale(1)'
        }, 1000 + 1000);
        setTimeout(() => {
          sMail4.style.transform = 'scale(1)'
        }, 1050 + 1000);
        setTimeout(() => {
          sMail1.style.transform = 'scale(1)'
        }, 1100 + 1000);
        setTimeout(() => {
          xlMail3.style.transform = 'scale(1)'
        }, 1150 + 1000);
        setTimeout(() => {
          sMail2.style.transform = 'scale(1.1)'
        }, 1200 + 1000);
  }

  window.addEventListener("scroll", () => {   
    if(desktop || extra) {
      if (pageYOffset < 750 ) {
        setTimeout(() => {
          let liA = document.querySelectorAll('.li-a')
          greenWidth = liA[0].getBoundingClientRect().width
          liGreenBg[0].style.width = `${greenWidth-3}px`;
          nth = 0
          checkBGs()
        }, 500);
      }
      else if (pageYOffset < 1500 ) {
        setTimeout(() => {
          let liA = document.querySelectorAll('.li-a')
          greenWidth = liA[1].getBoundingClientRect().width
          liGreenBg[1].style.width = `${greenWidth-3}px`;
          nth = 1
          checkBGs()
        }, 500);
      }
      else if (pageYOffset < 2250) {
        setTimeout(() => {
          let liA = document.querySelectorAll('.li-a')
          greenWidth = liA[2].getBoundingClientRect().width
          liGreenBg[2].style.width = `${greenWidth-3}px`;
          nth = 2
          checkBGs()
        }, 500); 
      }
      else if (pageYOffset > 3*1080 - 500) {
        setTimeout(() => {
          let liA = document.querySelectorAll('.li-a')
          greenWidth = liA[3].getBoundingClientRect().width
          liGreenBg[3].style.width = `${greenWidth-3}px`;
          nth = 3
          checkBGs()
        }, 500);
      }
    }
  if(mobile || tablet){
      projectAnims()
      skillsAnim()
      contactAnim()
    }else {
      if (pageYOffset > 800 && window.innerWidth > 601) {
        projectAnims()
      }
      if (pageYOffset > 1800 && window.innerWidth > 601) {
        skillsAnim()
      }
      if (pageYOffset > 2800 && window.innerWidth > 601) {
        contactAnim()
      }
      if (pageYOffset > 1850 && window.innerWidth > 601) {
        setTimeout(() => {
          for (i = 0; i < languageImg.length; i++) {
            setTimeout(
              (i) => {
                languageImg[i].style.transform = "scale(1)";
              },
              i * 250,
              i
            );
          }
        }, 750);
        setTimeout(() => {
          for (i = 0; i < toolsImg.length; i++) {
            setTimeout(
              (i) => {
                toolsImg[i].style.transform = "scale(1)";
              },
              i * 250,
              i
            );
          }
        }, 1000);
      }
  }
  });
  
  //hovering over the links in light mode
  let greenWidth
  let lightHover = () => {
    liBg.forEach((item) => {
      item.addEventListener("click", () => {
        nth = parseInt(item.id);
        checkBGs()
        let liA = document.querySelectorAll('.li-a')
        greenWidth = liA[nth].getBoundingClientRect().width
       liGreenBg[nth].style.width = `${greenWidth+1}px`;
        checkBGs()
      });
    });
  };

  lightHover();
  let checkBGs = () => {
    if(nth === 0) {
      liGreenBg[1].style.width = `0px`;
      liGreenBg[2].style.width = `0px`;
      liGreenBg[3].style.width = `0px`;
    }
    else if(nth === 1) {
      liGreenBg[0].style.width = `0px`;
      liGreenBg[2].style.width = `0px`;
      liGreenBg[3].style.width = `0px`;
    }
    else if(nth === 2) {
      liGreenBg[1].style.width = `0px`;
      liGreenBg[0].style.width = `0px`;
      liGreenBg[3].style.width = `0px`;
    } else {
      liGreenBg[1].style.width = `0px`;
      liGreenBg[0].style.width = `0px`;
      liGreenBg[2].style.width = `0px`;
    }
  }

  setTimeout(() => {
    liGreenBg.forEach((item) => {
      item.addEventListener("transitionend", () => {
        checkBGs()
        counter = true;
        let nth = parseInt(item.id);
        if (counter && liGreenBg[nth].style.width > `${greenWidth-2}px`) {
          let distance = 0;
          let index = parseInt(item.id);
          let element = document.querySelector(`.${sections[index].className}`);
          let style = window.getComputedStyle(element);
          distance = parseInt(style.getPropertyValue("top"))
          window.scrollTo(0, distance);
        }
      });
    });
  }, 2000);
 
  let setTopDistance = () => {
    liBg.forEach((liBgBtn) => {
      liBgBtn.addEventListener("click", () => {
        let distance = 0;
        let index = parseInt(liBgBtn.id);
        let element = document.querySelector(`.${sections[index].className}`);
        let style = window.getComputedStyle(element);
        distance = parseInt(style.getPropertyValue("top"))
        if(nth === 2) {
          distance = parseInt(style.getPropertyValue("top")) -150
        }
        window.scrollTo(0, distance);
      });
    });
  };
  setTopDistance();

  openContainer.addEventListener('click', () => {
    if(open == true ) {  
      openBar1.style.transition = "top .25s"
      openBar1.style.top = '20px'
      openBar3.style.transition = 'bottom .25s'
      openBar3.style.bottom = '20px'
    setTimeout(() => {
      openBar1.style.transition = "top .1s"
      openBar1.style.top = '15px'
      openBar3.style.transition = 'bottom .1s'
      openBar3.style.bottom = '15px'
    }, 250);
    setTimeout(() => {
      openBar1.style.opacity = '0'
      openBar2.style.transition = 'width .1s'
      openBar2.style.width = '60px'
      openBar3.style.transition = 'width .1s'
      openBar3.style.width = '60px'
    }, 350);
    setTimeout(() => {
      openBar2.style.transition = 'transform .35s'
      openBar3.style.transition = 'transform .35s'
      openBar2.style.transform = 'rotate(45deg)'
      openBar3.style.transform = 'rotate(135deg)'
      open = false
      close = true
    }, 500);
    /* sidebar animation open */
    setTimeout(() => {
      sideBar.style.right = '0'
    }, 350);
  }
  
    if(close == true){
      openBar2.style.transform = 'rotate(200deg)'
      openBar3.style.transform = 'rotate(-20deg)'
    setTimeout(() => {
      openBar2.style.transition = 'transform .1s'
      openBar3.style.transition = 'transform .1s'
      openBar2.style.transform = 'rotate(180deg)'
      openBar3.style.transform = 'rotate(0deg)'
    }, 400);
    setTimeout(() => {
      openBar2.style.transition = 'width .1s'
      openBar3.style.transition = 'width .1s'
      openBar2.style.width = '37.5px'
      openBar3.style.width = '50px'
      openBar1.style.opacity = '1'
    }, 600);
    setTimeout(() => {
      openBar1.style.transition = 'top .1s'
      openBar3.style.transition = 'bottom .1s'
      openBar1.style.top = '0px'
      openBar3.style.bottom = '0px'
      open = true
      close = false
    }, 700);

    /* sidebar animation close */
    setTimeout(() => {
      sideBar.style.right = '-600px'
    }, 400);
  }
  }) 

  let thinkBg = document.querySelector('.thinking-bg')
  let meInfo = document.querySelector('.me-info')
  setThinkBg = () => {
    let distance = meInfo.getBoundingClientRect().right
     if (mobile) {
      thinkBg.style.left = `-150px` 
     } else {
      thinkBg.style.left = `${distance - 215}px` 
     }
  }
  setThinkBg()

  let myFiverr = document.querySelector('.my-fiverr')
  let arrow1 = document.querySelector('.arrow-1')
  let arrow2 = document.querySelector('.arrow-2')
  myFiverr.addEventListener('click', () => {
    arrow1.style.marginLeft = '10px'
    setTimeout(() => {
      arrow2.style.marginLeft = '10px'
    }, 50);
    setTimeout(() => {
      arrow1.style.marginLeft = '-5px'
      arrow2.style.marginLeft = '0'
    }, 1500);
  })
  myFiverr.addEventListener('mouseenter', () => {
    if(mobile){
      myFiverr.style.left = 'calc(80% + 20px)'
      myFiverr.style.top = 'calc(135vh + 20px)'
    } 
    else if (tablet) {
      myFiverr.style.left = 'calc(40% + 20px)'
      myFiverr.style.top = 'calc(45vh + 20px)'
    }
    else{
      myFiverr.style.top = '445px'
      myFiverr.style.left = 'calc(182% + 20px)'
    }
  })
  myFiverr.addEventListener('mouseleave', () => {
    if(mobile){
      myFiverr.style.left = '80%'
      myFiverr.style.top = '135vh'
    }
    else if (tablet) {
      myFiverr.style.left = '40%'
      myFiverr.style.top = '45vh'
    }
    else{
      myFiverr.style.top = '425px'
      myFiverr.style.left = '182%'
    }
  })

  let formBtn = document.querySelector('.pure-button');
  let formBtns = document.querySelector('.form-btns');
  formBtns.addEventListener('mouseenter', () => {
    formBtn.style.top = '10px'
    formBtn.style.left = '10px'
  })
  formBtns.addEventListener('mouseleave', () => {
    formBtn.style.top = '0px'
    formBtn.style.left = '0px'
  })
  formBtns.addEventListener('click', () => {
    formBtn.style.color = '#000'
    setTimeout(() => {
      formBtn.style.color = '#fff'
    }, 500);
  })

  let head = document.querySelector('#head');
  head.style.transform = 'rotateZ(0deg)'
    let headMove = () =>{
      head.style.transform = 'rotateZ(-30deg)'
      setTimeout(() => {
        head.style.transform = 'rotateZ(0deg)'
      }, 3500);
      setTimeout(() => {
        headMove()
      }, 6500);
    }
  headMove();

  let noFooterWriting = () => {}
  let footerWriting = () => {
    const text = "made by me.";
    let index = 0;
    let currentText = "";
    let letter = "";
    (function type() {
      currentText = text;
      letter = currentText.slice(0, ++index);
      document.querySelector(".footer-typing").textContent = letter;
      if (letter.length === currentText.length) {
        footerWriting = noFooterWriting 
      } 
      setTimeout(type, 200);
    })();
  }
  footerWriting();

  let allCards = document.querySelectorAll('.card')
  let card = []
  card.push(allCards[0])
  card.push(allCards[1])
  card.push(allCards[2])
  card.push(allCards[3])
  card.push(allCards[4])
  let cardBg = document.querySelectorAll(".card-bg")

   card.forEach( item => {
    item.addEventListener('mouseenter', () => {
      cardBg[item.id].style.opacity = '1'
    })
    item.addEventListener('mouseleave', () => {
      cardBg[item.id].style.opacity = '0'
    })
  }) 
  
  let i = 0;
  let txt = '. . .';
  let speed = 500;

  let cardWriting = () => {
    if (i < txt.length) {
      document.querySelector(".card-dots").innerHTML += txt.charAt(i);
      i++;
      setTimeout(cardWriting, speed);
    } else if (i >= txt.length) {
    document.querySelector(".card-dots").innerHTML = ""
      i = 0;
      cardWriting()
    }
  }
  cardWriting();
  // don't move this from the end 
  if(mobile || tablet){
    projectAnims()
    skillsAnim()
    contactAnim()
  } 
});
