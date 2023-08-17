const bikeContainer = document.querySelector('.bikeContainer');
const bikeCap = document.querySelector('.footerBx .box:first-child > h3');
const bikeSpeed = document.querySelector('.footerBx .box:last-child > h3');

let commonPath = `./imgs`;
const bikeImgsUrl = [
    `${commonPath}/motorbike-1.png`,
    `${commonPath}/motorbike-2.png`,
    `${commonPath}/motorbike-3.png`,
    `${commonPath}/motorbike-4.png`,
    `${commonPath}/motorbike-5.png`,
    `${commonPath}/motorbike-6.png`,
];

// console.log(bikeImgsUrl[0])

const bikeNames = [
    "Confederate G2 P51 Combat Fighter",
    "KTM 890 DUKE R 2023",
    "Bajaj Pulsar NS125",
    "Ninja Kawasaki Plus", 
    "Mahindra Kiloksi Rider",
    "Yamaha FZ-364"
];

const bikeDescriptions = [
    "There is simply no substitute for Quality, and nothing says strength and quality quite like bullet",
    "Require much less parking space than cars. Finding a parking spot is easier, and it's often free or significantly cheaper.",
    "Cycling is a great form of exercise. Regular cycling helps improve cardiovascular health, strengthen muscles, and maintain a healthy weight",
    "create a sense of community as you interact more with your surroundings and fellow cyclists.",
    "Simpler mechanics and require less maintenance compared to cars.",
    "Allows you to experience nature up close, enjoy fresh air, and connect with the environment around you.",
];

const bikePrices = ["243,000", "354,000", "154,000", "34,000", "10,000", "94,000"];
const engCapicities = ["2,123", "4,003", "6,422", "9,981", "4,352", "7,543"];
const bikeSpeeds = [165, 185, 280, 320, 290, 420];

let currInd = 0;
const changeBike = (arrowDir) => {
    if(arrowDir == 'prev'){
        currInd = (currInd - 1 + bikeNames.length) % bikeNames.length;
    }else {
        currInd = (currInd + 1) % bikeNames.length;
    }

    gsap.to(bikeContainer, {
        duration: 0.4,
        opacity: 0,
        y: 20,
        onComplete: () => {
            // Grabing DOM elements
            let heading = bikeContainer.querySelector('.contentBx .mainHeading');
            let text = bikeContainer.querySelector('.contentBx p');
            let bikeImg = bikeContainer.querySelector('.imgBx img');
            let bikePrice = bikeContainer.querySelector('.rightBx .mainHeading')
            let numBtns = document.querySelectorAll('.btn-num');

            // Update the content after the animation
            heading.textContent = bikeNames[currInd];
            text.textContent = bikeDescriptions[currInd];
            bikeImg.src = bikeImgsUrl[currInd];
            bikePrice.textContent = "$"+bikePrices[currInd];    
            bikeCap.textContent = engCapicities[currInd];
            bikeSpeed.textContent = bikeSpeeds[currInd];

            // Adding animation to different elements
            gsap.fromTo(bikeContainer, { opacity: 0, y: -20 }, { duration: 0.5, opacity: 1, y: 0 });

            
            gsap.fromTo(heading, { opacity: 0, x: -20 }, { duration: 0.6, opacity: 1, x: 0});
            gsap.fromTo(text, { opacity: 0, x: -60 }, { duration: 0.6, opacity: 1, x: 0, delay: 0.2});
            gsap.fromTo(bikeImg, { opacity: 0, y: -50 }, { duration: 0.6, opacity: 1, y: 0, delay: 0.3});
            gsap.fromTo(bikePrice, { opacity: 0, x: 70 }, { duration: 0.6, opacity: 1, x: 0, delay: 0.4});
            gsap.fromTo(bikeCap, { opacity: 0, y: 20 }, { duration: 0.6, opacity: 1, y: 0, delay: 0.5});
            gsap.fromTo(bikeSpeed, { opacity: 0, y: 20 }, { duration: 0.6, opacity: 1, y: 0, delay: 0.6});

            // for(let i = 0; i < numBtns.length; i++){
            //     if(numBtns[i].textContent.slice(numBtns[i].length - 1, numBtns[i].length) == currInd + 1){
            //         gsap.fromTo(numBtns[i], { scale: 0.3 }, { duration: 0.4, scale: 1});
                    
            //         if(currInd > 0 && currInd < numBtns.length - 1) {
            //             numBtns[currInd - 1].style.display = "block";
            //             numBtns[currInd + 1].style.display = "block";

            //             console.log(numBtns[currInd + 1], numBtns[currInd - 1])

            //         }

            //     }else{
            //         numBtns[i].classList.remove('active');
                    
            //     }
            // }


            for (let i = 0; i < numBtns.length; i++) {
                numBtns[i].style.display = "none";
                if(numBtns[i].textContent.slice(numBtns[i].length - 1, numBtns[i].length) == currInd + 1){
                    gsap.fromTo(numBtns[i], { scale: 0.3 }, { duration: 0.4, scale: 1});
                }            

                numBtns[currInd].classList.add('active')
            }
            numBtns[currInd].style.display = "inline-block";
            if (currInd > 0) {
                numBtns[currInd - 1].style.display = "inline-block";
                numBtns[currInd - 1].classList.remove('active')
            }
            if (currInd < numBtns.length - 1) {
                numBtns[currInd + 1].style.display = "inline-block";
                numBtns[currInd + 1].classList.remove('active')
            }
        }    
    });
}

document.querySelector('.slider-btn-prev').addEventListener('click', () => changeBike('prev'));
document.querySelector('.slider-btn-next').addEventListener('click', () => changeBike('next'));



