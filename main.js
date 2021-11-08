var app = new Vue ({
	el: '#app',
	data: {
		product: 'Socks',
		description: 'Fuzzy and warm',
		image: 'https://cdn.shopify.com/s/files/1/0151/5681/products/Funky-Socks-Shakespeare-Theatre-Gift_480x.jpg?v=1597696178',
		link: 'https://www.nicoladesign.co.uk/',
		onSale: false,
		variants: [
			{
				variantID: 1234,
				variantColour: "green",
				variantSize: 10
			},
			{ 		
				variantID: 1234,
				variantColour: "green",
				variantSize: 12
			}
		]
	}
})