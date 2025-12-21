let products =[
    {
        name: 'JBL e55BT KEY BLACK',
        image1: './images/3mkpcme.jpg',
        image2: './images/djkzfjdfkm.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL e55BT KEY BLACK',
        image1: './images/8f0e880f2b66382cff331f78a4b636c7.jpg',
        image2: './images/dae4e3bc1c17cc8bee09ea0a897f3f7c.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL e55BT KEY BLACK',
        image1: './images/25715147ab8ae9da7d5089987672559d.jpg',
        image2: './images/b85d2742d4b6b5c6b8acba959f32fae1.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL e55BT KEY BLACK',
        image1: './images/51c81e3e44969e76652c81d42801aa01.jpg',
        image2: './images/e0ca0cbe1fc943b644b1ee473b35d042.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL e55BT KEY BLACK',
        image1: './images/dd6223354004019299050559cfe834d5.jpg',
        image2: './images/a6ad27eb84ac03aeb75f809aa1ad255a.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL e55BT KEY BLACK',
        image1: './images/fb957d305ab5f22bc4c6251ca9a1b263.jpg',
        image2: './images/95ca71272c4d2db28992b57e691bc8ab.jpg',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
        <div class="col-4 col-md-6 col-sm-12">
                        <div class="product-card">
                            <div class="product-card-img">
                                <img src="${e.image1}" alt="">
                                <img src="${e.image2}" alt="">
                            </div>
                            <div class="product-card-info">
                                <div class="product-btn">
                                    <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                                    <button class="btn-flat btn-hover btn-cart-add">
                                        <i class='bx bxs-cart-add'></i>
                                    </button>
                                    <button class="btn-flat btn-hover btn-cart-add">
                                        <i class='bx bxs-heart'></i>
                                    </button>
                                </div>
                                <div class="product-card-name">
                                ${e.name}  
                                </div>
                                <div class="product-card-price">
                                <span><del>${e.old_price}</del></span>
                            </div>
                                <span class="curr-price">${e.curr_price}</span>
                            </div>
                        </div>
                    </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
        
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('cick', () => filter_col.classList.toggle
('active'))

document.querySelector('#filter-close').addEventListener('cick', () => filter_col.classList.toggle
('active'))