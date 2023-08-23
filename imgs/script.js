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
    let fetchData;

    // Fetching data from local json file 
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data.watchData)
        len = data.watchData.length;
        fetchData = data;
        // data.watchData.forEach((watchObj, ind) => {
            
        // })
console.log(fetchData)
        // demo
        watchNameEle.innerText = fetchData.watchData[0].name;
        watchDescEle.innerText = fetchData.watchData[0].desc;
        watchPriceEle.innerText = fetchData.watchData[0].price;
       
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
    nextBtn.addEventListener('click', () => {
        watchNameEle.innerText = fetchData.watchData[ind].name;
        watchDescEle.innerText = fetchData.watchData[ind].desc;
        watchPriceEle.innerText = fetchData.watchData[ind].price;
        console.log(ind)
        if(ind == len - 1){
            ind = 0;
        }else{
            ind++;
        }

        
    });

    prevBtn.addEventListener('click', () => {
        watchNameEle.innerText = fetchData.watchData[ind].name;
        watchDescEle.innerText = fetchData.watchData[ind].desc;
        watchPriceEle.innerText = fetchData.watchData[ind].price;
        console.log(ind)
        if(ind == 0){
            ind = len - 1;
        }else{
            ind--;
        }

       
    
    });

    // Create the dots
    createDots(3, 3);
});




