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

const articles = [
	{
		id: 1,
		title: 'Google Colab چیست؟',
		image: '1.png',
		description: 'زبان برنامه نویسی پایتون (Python) را کم وبیش اکثر برنامه نویس ها و مهندسان جهان می شناسند. و بیشتر تکنولوژی از جمله (Google) نیز برای اهداف خود از این زبان بهره می گیرند، یکی از پروژهای گوگل پلتفرم (Colab)، از پایتون استفاده می کند که در این مقاله ما شما را با آن آشنا خواهیم کرد.' ,
		views: 969,
		comments: 0
	},
	{
		id: 2,
		title: ' دلیل که ++C هنوز در حال استفاده است',
		image: '2.png',
		description: 'زبان برنامه نویسی معروف ++C (سی پلاس پلاس) یک زبان برنامه نویسی عمومی است که بیش از 40 سال است که برای برنامه نویسی بازی، مهندسی نرم افزار، ساختار داده، توسعه مرورگرها، سیستم عامل ها، اپلیکیشن ها، و موارد دیگر استفاده می شود.' ,
		views: 1873,
		comments: 2
	},
	{
		id: 3,
		title: '8 دلیل انتخاب تایپ اسکریپت در سال 2022',
		image: '3.png',
		description: 'TypeScript به یک زبان محبوب برای توسعه برنامه‌های بزرگ تبدیل شده است. تایپ اسکریپت جاوااسکریپت جدید است، درست است؟ محبوبیت جاوااسکریپت در میان توسعه دهندگان فرانت اند و بک اند کارآمدترین یا مقرون به صرفه ترین راه‌ حل نیست.' ,
		views: 1503,
		comments: 5
	},
	{
		id: 4,
		title: '12 ابزار رایگان برای طراحی API و تست آن',
		image: '4.png',
		description: 'ظهور API های RESTful با افزایش ابزارهایی برای ایجاد، آزمایش و مدیریت آنها همراه شده است. فرقی نمی کند که شما یک شخص مبتدی در طراحی API باشید که در حال طراحی اولین API خود هستید یا این که یک فرد متخصص در این حوزه هستید که در کوتاه ترین زمان ممکن می توانید اقدام به طراحی API کنید.' ,
		views: 1918,
		comments: 3
	},
	{
		id: 5,
		title: 'آشنایی با ترندهای تکنولوژی در سال 2022',
		image: '5.png',
		description: 'امروزه صنعت تکنولوژی روز به روز در حال پیشرفت است و شاهد آن هستیم که هر روزه ترندهای تکنولوژی در حال پیشرفت هستند. همین عامل نیز باعث می شود تا پیگیری این ترندهای تکنولوژی کمی سخت و دشوار باشد.' ,
		views: 2012,
		comments: 2
	},
	{
		id: 6,
		title: 'متدولوژی agile چیست؟ توسعه نرم افزار مدرن',
		image: '6.png',
		description: 'شاید باور کردن این مسئله بسیار سخت باشد که امسال متدولوژی agile  بیست ساله شد. این روش در واقع روشی بود که زمانی برای استارت آپ هایی که در یک فضای کوچک کار می کردند مورد استفاده قرار می گرفت و آنها با استفاده از یک تخته و چسب هایی با یکدیگر همکاری می کردند.' ,
		views: 1698,
		comments: 0
	},
]

export { allNotifications, allMessages, date, products, articles }