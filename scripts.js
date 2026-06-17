const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumAll = document.querySelector(".sum-all")
const buttonFilter = document.querySelector(".filter-all")

let myLi = ""

function showAll() {
    myLi = ""

    menuOptions.forEach(product => {
        myLi += `
         <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price.toFixed(2)}</p>
        </li>
    `
    })

    list.innerHTML = myLi
}

const productsWithDiscount = menuOptions.map(product => {
    return {
        ...product,
        price: product.price * 0.9
    }
})

function mapAllItens() {
    myLi = ""

    productsWithDiscount.forEach(product => {
        myLi += `
         <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price.toFixed(2)}</p>
        </li>
    `
    })

    list.innerHTML = myLi

}

function sumAllItens() {
    const totalValue = menuOptions.reduce((accumulator, product) => {
        return accumulator + product.price
    }, 0)

     list.innerHTML= `
         <li class="total-card">
            <p>Valor total dos produtos</p>
            <p class="item-price">R$ ${totalValue.toFixed(2)}</p>
        </li>
    `
}

function filterVeganItens() {
    const veganProducts = menuOptions.filter(product => product.vegan)
    myLi = ""

    veganProducts.forEach(product => {
        myLi += `

        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price.toFixed(2)}</p>    
        </li>
        `
    })

    list.innerHTML = myLi

}

buttonShowAll.addEventListener("click", showAll)
buttonMapAll.addEventListener("click", mapAllItens)
buttonSumAll.addEventListener("click", sumAllItens)
buttonFilter.addEventListener("click", filterVeganItens)