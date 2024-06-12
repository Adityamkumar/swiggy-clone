const downArrow=document.querySelector(".left-menu i");
const pTag=document.querySelector(".left-menu p")
const content=document.querySelector(".content")
const sideNav=document.querySelector(".side-nav")
const layer=document.querySelector(".layer")
const closeMenu=document.querySelector(".content i")
const foodCont=document.querySelector(".food-img")
const leftArrow=document.querySelector(".first i")
const rightArrow=document.querySelector(".second i")
const cardwrap=document.querySelector(".cardwrap")
const arrowLeft=document.querySelector(".arrow-left i")
const arrowRight=document.querySelector(".arrow-right i")
const junkStore=document.querySelector(".junkstore")
const filterBox=document.querySelector(".filter-box")
const leftMenu=document.querySelector(".left-menu")
const rightMenu=document.querySelector(".right-menu")
const innerBox=document.querySelector(".innerBox")
const innerBoxLast=document.querySelector(".innerBox>.box:last-child")
const signUpPopUp=document.querySelector("#signup")
const signUpBox=document.querySelector(".sign-up")
const closeSignUp=document.querySelector(".top-text i")
const signUpButton=document.querySelector("form button")
const infoName=document.querySelector("form #name")
const infoEmail=document.querySelector("form #email")
const userAccount=document.querySelector(".account")
const userName=document.querySelector(".userAccount #username")
const userEmail=document.querySelector(".userAccount #useremail")
const spanElement=document.querySelector(".userAccount span")
const toolTip=document.querySelector(".tooltip")
const accountIcon=document.querySelector(".right-menu #account")
const form=document.querySelector(".sign-up form")
const userlocation=document.querySelector(".userlocation")
const userAddress=document.querySelector(".left-menu span")
const pInLeftMenu=document.querySelector(".left-menu p")
const spanLeft=document.querySelector(".left-menu span")
const locationIcon=document.querySelector(".locationIcon")
const menuShow=document.querySelector(".menu")
const menuClose=document.querySelector(".flex i")
const sideNavigation=document.querySelector(".sideNav")
const rightNavBarSignUp=document.querySelector(".side-menu ul #signupBox")
function disableScrolling(){
    document.body.style.height="100%"
    document.body.style.overflow="hidden"
}
function enableScrolling(){
    document.body.style.height="0"
    document.body.style.overflow="unset"
}
function sideNavAnimation(){
    downArrow.addEventListener("click",()=>{
        sideNav.style.display="block"
        content.style.opacity="1"
        layer.style.display="block"
        disableScrolling();
     })
     pTag.addEventListener("click",()=>{
         sideNav.style.display="block"
        content.style.opacity="1"
        layer.style.display="block"
        disableScrolling()
     })
     spanLeft.addEventListener("click",()=>{
        sideNav.style.display="block"
        content.style.opacity="1"
        layer.style.display="block"
        disableScrolling()
     })
     layer.addEventListener("click",(e)=>{
         e.stopPropagation()
         sideNav.style.display="none"
         content.style.opacity="0"
         layer.style.display="none"
         enableScrolling()
     })
     closeMenu.addEventListener("click",()=>{
         sideNav.style.display="none"
         content.style.opacity="0"
         layer.style.display="none"
         enableScrolling()
     })
}
sideNavAnimation()

function displaySignUpPage(){
    signUpPopUp.addEventListener("click",()=>{
        signUpBox.style.display="block"
    })
}
displaySignUpPage()

function closeSignUpPage(){
    closeSignUp.addEventListener("click",()=>{
        signUpBox.style.display="none"
        layer.style.display="none"
    })
}
closeSignUpPage()
const foodApi=async ()=>{
    const sendRequest= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const response=await sendRequest.json()
    const foodItem=response.categories;
    foodItem.forEach((item)=>{
        const div=document.createElement("div")
        div.classList.add("food")
        div.innerHTML=`
        <img src="${item.strCategoryThumb}" alt="">
        <p>${item.strCategory}</p>
       `
       foodCont.append(div)
    })
}
foodApi()
let slide=0;
function nextSlide(){
    rightArrow.addEventListener("click",()=>{
        const foodBox=document.querySelectorAll(".food")
            if(foodBox.length-6==slide) return false
            slide=slide+2
            foodBox.forEach((boxes)=>{
                boxes.style.transform=`translateX(-${slide*100}%)`
            })
       
    })
}
nextSlide()

function preSlide(){
    leftArrow.addEventListener("click",()=>{
        const foodBox=document.querySelectorAll(".food")
        if(slide==0) return false
            slide=slide-2
            foodBox.forEach((boxes)=>{
                boxes.style.transform=`translateX(-${slide*100}%)`
            })
       
    })
}
preSlide()

const topRestaurantFood=async()=>{
    const request= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`)
    const data=await request.json();
    const finalData=data.meals;
    finalData.forEach((foodItem)=>{
        let card=document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`
        <div class="foodphoto"><img src="${foodItem.strMealThumb}" alt=""></div>
        <div class="foodname">
        <p>${foodItem.strMeal}</p>
        <p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg> 4.2 .<span>20-25 mins</span></p>
        <p>Maduravoyal,chennai</p>
        </div>
        `
        cardwrap.append(card)
    })
}
topRestaurantFood()

let slideVal=0;
function topRestnextSlide(){
    arrowRight.addEventListener("click",()=>{
        const foodCard=document.querySelectorAll(".card")
           console.log(foodCard);
            if(foodCard.length-3==slideVal) return false
            slideVal=slideVal+3
            foodCard.forEach((topfood)=>{
                topfood.style.transform=`translateX(-${slideVal*100}%)`
            })
       
    })
}
topRestnextSlide()

function topRestpreSlide(){
    arrowLeft.addEventListener("click",()=>{
        const foodCard=document.querySelectorAll(".card")
            if(foodCard.length-4==slideVal) return false
            slideVal=slideVal-3
            console.log(foodCard);
            foodCard.forEach((topfood)=>{
                topfood.style.transform=`translateX(-${slideVal*100}%)`
            })
       
    })
}
topRestpreSlide()

const junkFoodStore=async()=>{
    const request= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data=await request.json();
    const finalData=data.meals;
    finalData.forEach((foodItem)=>{
        let junkCard=document.createElement("div")
        junkCard.classList.add("junkFoodCard")
        junkCard.innerHTML=`
        <div class="mealphoto"><img src="${foodItem.strMealThumb}" alt="">
           <h2>50% OFF UPTO   ₹100</h2>
        </div>
        <div class="mealname">
        <p>${foodItem.strMeal}</p>
        <p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg> 4.2 .<span>20-25 mins</span></p>
        <p>Maduravoyal,chennai</p>
        </div>
        `
        junkStore.append(junkCard)
    })
}
junkFoodStore()


window.addEventListener("wheel",(e)=>{
    if(e.pageY>=1250){
        filterBox.style.position="fixed"
        filterBox.style.top="0%"
        filterBox.style.left="0%"
        filterBox.style.margin="0vw"
        filterBox.style.zIndex="999999"
        filterBox.style.backgroundColor="white"
        filterBox.style.boxShadow="0px 1px 2px #80808061"
        innerBox.style.justifyContent="normal"
        innerBox.style.padding="20px 0px 0px 110px"
        innerBoxLast.style.display="block"
        innerBoxLast.style.display="flex"
    }else if(e.pageY<=1250){
        filterBox.style.position="static"
        filterBox.style.margin="0vw"
        filterBox.style.zIndex="0"
        filterBox.style.boxShadow="0px 0px 0px #80808061"
        innerBox.style.justifyContent="normal"
        innerBox.style.padding="15px 0px 0px 0px"
        innerBoxLast.style.display="none"
    }
})

function signUpPageAnimation(){
    signUpPopUp.addEventListener("click",()=>{
        gsap.from(".sign-up",{
            y:200,
            duration:1.2,
            opacity:0,
            ease: "bounce.out",
        })
    })
}
signUpPageAnimation()

userName.innerText=localStorage.getItem('name')
userEmail.innerText=localStorage.getItem('email')
function formEventHandler(){
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
         const nameValue=infoName.value;
         localStorage.setItem('name',nameValue)
         const emailValue=infoEmail.value;
         localStorage.setItem('email',emailValue)
         userName.innerText=localStorage.getItem('name')
         userEmail.innerText=localStorage.getItem('email')
    })
}
formEventHandler()



function mouseEventHandle(){
    accountIcon.addEventListener("mouseenter",()=>{
        userAccount.style.display="block"
        toolTip.style.display="block"
    })
    accountIcon.addEventListener("mouseleave",()=>{
        userAccount.style.display="none"
        toolTip.style.display="none"
    })
}
mouseEventHandle()


function accountAnimation(){
    accountIcon.addEventListener("mouseenter",()=>{
        gsap.from(".account,.tooltip",{
            y:200,
            duration:0.6,
            opacity:0,
            ease: "circ.inOut",
        })
    })
}
accountAnimation()


//Getting User Current Address--->

const getUserCurrentAddress=async(latitude,longitude)=>{
    let apikey="8251b0fe3dd44df8b5bf7d4071cd2e7d"
    const request=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apikey}`)
    const response=await request.json();
    const fullUserAddress=response.results[0].components;
    const{road,postcode,state}=fullUserAddress
    userAddress.textContent=`${postcode},${state}`   
    pInLeftMenu.textContent=`${road}`
}
userlocation.addEventListener('click',()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
              const{latitude,longitude}=position.coords;
               getUserCurrentAddress(latitude,longitude)
        },
        (error)=>{
            userAddress.textContent=error.message;
        }) 
    }
})

function withoutClicking(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
              const{latitude,longitude}=position.coords;
               getUserCurrentAddress(latitude,longitude)
        },
        (error)=>{
            userAddress.textContent=error.message;
        }) 
    }
    
}
withoutClicking()

userAddress.addEventListener('click',()=>{
    sideNav.style.width="block"
    content.style.opacity="1"
    layer.style.display="block"
    disableScrolling();
})
userlocation.addEventListener("click",()=>{
    sideNav.style.display="none"
    content.style.opacity="0"
    layer.style.display="block"
    layer.style.backdropFilter="blur(10px)"
    layer.style.pointerEvents="none"
    disableScrolling()
    locationIcon.style.display="block"
    setTimeout(() => {
        locationIcon.style.display="none"
        layer.style.display="none"
        layer.style.pointerEvents="unset"
        enableScrolling()
    },6000);
})

//Side NavBar-->

menuShow.addEventListener('click',()=>{
    sideNavigation.style.display="block"
     sideNavigation.style. transition= "all ease-in-out 0.5ms"
  })
  menuClose.addEventListener('click',()=>{
      sideNavigation.style.display="none"
  })
  rightNavBarSignUp.addEventListener('click',()=>{
    signUpBox.style.display="block";
  })





