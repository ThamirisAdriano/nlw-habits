const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form) //novo objeto colocamos o form
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add(){
     const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    // const today = '20/01'
    const dayExists = nlwSetup.dayExists(today) //dayExists vem da biblioteca

    if(dayExists){
        alert('Dia já incluso')
        return 
    }

    
    nlwSetup.addDay(today) //addDay vem da biblioteca nlw
}

function save(){
    localStorage.setItem('NlwSetup', JSON.stringify(nlwSetup.data)) 
    ///guardar dados no localstorage local
}


// const data = {
//     run: ['01-01', '01-02', '01-06', '01-07', '01-08'],
//     // water: ['01-01', '01-02', '01-06'],
//     // food: ['01-01', '01-02', '01-06']
// }

const data = JSON.parse(localStorage.getItem('NlwSetup')) || {} //|| {} serve para quando não existir dados ainda (***ou objeto vazio)

nlwSetup.setData(data)
nlwSetup.load(data)