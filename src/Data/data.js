const allNotifications = [
	{ id: 1, image: '/Images/avatar/2.jpg', title: 'سارا به تیم پیوست!', description: 'به او تبریک گویید', date: '1385/2/5' },
	{ id: 2, image: '/Images/avatar/3.jpg', title: 'پیام جدید دریافت شد', description: 'فورز یک پیام جدید ارسال کرد', date: '1385/2/5' },
	{ id: 3, image: '/Images/avatar/4.jpg', title: 'پرداخت جدید دریافت شد', description: 'کیف پول خود را چک کنید', date: '1385/2/5' },
	{ id: 4, image: '/Images/avatar/5.jpg', title: 'آرین وظیفه خود را انجام داد', description: 'یک وظیفه جدید به او واگذار کنید', date: '1385/2/5' },
]

const allMessages = [
	{ id: 1, image: '/Images/avatar/2.jpg', title: 'سارا به تیم پیوست!', description: 'به او تبریک گویید', date: '1385/2/5' },
	{ id: 2, image: '/Images/avatar/3.jpg', title: 'پیام جدید دریافت شد', description: 'فورز یک پیام جدید ارسال کرد', date: '1385/2/5' },
	{ id: 3, image: '/Images/avatar/4.jpg', title: 'پرداخت جدید دریافت شد', description: 'کیف پول خود را چک کنید', date: '1385/2/5' },
	{ id: 4, image: '/Images/avatar/5.jpg', title: 'آرین وظیفه خود را انجام داد', description: 'یک وظیفه جدید به او واگذار کنید', date: '1385/2/5' },
]

const date = [
	{ id: 1, day: 28, disable: true, targets: [] },
	{ id: 2, day: 29, disable: true, targets: [] },
	{ id: 3, day: 30, disable: true, targets: [] },
	{ id: 4, day: 31, disable: true, targets: [] },
	{ id: 5, day: 1, disable: false, targets:
			[
				{ id: 1, title: 'من علی ام', date: new Date(), category: 'birthday' },
				{ id: 1, title: 'من علی ام', date: new Date(), category: 'birthday' },
				{ id: 1, title: 'من علی ام', date: new Date(), category: 'birthday' },
			] },
	{ id: 6, day: 2, disable: false, targets:
			[
				{ id: 1, title: 'من علی ام', date: new Date(), category: 'business' },
				{ id: 2, title: 'ههه بوی', date: new Date(), category: 'personal' },
			]
	},
	{ id: 7, day: 3, disable: false, targets:
			[
				{ id: 1, title: 'من علی ام', date: new Date(), category: 'family' },
				{ id: 2, title: 'ههه بوی', date: new Date(), category: 'holiday' },
			]
	}
]

const products = [
	{ id: 1, title: 'بستنی قیفی', image: '1.jpg', price: 50, rate: 5 },
	{ id: 2, title: 'گوجه فرنگی', image: '2.jpg', price: 25, rate: 3 },
	{ id: 3, title: 'فرفره شادی', image: '3.jpg', price: 12, rate: 5 },
	{ id: 4, title: 'جام زرین', image: '4.jpg', price: 119, rate: 4 },
	{ id: 5, title: 'آب میوه طبیعی', image: '5.jpg', price: 28, rate: 5 },
	{ id: 6, title: 'آب نبات چوبی فرفری', image: '6.jpg', price: 5, rate: 2 },
	{ id: 7, title: 'نون بستنی', image: '7.jpg', price: 2.5, rate: 2 },
	{ id: 8, title: 'هدفون بیسیم', image: '8.jpg', price: 79.99, rate: 5 },
	{ id: 9, title: 'آب نبات چوبی', image: '9.jpg', price: .99, rate: 5 },
	{ id: 10, title: 'آب آلبالو', image: '10.jpg', price: 7.56, rate: 5 },
	{ id: 11, title: 'برج', image: '11.jpg', price: 758, rate: 5 },
	{ id: 12, title: 'پیچ پیچک', image: '12.jpg', price: 3.99, rate: 5 },
]

export { allNotifications, allMessages, date, products }