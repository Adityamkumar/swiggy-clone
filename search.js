const downArrow=document.querySelector(".left-menu i");
const pTag=document.querySelector(".left-menu p")
const content=document.querySelector(".content")
const sideNav=document.querySelector(".side-nav")
const layer=document.querySelector(".layer")
const closeMenu=document.querySelector(".content i")
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
const locationIcon=document.querySelector(".locationIcon")
const foodCont=document.querySelector(".food-imgs")
const searchBox=document.querySelector(".searchfood input")
const foodContainer=document.querySelector(".allfoodItems")
const slider=document.querySelector(".food-items")
const text=document.querySelector(".foodtext")
const menuShow=document.querySelector(".menu")
const menuClose=document.querySelector(".flex i")
const sideNavigation=document.querySelector(".sideNav")
const spanLeft=document.querySelector(".left-menu span")
const rightNavBarSignUp=document.querySelector(".side-menu ul #signupBox")



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

function disableScrolling(){
    document.body.style.height="100%"
    document.body.style.overflow="hidden"
}
function enableScrolling(){
    document.body.style.height="0"
    document.body.style.overflow="unset"
}

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

const getUserCurrentAddress=async(latitude,longitude)=>{
    let apikey="8251b0fe3dd44df8b5bf7d4071cd2e7d"
    const request=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apikey}`)
    const response=await request.json();
    const fullUserAddress=response.results[0].components;
    console.log(fullUserAddress);
    const{suburb,postcode,state,_normalized_city}=fullUserAddress
    userAddress.textContent=`${postcode},${state},${_normalized_city}`   
    pInLeftMenu.textContent=`${suburb}`
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
    sideNav.style.display="block"
    content.style.opacity="1"
    layer.style.display="block"
    disableScrolling();
})
userlocation.addEventListener("click",()=>{
    sideNav.style.display="none"
    content.style.opacity="0"
    layer.style.display="block"
    layer.style.backdropFilter="blur(10px)"
    locationIcon.style.display="block"
    layer.style.pointerEvents="none"
    disableScrolling()
    setTimeout(() => {
        locationIcon.style.display="none"
        layer.style.display="none"
        enableScrolling()
    },6000);
})

//Api Calling

const foodApi=async ()=>{
    const sendRequest= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const response=await sendRequest.json()
    const foodItem=response.categories;
    foodItem.forEach((item)=>{
        const div=document.createElement("div")
        div.classList.add("foods")
        div.innerHTML=`
        <img src="${item.strCategoryThumb}" alt="">
        <p>${item.strCategory}</p>
       `
       foodCont.append(div)
    })
}
foodApi()


//Search Implementation-->
//Food Finding on Search-->
//Api calling--->

const findFood=async(searchValue)=>{
    const sendingRequest=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    const gettingResponse=await sendingRequest.json();
    const data=gettingResponse.meals
    data.forEach((meals)=>{
        console.log(meals);
        const meal=document.createElement('div');
        meal.classList.add('meals');
        meal.innerHTML=`
        <div class="mealimg"><img src=${meals.strMealThumb} alt=""></div>
        <div class="mealname"><p>${meals.strMeal}</p><span>Dish</span></div>
        `
        foodContainer.append(meal)
    })    
}

searchBox.addEventListener('keyup',(e)=>{
   const inputValue=e.target.value;
  if(inputValue!==""){
    findFood(inputValue)
    slider.style.display="none"
    text.style.display="none"
  }else if(inputValue===""){
    foodContainer.innerHTML=" "
    slider.style.display="block"
    text.style.display="block"
  }
})

//Side navigation bar--->

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
