if (localStorage !== 'undefined') {
    console.log('ada');
} else {
    console.log('tidak ada');
}

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
let lo = []
let complete = []

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
//? ada dua jenis data ketika data di load dan ketika data kosong di input click ini
addButton.addEventListener('click', function () {
    obj.id = Math.floor(Math.random() * 1000 + 100 * 1000 / 10 * Math.random() * 1000 + 100 * 1000 / 10)
    obj.title = inputJudul.value
    obj.author = inputPenulis.value
    obj.year = inputTahun.value
    obj.isComplete = boolean
    let jumb = obj
    localStorage.setItem('jumbo', JSON.stringify(jumb))

    for (let a = 0; a <= 10 + 1; a++) {
        //? sebelum data di load
        if (dataLoad === null || dataLoad === false) {

            if (input.length === 0) {
                if (obj.title === "" || obj.author === "" || obj.year === "" || obj.isComplete === undefined) {
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

                if (obj.title === "" || obj.author === "" || obj.year === "") {
                    alert('data anda salah')
                    break
                } else {
                    function verivikasi(dat) {
                        const datanya1 = localStorage.getItem(`data`)
                        const data1 = JSON.parse(datanya1)
                        const data = data1.find((a) => a.title === dat.title)
                        return data
                    }
                    const Verivikasi1 = verivikasi(obj)
                    if (Verivikasi1) {
                        alert('judul buku sudah ada')
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
            }
            //? sesudah data di load
        } else {
            if (input.length === 0) {
                if (obj.title === "" || obj.author === "" || obj.year === "" || obj.isComplete === undefined) {
                    alert('data anda salah')
                    break
                } else {
                    function verivikasi2(dat) {
                        const datanya1 = localStorage.getItem(`data`)
                        const data1 = JSON.parse(datanya1)
                        const data = data1.find((a) => a.title === dat.title)
                        return data
                    }
                    const Verivikasi2 = verivikasi2(obj)
                    if (Verivikasi2) {
                        alert('judul buku sudah ada')
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
                }
            } else if (input.length === a) {
                if (obj.title === "" || obj.author === "" || obj.year === "") {
                    alert('data anda salah')
                    break
                } else {
                    function verivikasi3(dat) {
                        const datanya1 = localStorage.getItem(`data`)
                        const data1 = JSON.parse(datanya1)
                        const data = data1.find((a) => a.title === dat.title)
                        return data
                    }
                    const Verivikasi3 = verivikasi3(obj)
                    if (Verivikasi3) {
                        alert('judul buku sudah ada')
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
    }
})
//! tutup ketika input di klik

//! data jumbo
const jumb1 = localStorage.getItem(`jumbo`)
const jumb2 = JSON.parse(jumb1)
let jumtruee = ''
const jumbonya = jumb2
function namaJumDel(dat) {
    const datanya1 = localStorage.getItem(`data`)
    const data1 = JSON.parse(datanya1)
    const data = data1.find((a) => a.id === dat.id)
    return data
}

const dataAda = namaJumDel(jumbonya)
if (dataAda) {
    if (jumbonya.isComplete === "true") {
        jumtruee += jumTru(jumbonya)
        container1.innerHTML = jumtruee
    } else if (jumbonya.isComplete === "false") {
        jumtruee += jumFal(jumbonya)
        container1.innerHTML = jumtruee
    }
}
function jumTru(a) {

    return ` <div class="jumbroton">
    <ul>
        <li>nama: ${a.title}</li>
        <li>judul: ${a.author}</li>
        <li class="liBtn1">tahun: ${a.year}</li>
        <li class="liBtn2"> <button class="hapus" name="${a.title}">
                hapus </button>
        </li>
    </ul>
</div>`
}
function jumFal(a) {

    return ` <div class="jumbroton">
    <ul>
        <li>nama: ${a.title}</li>
        <li>judul: ${a.author}</li>
        <li class="liBtn1">tahun: ${a.year}</li>
        <li class="liBtn2"> <button class="hapus" name="${a.title}">
                hapus </button>
        </li>
        <li style="display: inline-block; text-align: end;"><button class="baca" style="background-color: rgb(5, 130, 22);" name="${a.title}" >Sudah di baca</button></li>
    </ul>
</div>`
}
//!tutup datajumbo

// //! ketika data input masuk ini yang di lakukan
const datanya = localStorage.getItem(`data`)
const data = JSON.parse(datanya)
let benar = ``
let salah = ``
data.forEach((a) => {
    if (a.isComplete === "true") {
        benar += dat(a)
        yes.innerHTML = benar
    } else if (a.isComplete === "false") {
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
                        <h1>Judul: ${a.title}</h1>
                        <h3>penulis: ${a.author}</h3>
                        <h3>tahun: ${a.year}</h3>
                    </li>
                    <li><button class="btn hapus" name="${a.title}" >hapus</button></li>
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
                        <h1>Judul: ${a.title}</h1>
                        <h3>penulis: ${a.author}</h3>
                        <h3>tahun: ${a.year}</h3>
                    </li>
                    <li><button class="btn1 hapus" name="${a.title}">hapus</button></li>
                    <li><button class="btn2 baca" name="${a.title}">sudah di Baca</button></li>

                </ul>
            </div>
</div>`
}
// //! tutup ketika data masuk

// //! ketika tombol diklik

function namaData(dat) {
    const datanya1 = localStorage.getItem(`data`)
    const data1 = JSON.parse(datanya1)
    const data = data1.find((a) => a.title === dat)
    return data
}

const hapus = document.querySelectorAll('.hapus')
hapus.forEach(a => {
    a.addEventListener('click', function (b) {
        const ko = a.getAttribute('name')
        const dataHapus = namaData(ko)
        const datanya1 = localStorage.getItem(`data`)
        const data1 = JSON.parse(datanya1)

        data1.forEach((a, b) => {
            if (a.title === dataHapus.title) {
            } else {
                const datanya2 = localStorage.getItem(`data`)
                const data2 = JSON.parse(datanya2)
                lo.push(data2[b])
            }

        })
        let cons = confirm('Apakah anda yakin?')
        if (cons) {
            alert('buku telah di hapus silakan refresh halaman')
            localStorage.removeItem('data')
            localStorage.setItem('data', JSON.stringify(lo))
            b.preventDefault()
            lo = []
        }
    })
})
//! tutup
// ! ketika tombol sudah di baca di klik
function namaIsComplete(dat) {
    const datanya1 = localStorage.getItem(`data`)
    const data1 = JSON.parse(datanya1)
    const data = data1.find((a) => a.title === dat)
    return data
}
const baca = document.querySelectorAll('.baca')
baca.forEach(a => {
    a.addEventListener('click', function () {
        const ubah = a.getAttribute('name')
        const isComplete = namaIsComplete(ubah)
        const datanya1 = localStorage.getItem(`data`)
        const data1 = JSON.parse(datanya1)
        let completeJumb = ``
        data1.forEach((a, b) => {
            if (a.title === isComplete.title) {
                a.isComplete = "true"
                completeJumb += jumTru(a)
                complete.push(a)
            } else {
                const datanya2 = localStorage.getItem(`data`)
                const data2 = JSON.parse(datanya2)
                complete.push(data2[b])

            }
        })
        container1.innerHTML = completeJumb
        let consfirm = confirm('Apakah Buku Sudah Dibaca ?')
        if (consfirm) {
            alert('refresh halaman')
            console.log(complete);
            localStorage.removeItem('data')
            localStorage.setItem('data', JSON.stringify(complete))
            complete = []
        }

    })

})
//! tutup halaman baca
// ! ketika input search di  gunakan
const inputSearch = document.querySelector('.inputSearch')
const buttonSearch = document.querySelector('.buttonSearch')

function namaSearch(dat) {
    const datanya1 = localStorage.getItem(`data`)
    const data1 = JSON.parse(datanya1)
    const data = data1.find((a) => a.title === dat)
    return data
}

buttonSearch.addEventListener('click', function (a) {
    if (inputSearch.value) {
        const Search = namaSearch(inputSearch.value)
        if (Search) {
            const datanya1 = localStorage.getItem(`data`)
            const data1 = JSON.parse(datanya1)
            data1.forEach(a => {
                if (a.title === Search.title) {
                    localStorage.removeItem('jumbo')
                    localStorage.setItem('jumbo', JSON.stringify(a))
                }
            })

        } else {
            alert('data anda salah')
        }
    } else {
        alert('tuliskan pencarian')
    }

})

//! tutup ketika input search di gunakan
