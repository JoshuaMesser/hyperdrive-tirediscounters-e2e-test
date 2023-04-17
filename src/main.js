const cartObject = {
  "hash": "eb2564ce-7c42-4f11-8195-3d8be87b88cf",
  "uri": "/quote/nanco/MS932S/N700097",
  "s": "2023-4-17",
  "qty": 4,
  "tire_front": {
    "tire_id": 91523,
    "tire_manufacturer": "Milestar",
    "tire_name": "MS932 Sport",
    "tire_size": "235/40R18 95,95V",
    "image": "https://buywheelstoday.com/images_products/9377.jpg",
    "price_per_tire": "$114.00",
    "qty": 4,
    "price_per_qty": "$456.00"
  },
  "tire_rear": {
    "tire_id": null,
    "tire_manufacturer": "",
    "tire_name": "",
    "tire_size": "",
    "image": null,
    "price_per_tire": "",
    "qty": null,
    "price_per_qty": ""
  },
  "products": [
    {
      "id": 318853,
      "type": "INSTALL",
      "name": "TD Standard Installation",
      "description": "<p>Up to <strong>$800 value</strong> *</p>\r\n",
      "subs": [
        {
          "name": "<p>Mounting &amp; Balancing, Lifetime Rotation, Lifetime Balancing, Lifetime Tire Pressure Adjustments, Free Tire Repair</p>\r\n"
        },
        {
          "name": "<p>Free Alignment with 4-tire purchase (over $125 value)</p>\r\n"
        }
      ],
      "unitPrice": 29.99,
      "qty": 4,
      "position": 0,
      "checked": true
    }
  ],
  "specials": [
    {
      "id": 323,
      "url": "http://localhost:3000/deals/buy-any-tire-get-a-free-alignment-only-at-tire-discounters-all-dev",
      "name": "Limited time only!  Buy even 1 tire and get a FREE Alignment ($129.99 value)! ",
      "enddate": "2023-06-05T04:00:00.000Z",
      "code": "",
      "quote_copy": "For a limited time, receive a free alignment with ANY purchase at Tire Discounters locations.\nBuy ANY (1) Tire and get a Free Alignment!\nThat's a $129.99 value plus a 12-month warranty!"
    },
    {
      "id": 319,
      "url": "http://localhost:3000/deals/up-to-100-rebate-tdcc-april-23",
      "name": "$100 Rebate when you spend $999 or more on your Tire Discounters Credit Card",
      "enddate": "2023-06-05T04:00:00.000Z",
      "code": "",
      "quote_copy": "Buy Now.  Pay over time.  \nReceive up to $100 Rebate!\nReceive a $50 rebate when you make a single-invoice purchase of any 4 tires or $499 or more with your Tire Discounters Credit Card.\nOR\nReceive a $100 rebate on major brands like, Goodyear, Pirelli, BFGoodrich, Continental, Bridgestone, Cooper and MORE! "
    },
    {
      "id": 320,
      "url": "http://localhost:3000/deals/up-to-50-rebate-tdcc-april-23",
      "name": "$50 Rebate when you spend $499-998.99 or purchase 4-tires on your Tire Discounters Credit Card",
      "enddate": "2023-06-05T04:00:00.000Z",
      "code": "",
      "quote_copy": "Buy Now.  Pay over time.  \nReceive up to $100 Rebate!\nReceive a $50 rebate when you make a single-invoice purchase of any 4 tires or spend $499 or more with your Tire Discounters Credit Card.\nOR\nReceive a $100 rebate when you make a single-invoice purchase of $999 or more with your Tire Discounters Credit Card."
    },
    {
      "id": 317,
      "url": "http://localhost:3000/deals/buy-any-tire-get-a-free-alignment-only-at-tire-discounters-all-test",
      "name": "Limited time only!  Buy even 1 tire and get a FREE Alignment!",
      "enddate": "2023-12-31T05:00:00.000Z",
      "code": "",
      "quote_copy": "For a limited time, receive a free alignment with ANY purchase at select Tire Discounters locations.\nBuy ANY (1) Tire and get a Free Alignment!\nThat's a $129.99 value plus a 12-month warranty!"
    }
  ],
  "subtotals": {
    "subtotal": "$575.96",
    "tire_fee_state": "OH",
    "tire_fee": "$4.00",
    "disposal_fee": "$18.00",
    "savings": "-$0.00"
  },
  "totals": {
    "totals-title": "Estimated Total",
    "total": "$597.96",
    "savings": "$0.00"
  },
  "store": {
    "id": 37,
    "number": 37,
    "name": "W. Hamilton",
    "search_url": "//www.google.com/maps/search/1517+Main+St+Hamilton+OH+45013",
    "address": "1517 Main St, Hamilton, OH 45013",
    "phone": "(513) 863-2808",
    "hours": "8:00AM - 6:00PM*8:00AM - 4:00PM*Closed",
    "addressData": {
      "address": "1517 Main St",
      "city": "Hamilton",
      "state": "OH",
      "zip": "45013",
      "latitude": 39.42760793773288,
      "longitude": -84.5985460281372
    }
  },
  "vehicle": {
    "splitFitment": false,
    "year": 2019,
    "make": "Honda",
    "model": "Civic",
    "option": "Sport Sedan & Coupe",
    "tireWidth": "235",
    "tireAspectRatio": "40",
    "tireRimSize": "18",
    "tireString": "235/40R18"
  }
};

(function({ document }) {

	/**
	 * Kicks everything off
	 */
	function init() {
		const dataInput = document.getElementById('data-input');
		const submitButton = document.getElementById('submit-button');

		// Set the hidden input value to the cart object
		dataInput.value = JSON.stringify(cartObject);

		// enable form submit
		submitButton.disabled = false;
	};

	document.addEventListener('DOMContentLoaded', init);
})(window);