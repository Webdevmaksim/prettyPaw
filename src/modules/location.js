import { locationDB } from "../database/DB";
import { createElement } from "./utilities/createElem";


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
                appends:  [
                    titleElem, 
                    textElem, 
                    // imgWrap
                ],
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

            this.parent.append(element);
        }
        
    }

    locationDB.forEach(elem=>{
        const card = new CardElem(elem.title, elem.text, elem.imgName, '.location__list','location__item').render();
    });
}



export default locationCard;