const inputMsgEl = document.querySelector('#inputMsg')
const submitMsgEl = document.querySelector('#submitMsg')
const outputMsgEl = document.querySelector('#outputMsg')


inputMsgEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getMsg()
    }
})

submitMsgEl.addEventListener('click', () => {
    getMsg()
})

const getMsg = () => {
    outputMsgEl.textContent = inputMsgEl.value.toUpperCase()
    inputMsgEl.value = ''
}