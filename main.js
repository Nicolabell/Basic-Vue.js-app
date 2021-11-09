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
				variantSize: 10,
				variantImage: "https://media2.newlookassets.com/i/newlook/803285638/mens/clothing/underwear-and-socks/dark-green-smile-embroidered-socks.jpg?strip=true&qlt=80&w=720"
			},
			{ 		
				variantID: 1234,
				variantColour: "blue",
				variantSize: 12,
				variantImage: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/439665/item/goods_93_439665.jpg?width=592&impolicy=quality_70&imformat=chrome"
			}
		],
		cart: 0
	},
	methods: {
		addToCart: function () {
			this.cart += 1
		},
		updateProduct: function (variantImage) {
			this.image = variantImage
		},
		removeFromCart: function () {
			this.cart -= 1
		} 
	}
})