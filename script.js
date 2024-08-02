
/*
SCALETTA:

(Milestone 1) (for + if)
1- Generare i numeri  da 1 a 100 e li stampo in console 
2- Stampo 'Fizz' al posto dei multipli di 3 (6)
3- Stampo 'Buzz' al posto dei multipli di 5 (10)
4- Stampo 'target' al posto dei multipli sia di 3 che di 5 (15)

(Milestone 2)
6- Creo un contenitore nel DOM
7- Stampo nel DOM con una tecnica che scelgo (Template literals, InnerHTML) senza CSS

(Milestone 3)
8- Creo un effetto grafico come da esempio nello screenshot
*/

// MILESTON 1

const target = document.getElementById('target') // MILESTONE 2

const targetContainer = document.getElementById('target-container')


for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
        let div = document.createElement('div')
        div.innerHTML = 'FizzBuzz'
        div.classList.add("FizzBuzz", 'flexchild')
        targetContainer.appendChild(div)

    } else if (i % 3 === 0) {
        console.log('Fizz')
        let div = document.createElement('div')
        div.innerHTML = 'Fizz'
        div.classList.add("Fizz", 'flexchild')
        targetContainer.appendChild(div)

    } else if (i % 5 === 0) {
        console.log('Buzz')
        let div = document.createElement('div')
        div.innerHTML = 'Buzz'
        div.classList.add("Buzz", 'flexchild')
        targetContainer.appendChild(div)

    } else {
        console.log(i)
        let div = document.createElement('div')
        div.innerHTML = i
        div.classList.add("Number", 'flexchild')
        targetContainer.appendChild(div)

    }
}




