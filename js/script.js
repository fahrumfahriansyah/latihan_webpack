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
const inputJudul = document.querySelector('.inputJudul')
const inputPenulis = document.querySelector('.inputPenulis')
const inputTahun = document.querySelector('.inputTahun')
const inputPilih = Array.from(document.querySelectorAll('.inputPilih'))
const no = document.querySelector(".notSeen")
const yes = document.querySelector(".alreadySeen")
const container1 = document.querySelector('.container1')


let obj = {}
let input = []
let value = []
let dataLoad;
let boolean;
let jumbroton = []
//!pencarian boolean
inputPilih.forEach(a => {
    return a.addEventListener('click', function () {
        boolean = a.value
    })
})
//!tutup pencarian boolean

//! ketika data di load
window.addEventListener('load', function () {
    const data = localStorage.getItem(`data`)
    const date = JSON.parse(data)
    dataLoad = date
    localStorage.removeItem('data')
    localStorage.setItem('data', JSON.stringify(dataLoad))
})
//! tutup ketika data di load

//! ketika input di click
addButton.addEventListener('click', function (a) {
    obj.nama = inputJudul.value
    obj.penulis = inputPenulis.value
    obj.tahun = inputTahun.value
    obj.boolean = boolean
    let jumb = [obj]
    localStorage.setItem('jumbo', JSON.stringify([jumb]))

    for (let a = 0; a <= 10 + 1; a++) {
        if (dataLoad === null || dataLoad === false) {
            if (input.length === 0) {
                if (obj.nama === "" || obj.penulis === "" || obj.tahun === "" || obj.boolean === undefined) {
                    alert('data anda salah')
                    break
                } else {
                    input.push(obj)
                    localStorage.setItem('item', JSON.stringify(obj))
                    const data = localStorage.getItem(`item`)
                    const date = JSON.parse(data)
                    value.push(date)
                    localStorage.setItem(`data`, JSON.stringify(value))
                    localStorage.removeItem(`item`)
                    localStorage.removeItem(`item${input.length}`)

                    break
                }
            }

            else if (input.length === a) {
                if (obj.nama === "" || obj.penulis === "" || obj.tahun === "") {
                    alert('data anda salah')
                    break
                } else {
                    input.push(obj)
                    localStorage.setItem(`item${input.length}`, JSON.stringify(obj))
                    const data = localStorage.getItem(`item${input.length}`)
                    const date = JSON.parse(data)
                    value.push(date)
                    localStorage.setItem(`data`, JSON.stringify(value))
                    localStorage.removeItem(`item${input.length}`)

                    break
                }
            }
        } else {
            if (input.length === 0) {
                if (obj.nama === "" || obj.penulis === "" || obj.tahun === "" || obj.boolean === undefined) {
                    alert('data anda salah')
                    break
                } else {
                    input.push(obj)
                    dataLoad.push(obj)
                    localStorage.setItem('item', JSON.stringify(dataLoad))
                    const data = localStorage.getItem(`item`)
                    const date = JSON.parse(data)
                    date.forEach(a => {
                        value.push(a)
                    })
                    localStorage.setItem(`data`, JSON.stringify(value))
                    localStorage.removeItem(`item`)
                    localStorage.removeItem(`item${input.length}`)
                    break

                }
            } else if (input.length === a) {
                if (obj.nama === "" || obj.penulis === "" || obj.tahun === "") {
                    alert('data anda salah')
                    break
                } else {
                    input.push(obj)
                    value.push(obj)
                    localStorage.setItem(`item${input.length}`, JSON.stringify(value))
                    const data = localStorage.getItem(`item${input.length}`)
                    const date = JSON.parse(data)
                    value = []
                    date.forEach(a => {
                        value.push(a)
                    })
                    localStorage.setItem(`data`, JSON.stringify(value))
                    localStorage.removeItem(`item${input.length}`)

                    break
                }
            }

        }
    }
})
//! tutup ketika input di klik

//! data jumbo
const jumb1 = localStorage.getItem(`jumbo`)
const jumb2 = JSON.parse(jumb1)
let jumtruee = ''
const jumbonya = jumb2

jumbonya.forEach(a => {
    if (a[0].boolean === "true") {
        jumtruee += jumTru(a[0])
        container1.innerHTML = jumtruee
    } else if (a[0].boolean === "false") {
        jumtruee += jumFal(a[0])
        container1.innerHTML = jumtruee
    }
})

//!tutup datajumbo

//! ketika data input masuk ini yang di lakukan
const datanya = localStorage.getItem(`data`)
const data = JSON.parse(datanya)
let benar = ``
let salah = ``
data.forEach((a) => {
    if (a.boolean === "true") {
        benar += dat(a)
        yes.innerHTML = benar
    } else if (a.boolean === "false") {
        salah += dat1(a)
        no.innerHTML = salah
    }



})
function dat(a) {
    return `<div class="data1" style="margin:5px;">
    <h1 style="margin-bottom:5px ;">Sudah Di Baca</h1>
            <div class="value">
                <ul>
                    <li>
                        <h1>Judul: ${a.nama}</h1>
                        <h3>penulis: ${a.penulis}</h3>
                        <h3>tahun: ${a.tahun}</h3>
                    </li>
                    <li><button class="btn hapus">hapus</button></li>
                </ul>
            </div>
</div>`
}
function dat1(a) {
    return `<div class="data2" style="margin:5px;">
    <h1 style="margin-bottom:5px ;">Belom di Baca</h1>
            <div class="value">
                <ul>
                    <li>
                        <h1>Judul: ${a.nama}</h1>
                        <h3>penulis: ${a.penulis}</h3>
                        <h3>tahun: ${a.tahun}</h3>
                    </li>
                    <li><button class="btn1 hapus">hapus</button></li>
                    <li><button class="btn2 baca">sudah di Baca</button></li>

                </ul>
            </div>
</div>`
}
//! tutup ketika data masuk
function jumTru(a) {

    return ` <div class="jumbroton">
    <ul>
        <li>nama: ${a.nama}</li>
        <li>judul: ${a.penulis}</li>
        <li class="liBtn1">tahun: ${a.tahun}</li>
        <li class="liBtn2"> <button class="hapus">
                hapus </button>
        </li>
    </ul>
</div>`
}
function jumFal(a) {

    return ` <div class="jumbroton">
    <ul>
        <li>nama: ${a.nama}</li>
        <li>judul: ${a.penulis}</li>
        <li class="liBtn1">tahun: ${a.tahun}</li>
        <li class="liBtn2"> <button class="hapus">
                hapus </button>
        </li>
        <li style="display: inline-block; text-align: end;"><button class="baca">Sudah di baca</button></li>
    </ul>
</div>`
}

const hapus = document.querySelector('.hapus')
hapus.addEventListener('click', function (a) {
})
// const jumb1 = localStorage.getItem(`item${input.length}`)
// const jumb2 = JSON.parse(data)
// console.log(jumb2);