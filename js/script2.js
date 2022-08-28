if (localStorage !== 'undefined') {
    console.log('ada');
} else {
    console.log('tidak ada');
}
// const obj = [{ nama: 'fahri', umur: '18' }]
// localStorage.setItem('item', JSON.stringify(obj))
// const data = JSON.parse(localStorage.getItem('item'))
// localStorage.removeItem('item')
// data.forEach(a => {
//     console.log(a.umur);

// });

const addButton = document.querySelector('.addButton')
const inputBook = document.querySelectorAll('.inputBook')
let obj = {}
let input = []
function inputNama(nama) {
    obj.name = nama
    // console.log(obj.name);
}
function inputPenulis(penulis) {
    obj.penulis = penulis
    // console.log(obj.name + obj.penulis);
}
function inputTahun(tahun) {
    obj.tahun = tahun

    if (input.length <= 0) {
        if (input.length >= 1) {
            localStorage.removeItem('item')
        }
        input.push(obj)
        localStorage.setItem('item', JSON.stringify(input))

    }
}
function jajal(a) {
    return console.log(a);
}
addButton.addEventListener('click', function () {
    inputBook.forEach((a, b) => {
        if (b === 0) {
            inputNama(a.value)
        } else if (b === 1) {
            inputPenulis(a.value)
        } else if (b === 2) {
            inputTahun(a.value)
        }
    })
})
const data = localStorage.getItem('item')
const date = JSON.parse(data)
console.log(date);
// localStorage.removeItem('item')
