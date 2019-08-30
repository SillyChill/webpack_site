const data = require('../../data.json');

// var select_item = "sandwiches";

function generate_card(select_item){
	var i ;
	let parentElem = document.querySelector(".menu");

	for (i = 0; i < data.menu.length; i++){
		// alert(data.menu[i].image);	

		if(data.menu[i].category == select_item){
 			if (select_item == "pizza") {
 				parentElem.insertAdjacentHTML('afterbegin', `<div class="card">
             											<div class="card__middle">
              												<img src="${data.menu[i].image}">
             											</div>
             											<div class="card__name">${data.menu[i].name}</div>
             											<div class="card__composition">
               												<a href="#">${data.menu[i].description}</a>
             											</div>
             											<div class="card__price">
               												<p class="card__price__1">Цена: ${data.menu[i].price} руб.</p>
               												<p class="card__price__2">количество</p>
               												<div class="card__price__quatity">
                 												<button class="minus">
                   												<i class="fas fa-minus"></i>
                 												</button>
                 												<input type="text" class="card__price__quatity__value" value="1">
                 												<button class="plus">
                   													<i class="fas fa-plus"></i>
                 												</button>
               												</div>
               												<button class="card__price__basket">в корзину</button>  
             											</div>
           		 							 		 </div>`);
 			}
 			else{
			// alert(data.markets[data.menu[i].market].image)
			// alert(restoranName);	
			// debugger;
     		parentElem.insertAdjacentHTML('afterbegin', `<div class="card">
            											<div class="card__head">
              												<img src="${data.markets[data.menu[i].market].image}">
             											</div>
             											<div class="card__middle">
              												<img src="${data.menu[i].image}">
             											</div>
             											<div class="card__name">${data.menu[i].name}</div>
             											<div class="card__composition">
               												<a href="#">${data.menu[i].description}</a>
             											</div>
             											<div class="card__price">
               												<p class="card__price__1">Цена: ${data.menu[i].price} руб.</p>
               												<p class="card__price__2">количество</p>
               												<div class="card__price__quatity">
                 												<button class="minus">
                   												<i class="fas fa-minus"></i>
                 												</button>
                 												<input type="text" class="card__price__quatity__value" value="1">
                 												<button class="plus">
                   													<i class="fas fa-plus"></i>
                 												</button>
               												</div>
               												<button class="card__price__basket">в корзину</button>  
             											</div>
           		 							 		 </div>`);
			}

  		}
    
	}

}


$('.list_item').on('click', function () {
	var siblings = ($(this).siblings());
	siblings.each(function(index)
	{
		$(this).removeClass('active');
	});

	$(this).addClass("active");

	var selected_item = $(this).find('a');
	// alert(selected_item.attr("href").substr(1));
	var select_item = selected_item.attr("href").substr(1);

	generate_card(select_item);
});
