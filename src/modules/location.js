import { document } from "postcss";
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
            // this.renderImg();
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
                className: this.classElem,
            },{
                appends:  [titleElem, textElem,imgWrap],
                cb(elem){
                        elem.addEventListener('mouseover', function(){
                            this.style.cssText = `
                                border: 1px solid red;
                            `;
                            
                        });
                        elem.addEventListener('mouseleave', function(){
                            this.style.cssText = `
                                border: none;
                            `;
                        });
                    
                    
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