var ul=document.querySelector('.show')
var success1=document.querySelector('.success')
var warning1=document.querySelector('.warning')
var error1=document.querySelector('.error')
function createsuccess(){
    var li=document.createElement('li')
    li.innerHTML=`<div class="div"><i class="fas fa-check-circle"></i>
    <span>This is a success message !</span></div>
    <div class="success_press"></div>
    `
    ul.appendChild(li)
    li.style.background='rgba(0, 128, 0, .4)'
    li.classList.add('success_border')
    setTimeout(function(){
        li.style.animation=' countdown 1s ease forwards'
    },4000)
    setTimeout(function(){
       li.remove()
     },6000)
}
function createwarning(){
    var li=document.createElement('li')
    li.innerHTML=`<i class="fas fa-exclamation-circle"></i>
    <span> This is a warning message !</span>
    <div class="warning_press"></div>
    `

    ul.appendChild(li)
    li.style.background='rgba(255, 165, 0,.4)'
    li.classList.add('warning_border')
    setTimeout(function(){
        li.style.animation=' countdown 1s ease forwards'
    },4000)
    setTimeout(function(){
       li.remove()
     },6000)
}
function createerror(){
    var li=document.createElement('li')
    li.innerHTML=`<i class="fas fa-exclamation-triangle"></i>
    <span>This is a error message !</span>
    <div class="error_press"></div>
    `
    ul.appendChild(li)
    li.style.background='rgba(255,0, 0, .4)'
    li.classList.add('error_border')
    setTimeout(function(){
        li.style.animation=' countdown 1s ease forwards'
    },4000)
    setTimeout(function(){
       li.remove()
     },6000)
}
success1.onclick=function(){
    createsuccess();
    
}
warning1.onclick=function(){
    createwarning()
}
error1.onclick=function(){
    createerror()
}