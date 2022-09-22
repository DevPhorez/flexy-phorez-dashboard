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

export { allNotifications, allMessages, date }