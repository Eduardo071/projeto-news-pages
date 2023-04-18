let container = document.querySelector('body')
let selectTopics = document.getElementById('topics')
let containerContentTopic = document.querySelector('.container-illustration')
let closeButton = document.querySelector('#close-button')
let defaultOption = document.getElementById('defaultOption').value

console.log(containerContentTopic.classList)
selectTopics.addEventListener('change', (event) => {

    let selectedOption = event.target.value

    if(selectedOption === 'crime-no-Brasil' && containerContentTopic.classList.contains('close')){
        containerContentTopic.classList.remove('close')
        container.classList.add('backFreeze')
    }else return
})

closeButton.addEventListener('click', () => {
    if( !containerContentTopic.classList.contains('close')){
        containerContentTopic.classList.add('close')
        container.classList.remove('backFreeze')
        selectTopics.value = defaultOption
    }
})