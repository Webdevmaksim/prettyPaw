import { gsap } from "gsap";

export const menuControl = ()=>{
    const navBtn = document.querySelector('.navigation__btn'),
        navList = document.querySelector('.navigation__list'),
        navItems = document.querySelectorAll('.navigation__item');

    const tl = gsap.timeline({
        paused: true
    });

    tl.fromTo(navList, {
        opacity: 0,
        display: 'none'
    },{
        opacity: 1,
        display: 'block'
    });

    navItems.forEach((elem,i)=>{
        const x = i % 2 ? 500 : -500;
        tl.from(elem, {
            opacity: 0,
            x,
            duration: 1
        }, '-=1');
    });

    const openMenu = ()=>{
        navBtn.classList.add('navigation__btn--active');
        tl.play();
    };

    const closeMenu = (done)=>{
        tl.reverse();
        
    };

    tl.eventCallback('onReverseComplete', ()=>{
        navBtn.classList.remove('navigation__btn--active');
    });
    
    navBtn.addEventListener('click', ()=>{
        if(navBtn.matches('.navigation__btn--active')){
            closeMenu();
        }else{
            openMenu();
        }
    });

    const checkScreenSize = (ev)=>{
        if(ev.matches){
            
            gsap.set(navList,{
                opacity: 1,
                display: 'flex'
            });

            navItems.forEach((elem,i)=>{
                const x = i % 2 ? 500 : -500;
                gsap.set(elem, {
                    opacity: 1,
                    x: 0
                });
            });
        }else{
            
            gsap.set(navList,{
                opacity: 0,
                display: 'none'
            });

            navItems.forEach((elem,i)=>{
                const x = i % 2 ? 500 : -500;
                gsap.set(elem, {
                    opacity: 0,
                    x,
                    duration: 1
                });
            });
        }
    };
    const mediaQuery = window.matchMedia('(min-width: 1280px)');

    mediaQuery.addEventListener('change', checkScreenSize);
    checkScreenSize(mediaQuery);
};