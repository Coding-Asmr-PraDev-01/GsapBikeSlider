document.addEventListener('DOMContentLoaded', () => {
    // Getting DOM Elements
    const menuELe = document.querySelector('.menuBx');
    const watchNameEle = document.querySelector('.watch-name');
    const watchPriceEle = document.querySelector('.watch-price');
    const watchDescEle = document.querySelector('.watch-desc');
    const btnEle = document.querySelectorAll('.btn');
    let prevBtn = btnEle[0].classList.contains('prevBtn') ? btnEle[0] : undefined;
    let nextBtn = btnEle[1].classList.contains('nextBtn') ? btnEle[1] : undefined;
    let len;
    console.log(prevBtn, nextBtn)

    // Fetching data from local json file 
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data.watchData)
        len = data.watchData;
        // data.watchData.forEach((watchObj, ind) => {
            
        // })

        // demo
        watchNameEle.innerText = data.watchData[0].name;
        watchDescEle.innerText = data.watchData[0].desc;
        watchPriceEle.innerText = data.watchData[0].price;
       
    })


    .catch(err => console.log(err))

    // Creating dots for menu and shape
    const createDots = (rowNum, ColNum) => {
        for(let i = 0; i < (rowNum * ColNum); i++){
            const spanEl = document.createElement('span');
            spanEl.classList.add('dot');
            
            if(i % rowNum == 0){
                var divEle = document.createElement('div');
            }
            divEle.appendChild(spanEl);


            menuELe.appendChild(divEle);
        }
    }

    // Slider
    let ind = 0;
    prevBtn.addEventListener('click', () => {
        if(ind == len - 1){
            ind = 0;
        }else{
            ind++;
        }

        watchNameEle.innerText = data.watchData[ind].name;
        watchDescEle.innerText = data.watchData[ind].desc;
        watchPriceEle.innerText = data.watchData[ind].price;
        
    });

    nextBtn.addEventListener('click', () => {

    });

    // Create the dots
    createDots(3, 3);
});




