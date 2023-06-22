import { gsap } from "gsap";
import { locationDB } from "../database/DB";
import { createElement } from "./utilities/createElem";

// ! - важный момент с 43:10
function locationCard(){
    class CardElem{
        constructor(title, p, imgName, parentSelector, classElem){
            this.title = title;
            this.p = p;
            this.imgName = imgName;
            this.parent = document.querySelector(parentSelector);
            this.classElem = classElem;
            
        }
        render(){
            const titleElem = createElement('h3',{
                className: 'location__title',
                textContent: this.title
            });

            const textElem = createElement('p',{
                className: 'location__descr',
                textContent: this.p
            });

            const imgWrap = createElement('picture',{
                className:'location__img',
                innerHTML: `
                <source srcset="section-location/${this.imgName}_laptop.webp" type="image/webp" media="(min-width: 1024px)">
                <source srcset="section-location/${this.imgName}_laptop.jpg" media="(min-width: 1024px)">
                <source srcset="section-location/${this.imgName}_tablet.webp" type="image/webp" media="(min-width: 768px)">
                <source srcset="section-location/${this.imgName}_tablet.jpg" media="(min-width: 768px)">
                <source srcset="section-location/${this.imgName}.webp" type="image/webp">
                <img loading="lazy" src="section-location/${this.imgName}.jpg" alt="${this.title}">
                `
            });

            const element = createElement('li',{
                className: `${this.classElem} location__item--${this.imgName}`, 
            },{
                append: createElement('div',{
                    className: 'location__content'
                },{
                    appends: [
                        titleElem,
                        textElem
                    ]
                })
            });

            // element.addEventListener('mouseover', ()=>{
            //     element.append(createElement('div',{
            //         className: 'location__item--fragment'
            //     }));

            //     const title = element.querySelector('.location__title');
            //     title.style.cssText = `
            //         position: static;
            //         transform: rotate(0);
            //         color: #FFAA05;
            //         `;
            //     // title.style.transform = 'rotate(2deg)';

            //     const text = element.querySelector('.location__descr');
            //     text.style.transform = 'translateY(24px)';
            //     text.style.opacity = '1';

            //     let section = document.querySelector('.location');
            // });

            // element.addEventListener('mouseout', ()=>{
            //     const title = element.querySelector('.location__title');
            //     title.style.cssText = `
            //         position: absolute;
            //         transform: rotate(270deg) translate(-50%,-50%);
            //         color: #FFFFFF;
            //         `;

            //     const text = element.querySelector('.location__descr');
                
            //     text.style.opacity = '0';
            //     text.style.transform = 'translateY(-200%)';
                

            //     const remove = element.querySelector('.location__item--fragment');
            //     remove.remove();
            // });
            const mediaQueryXL = window.matchMedia('(min-width: 1280px)');
            const mediaQueryLaptop = window.matchMedia('(min-width: 1024px)');

            const contentWrap = document.querySelector('.location__item');
            
            const tl = gsap.timeline(
                {
                    paused: true,

                }
            );

            tl.to(
                    contentWrap,
                    {
                        opacity: 0,
                        duration: 0.5
                    }
            )
            .to(contentWrap,
                {
                    transform: 'none',
                    left: 0,
                    bottom: 0,
                    top: 'auto',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    duration: 0
                }
            )
            .to(titleElem,{
                whiteSpace: 'unset',
                hyphens: 'auto',
                color: '#FFAA05',
                marginBottom: mediaQueryXL.matches ? '40px' : '24px',
                duration: 0
            })
            .to(textElem,{
                opacity: 1,
                duration: 0.5
            });
            // ! - 54:00
            element.addEventListener('mouseenter',()=>{
                if(mediaQueryLaptop.matches){

                }
            });

            element.addEventListener('mouseleave',()=>{
                if(mediaQueryLaptop.matches){

                }
            });
            
            this.parent.append(element);
        }
    }

    locationDB.forEach(elem=>{
        const card = new CardElem(elem.title, elem.text, elem.imgName, '.location__list','location__item').render();
    });
}



export default locationCard;