const cartWrapper = document.querySelector('.cart-wrapper');
//let button = document.querySelector('.mixtures__item-info-btn');
//const cards = document.querySelectorAll('.card');

const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});


// аккордеон в блоке faq

document.querySelectorAll('.js-faq-trigger').forEach(function(trigger) {
  // Получаем родителя, элемент аккордеона
  var parent = trigger.closest('.js-faq');
  
  // клик по шапке
  trigger.addEventListener('click', function(e) {
      // если при клике у него уже есть активный класс 
      if (parent.classList.contains('is-active')) {
          // то мы его удаляем
          parent.classList.remove('is-active');
      } 
      // если при клике мы не нашли у элемента активный класс
      else {
          // удаляем у всех элементов активный класс
          document.querySelectorAll('.js-faq').forEach(function(item) {
              item.classList.remove('is-active');
          });            
          // добавляем класс тому элементу, по которому кликнули
          parent.classList.add('is-active');
      }
  })
});

// счетчик для cards
window.addEventListener('click', function(event) {

  let counter;
  if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]')
  }
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === 'minus') {

    if(parseInt(counter.innerText) > 1) {

      counter.innerText = --counter.innerText;
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
      console.log('in cart')
      
      event.target.closest('.cart-item').remove();
    }

  }
});


//добавление в корзину



window.addEventListener('click', function(event) {

  if (event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.card')
    console.log(card)

    const productInfo = {
      id: card.dataset.id,
      ImgSrc: card.querySelector('.mixtures__item-img').getAttribute('src'),
      title: card.querySelector('.card-title').innerText,
      price: card.querySelector('.card-price').innerText,
      counter: card.querySelector('[data-counter]').innerText
    }
    console.log(productInfo)

    //проверяем есть ли товар в корзине
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    console.log(itemInCart)

    if(itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {

    


    const cartItemHTML = `
    <div class="cart__item" data-id="${productInfo.id}">
        <div class="cart__item-top">
        <div class="cart__item-head">
            <img class="cart__item-top-img" src="${productInfo.ImgSrc}" alt="${productInfo.title}">
            <div class="cart__item-desc">
              

                <div class="cart__item-title">${productInfo.title}</div>
                

                <div class="items counter-wrapper cart__counter">
                    <div class="mixtures__components-control cart__control" data-action="minus">-</div>
                    <div class="mixtures__components-current cart__current" data-counter="">${productInfo.counter}</div>
                    <div class="mixtures__components-control cart__control" data-action="plus">+</div>
                </div>
                </div>
                </div>
                <div class="cart__item-price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>
            
        </div>
    </div>
</div>`;


cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

    }
  }
})





/*
  button.addEventListener('click', function() {
  const cartStorage = localStorage.getItem("cart") || "[]"
  const cart = JSON.parse(cartStorage);
  const productInfo = {
    id: card.dataset.id,
    ImgSrc: card.querySelector('.mixtures__item-img').getAttribute('src'),
    title: card.querySelector('.card-title').innerText,
    price: card.querySelector('.card-price').innerText,
    counter: card.querySelector('[data-counter]').innerText
  };
  localStorage.setItem("cart", JSON.stringify([...cart, card]))


  
})

*/
/*

window.addEventListener('click', function(event) {

  if (event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.card')
    console.log(card)

    const productInfo = {
      id: card.dataset.id,
      ImgSrc: card.querySelector('.mixtures__item-img').getAttribute('src'),
      title: card.querySelector('.card-title').innerText,
      price: card.querySelector('.card-price').innerText,
      counter: card.querySelector('[data-counter]').innerText
    }
    console.log(productInfo)

    let cartItemHTML = `
    <div class="cart__item" data-id="${productInfo.id}">
        <div class="cart__item-top">
            <img class="cart__item-top-img" src="${productInfo.ImgSrc}" alt="${productInfo.title}">
            <div class="cart__item-desc">
                <div class="cart__item-title"></div>
                <div class="cart__item-weight"></div>

                <div class="cart__item-details"></div>

                <div class="items mixtures__components counter-wrapper">
                    <div class="mixtures__components-control" data-action="minus">-</div>
                    <div class="mixtures__components-current" data-counter="">${productInfo.counter}</div>
                    <div class="mixtures__components-control" data-action="plus">+</div>
                </div>

                <div class="cart__item-price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>
            </div>
        </div>
    </div>
</div>`;


cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)




//cartWrapper.insertAdjacentHTML('aftereend', cartItemHTML)
//beforeend

  }
})










<div class="mixtures__cart cart-wrapper">
                            <div class="mixtures__cart-item cart__item" data-id="02">
                                <div class="mixtures__cart-item-top cart__item-top">
                                    <img class="mixtures__cart-img cart__item-top-img" src="" alt="">
                                    <div class="mixtures__cart-img cart__item-desc">
                                        <div class="cart__item-title"></div>
                                        <div class="cart__item-weight"></div>
        
                                        <div class="cart__item-details"></div>

                                            <div class="mixtures__cart-empty">Ваша корзина пуста</div>

                                        <div class="items mixtures__components counter-wrapper">
                                            <div class="mixtures__components-control" data-action="minus">-</div>
                                            <div class="mixtures__components-current" data-counter="">0</div>
                                            <div class="mixtures__components-control" data-action="plus">+</div>
                                        </div>
        
                                        <div class="cart__item-price">
                                            <div class="price__currency"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
*/