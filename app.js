const english=document.querySelector('#english')
const kyrgyzcha=document.querySelector('#kyrgyzcha')
const koshuuBtn=document.querySelector('#kosh')
const list=document.querySelector('#list')

let transWords=[]

function createTrans(soz, callback) {
    const liTag=document.createElement('li')
    liTag.innerHTML=soz
    callback(liTag)
    const delBtn=document.createElement('button')
    liTag.appendChild(delBtn)
    delBtn.innerHTML='x'

    delBtn.onclick=()=>{
        liTag.remove()
    }
}

function addSoz(word) {
    list.appendChild(word)
}


koshuuBtn.onclick=()=>{
    

    if(english.value.trim() && kyrgyzcha.value.trim()){
        const getWords=JSON.parse(localStorage.getItem('sozdor'))
        
        createTrans(`${english.value}-${kyrgyzcha.value}`, addSoz)
        transWords.push(english.value, kyrgyzcha.value)
        console.log(transWords);
        const transWordsLS=JSON.stringify(transWords)
        const dataWords=localStorage.setItem('sozdor', transWordsLS)
        console.log(dataWords);
        english.value=''
        kyrgyzcha.value=''
        
    } else {
        english.style.borderColor='red'
        kyrgyzcha.style.borderColor='red'
    }

}

