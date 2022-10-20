import * as React from "react";

import { Breadcrumbs, Typography, Snackbar, Avatar, Button, IconButton } from "@mui/material";

import { Link } from "react-router-dom";


import Box from "../../Components/Box/Box";

import { MdOutlineContentCopy, MdArrowRight } from "react-icons/md";
import { FiCalendar, FiShare2 } from "react-icons/fi";
import { TiTime } from "react-icons/ti";
import { AiOutlineUser, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane, FaHashtag } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";

import { CopyToClipboard } from 'react-copy-to-clipboard';

import './Blog.css'

function Blog () {
	
	const [isCopied, setIsCopied] = React.useState(false)
	
	const handleClick = () => () => {
		setIsCopied(true);
		
		setTimeout( () => {
			setIsCopied(false)
		}, 5000)
	};
	
	return (
		<div className='rtl'>
			<div className="d-flex justify-content-between align-items-center mb-5">
				<div>
					<Breadcrumbs className='mb-1' aria-label="breadcrumb">
						<Link
							to={'/'}
							className='fw-bold text-dark-gray'
						>
							خانه
						</Link>
						<Link
							to={'/'}
							className='fw-bold text-dark-gray'
						>
							بلاگ
						</Link>
						<Typography className='fw-bold' color="text.primary">چرا ++C خوب است</Typography>
					</Breadcrumbs>
					<p className="h3">چرا ++C خوب است</p>
				</div>
				<Box customClasses='p-0' >
					<div className='d-flex align-items-center' style={ { height: 55 } }>
						<p className="mb-0 text-center" style={ { width: 120 } }>لینک کوتاه</p>
						<p className="mb-0">https://phorez.com/b/3381</p>
						<CopyToClipboard text={'https://phorez.com/b/3381'} onCopy={handleClick()} >
							<MdOutlineContentCopy className='pointer' style={ { width: 60 } } size={20} />
						</CopyToClipboard>
						<Snackbar
							anchorOrigin={ { vertical: 'bottom', horizontal: 'left' } }
							open={isCopied}
							message="پیام شما با موفقیت کپی شد"
							key='copied'
						/>
					</div>
				</Box>
			</div>
			<div className="body row">
				<div className="col-8 p-0">
					<Box>
						<div style={ { paddingTop: '14px' } }>
							<div className='position-relative'>
								<img className='w-100 img-layer' src="/Images/blog/1.png" alt="blog"/>
								<Avatar className='avatar position-absolute' alt='avatar' src='/Images/Avatar/1.jpg' style={ { width: 100, height: 100 } } />
								<p><AiOutlineUser /> فورز</p>
								<p className="text-gray" style={ { direction: 'ltr' } }>1397 / 3 / 7 <FiCalendar size={18} /> </p>
								<p className="text-gray" style={ { direction: 'ltr' } }>13:58 <TiTime size={20} className='mb-1' /></p>
							</div>
						</div>
					</Box>
					<Box>
						<div style={ { paddingTop: '14px' } }>
							<p className='fw-bold mb-3' style={ { fontSize: 18 } }>6 دلیل که ++C (سی پلاس پلاس) هنوز در حال استفاده است</p>
							<div className='text'>
								<p>
									زبان برنامه نویسی معروف ++C (سی پلاس پلاس) یک زبان برنامه نویسی عمومی است که بیش از 40 سال است که برای برنامه نویسی بازی، مهندسی نرم افزار، ساختار داده، توسعه مرورگرها، سیستم عامل ها، اپلیکیشن ها، و موارد دیگر استفاده می شود.
								</p>
								<p>
									این زبان توسط Bjarne Stroustrup در سال 1979 توسعه یافت، و از برنامه نویسی رویه ای (procedural)، شیء گرا (object-oriented) و برنامه نویسی تابعی (functional) پشتیبانی می کند،‌ و به عنوان توسعه زبان C ایجاد شده است (که هنوز به راحتی می‌تواند با آن ادغام شود). به همین دلیل سطح بالایی از کنترل بر منابع سیستم و حافظه را به برنامه نویسان می دهد و پایه میلیون ها خط کد و برنامه موجود است.
								</p>
								<p>
									اما با وجود بسیاری از زبان‌های دیگر که از سال 1979 تا به امروز توسعه یافته اند، از جاوا گرفته تا سی شارپ، چرا زبان برنامه نویسی سی پلاس پلاس هنوز در حال استفاده است؟ و چرا برخی از توسعه دهندگان حتی آن را به زبان‌های جدیدتر، درخشان تر و محبوب تر ترجیح می دهند؟
								</p>
								<p>
									در این مقاله ما برخی از این دلایل را بررسی می کنیم، و می گوییم چه چیزی ++C را همچنان به عنوان یک زبان امروزی مورد استفاده ساخته است، و چرا این ابزار یک زبان منحصر به فرد در جعبه ابزار هر توسعه‌ دهنده ای است.
								</p>
								<p className="title">
									1. تاریخچه  دارد
								</p>
								<p>
									سی پلاس پلاس بیش از 40 سال است که وجود دارد، یعنی مطمئنا یک زبان قدیمی است. اما همچنان به این معناست که بیش از 40 سال است که وجود داشته است، و بیش از 40 سال یعنی توسعه دهندگان بیش از 40 سال است که صدها هزار ساعت را صرف ساختن کتابخانه‌ها برای استفاده از آن، تکمیل متدولوژی آن، توسعه موارد آزمایشی،‌ و اصلاح آن در ایجاد بهترین نسخه از خودش ساخته اند.
								</p>
								<p>
									از دیدگاه توسعه دهنده، و از نظر علم کامپیوتر،‌ این بدان معناست که میلیون‌ها برنامه قبلا با سی پلاس پلاس نوشته شده اند، بنابراین حتی اگر چیز جدیدی با سی پلاس پلاس نوشته نشده باشد، باز هم جهت نگهداری آنچه که به صورت قدرتمند وجود داشته است نیازمند به آن است!
								</p>
								<p>
									به همین دلیل سی پلاس پلاس به دلیل قدیمی بودن آن مهم است.
								</p>
								<p className="title">
									2. کارآمد است
								</p>
								<p>
									بیاید واضح بگوییم: اگر سی پلاس پلاس کار نمی کرد، امروز وجود نداشت!
								</p>
								<p>
									سی پلاس پلاس زبانی است که انتزاع کمی از معماری مورد استفاده کامپیوتر را ارائه می دهد و ساختار مشابه ساختار پردازنده را حفظ می کند.
								</p>
								<p>
									به این ترتیب، عملکرد و حافظه آن کارآمد است، زیرا واسطه زیادی بین کدی که می نویسید و آنچه که کامپیوتر برای درک آن کد نیاز دارد، وجود ندارد.
								</p>
								<p>
									این یعنی ++C به خوبی اجرا می‌شود و به طور موثر اجرا می شود. این مورد بخشی از دلیل استفاده از آن است، و اینکه چرا استفاده از آن در حال گسترش است و کم نمی شود.
								</p>
								<p className="title">
									3. همه کاره است
								</p>
								<p>
									برخلاف برخی از زبان های برنامه نویسی، سی پلاس پلاس توانسته مفید، رایج و حیاتی بماند، زیرا با تغییر نیازها توانسته تکامل یابد. برخلاف سایر زبان‌ها، سی پلاس پلاس سازگار است، و به سرعت خود را با نیازهای برنامه نویس و نرم افزار سازگار کرده است.
								</p>
								<p>
									علاوه بر این، سی پلاس پلاس همه منظوره است، زیرا به طور گسترده برای مدت طولانی مورد استفاده قرار گرفته که با اکثر زبان‌های دیگر موجود در بازار و برای بیشتر کاربردهای مبرم سازگاری بالایی دارد. می توانید از سی پلاس پلاس برای زیرساخت در سمت کلاینت یا برای ارتباطات بین پردازشی و شبکه و غیره استفاده کنید.
								</p>
								<p className="title">
									4. بازار کار خوبی دارد
								</p>
								<p>
									با وجود کدهای بسیار زیادی که قبلا در سی پلاس پلاس نوشته شده است، جای تعجب نیست که مشاغل زیادی برای توسعه دهندگانی که در ++C مهارت دارند وجود دارد. شرکت‌های برتر از گوگل گرفته تا مایکروسافت اغلب به دنبال توسعه دهندگان سی پلاس پلاس هستند و آن‌ها را استخدام می‌ کنند.
								</p>
								<p>
									چه قدیمی باشد چه نباشد، هنوز هم برای ساخت برنامه های اندروید، بازی های ویدیوی، واقعیت مجازی، و برنامه های قابل اعتماد فین‌تک (FinTech) محبوب است. به همین دلیل، میزبان یک بازار کار بسیار فعال می باشد و نباید توسط توسعه دهندگان و مدیران استخدامی که در حال ساخت تیم‌های قدرتمند هستند نادیده گرفته شود.
								</p>
								<p className="title">
									5. ستون اصلی سیستم عامل، مرورگر، کتابخانه ها، و موارد دیگر است
								</p>
								<p>
									صرف نظر از چیزهایی که می‌ سازید، احتمالا آن را برای یک سیستم عامل می‌ سازید. این بدان معناست که باید با سی پلاس پلاس ادغام شود.
								</p>
								<p>
									چرا؟ زیرا تقریبا تمام سیستم عامل های اصلی جهان با ++C ساخته شده اند، از جمله ویندوز، مک، لینوکس. بنابراین صرف نظر از کاربردهای زیاد سی پلاس پلاس، این استفاده درک آن را ضروری می سازد.
								</p>
								<p>
									و این مورد در رابطه با تمام مرورگرهای وب بزرگ نیز صدق می‌ کند. موتورهای رندر آن‌ها با سی پلاس پلاس ساخته شده اند، زیرا سی پلاس پلاس سریع و ساده است، و ما می‌خواهیم مرورگرمان در سریع ترین زمان ممکن رندر شود (یادتان باشد کاربران افراد صبوری نیستند).
								</p>
								<p>
									به همین دلیل (سرعت) بسیاری از کتابخانه ها نیز به سی پلاس پلاس وابسته هستند، از جمله برخی از پرکاربردترین کتابخانه های Machine Learning (مانند Tensorflow). اگر یک کتابخانه به محاسبات با کارایی بالا، شامل ضرب ماتریس‌های بزرگ برای train کردن Machine Learning نیاز داشته باشد، آنگاه سرعت بهینه ++C دارایی قابل توجهی خواهد بود.
								</p>
								<p>
									6. جامعه بزرگی دارد
								</p>
								<p>
									یکی دیگر از مزایای قابل توجه سن و بلوغ C++ این است که دارای جامعه بزرگی از کاربران است و این جامعه بزرگ کاربران، که در سراسر جهان و در هر گوشه از دنیای توسعه دهنده پراکنده شده اند، از سی پلاس پلاس و کسانی که با آن کدنویسی می کنند پشتیبانی می کنند، با انبوهی از پشتیبانی،‌ هم نقدی و هم اپن سورس. تعداد بی شماری از دوره های آنلاین، کتابخانه ها، بانک های منابع، و جوامع open source به صورت آنلاین برای ++C وجود دارند که بین رتبه های برتر پرکاربردترین ها در StackOverflow و GitHub است.
								</p>
								<p className='title'>
									جمع بندی
								</p>
								<p>
									در پایان، هر پروژه برنامه نویسی نیاز به تصمیم گیری جدی در مورد زبان مورد استفاده و چرایی استفاده از آن دارد. تصمیم گیری در مورد اینکه آیا سی پلاس پلاس بهترین زبان برای پروژه شما است، امری اتفاقی نیست. با در نظر گرفتن سرعت، قیمت و کیفیت تحویل، می بینید که به خوبی در مقابل رقبا ایستاده است. با این حال مهم است که چه چیزی می سازید و الویت های شما چیست.
								</p>
								<p>
									اما این اشتباه بزرگی است اگر فقط به این دلیل که این زبان یک زیان جدید نیست، آن را کنار بگذارید. و اگر دلایل بالا با شما همخوانی دارد و به نظر می رسد با نیازهای برنامه ای که در حال توسعه آن هستید مطابقت دارد، از شما می خواهیم که این زبان همه کاره، سریع، اساسی و کارآمد را در نظر بگیرید.
								</p>
							</div>
						</div>
					</Box>
					<Box>
						<div style={ { paddingTop: '14px' } }>
							<div className='d-flex justify-content-between align-items-center'>
								<div>
									<FiShare2 className='ms-2' size={24} color='#b0b9be' />
									<span className="title text-dark mb-0 ">
										اشتراک گذاری
									</span>
								</div>
								{/*<p className="title text-dark text-center mb-0">*/}
								{/*	اشتراک گذاری*/}
								{/*</p>*/}
								<div className="d-flex">
									<IconButton color='primary'>
										<FaTelegramPlane />
									</IconButton>
									<IconButton color='primary'>
										<BsWhatsapp />
									</IconButton>
									<IconButton color='primary'>
										<AiOutlineTwitter />
									</IconButton>
									<IconButton color='primary'>
										<GrFacebookOption />
									</IconButton>
									<IconButton color='primary'>
										<BsInstagram />
									</IconButton>
								</div>
							</div>
						</div>
					</Box>
					<Box>
						<div style={ { paddingTop: '14px' } }>
							<div className="my-2">
								<FaHashtag className='ms-2' size={24} color='#b0b9be' />
								<span className="title text-dark mb-0 ">
									هشتگ های مرتبط
								</span>
							</div>
							<div className='d-flex justify-content-center flex-wrap mt-3'>
								<Button color='secondary' className='fw-bold'>
									کاربرد های سی پلاس پلاس
								</Button>
								<Button color='secondary' className='fw-bold'>
									مزایای یادگیری C++
								</Button>
								<Button color='secondary' className='fw-bold'>
									آموزش سی پلاس پلاس
								</Button>
								<Button color='secondary' className='fw-bold'>
									چرا از سی پلاس پلاس استفاده کنیم
								</Button>
								<Button color='secondary' className='fw-bold'>
									چرا c++ را یاد بگیریم
								</Button>
								<Button color='secondary' className='fw-bold'>
									ویژگی زبان سی پلاس پلاس
								</Button>
								<Button color='secondary' className='fw-bold'>
									زبان برنامه نویسی c++
								</Button>
								<Button color='secondary' className='fw-bold'>
									زبان برنامه نویسی سی پلاس پلاس
								</Button>
							</div>
						</div>
					</Box>
					<Box>
						<div className='mx-3' style={ { paddingTop: '14px' } }>
							<div className='my-2'>
								<GoCommentDiscussion className='ms-2' size={24} color='#b0b9be' />
								<span className="title text-dark mb-0 ">
									نظرات کاربران دربارطه با این مطلب
								</span>
							</div>
							<div className="items mt-5">
								<div className="no-reapply comment-item">
									<div className="right-col">
										<img src="/Images/Avatar/2.jpg" alt="avatar"/>
									</div>
									<div className="comment">
										<div className="header">
											<p>Gogoli</p>
											<span>ارسال شده در 1401/04/20</span>
										</div>
										<p className='mb-0'>
											سلام
											<br/>
											میشه کنار سی شارپ یا بعد سی شارپ یادش گرفت؟
											<br/>
											سی پلاس پلاس برای هوش مصنوعی مناسب هست؟
										</p>
									</div>
									<div className="reapply comment-item">
										<div className="right-col">
											<img src="/Images/Avatar/1.jpg" alt="avatar"/>
										</div>
										<div className="comment">
											<div className="header">
												<p>Phorez</p>
												<span>ارسال شده در 1401/04/23</span>
											</div>
											<p className='mb-0'>
												سلام
												<br/>
												بله می شود
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Box>
				</div>
				<div className="col-4 p-0">
					<Box>
						<div className='text-center' style={ { paddingTop: '14px' } }>
							<div className='d-flex justify-content-center'>
								<Avatar alt='avatar' src='/Images/Avatar/1.jpg' style={ { width: 85, height: 85 } } />
							</div>
							<div className="d-flex justify-content-center mt-3">
								<p>نویسنده: </p>
								<p className='fw-bold me-2'>فورز</p>
							</div>
							<span className='fw-bold ms-2'>درباره نویسنده: </span>
							<span className='fw-bold text-gray opacity-75'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد </span>
							<div className="d-block mt-3">
								<Button className='text-white fw-bold' color='warning' variant='contained' sx={ { '&:hover': { backgroundColor: 'var(--warningHover)' } } }>
									دیدن نمایه نویسنده
								</Button>
							</div>
						</div>
					</Box>
					
					<Box>
						<div style={ { paddingTop: '14px' } }>
							<div className="mt-2">
								<p className="h5 text-center">جدید ترین مطالب</p>
							</div>
							<ul className='list-unstyled pe-2'>
								<li className='p-2'>
									<div className='settings position-relative'>
										<Link className='settingsText position-absolute' to={'/'}>لورم ایپسوم</Link>
										<MdArrowRight size={28} className='arrowRight' style={ { position: 'absolute', right: 4, opacity: 0 } } />
									</div>
								</li>
								<li className='p-2'>
									<div className='settings position-relative'>
										<Link className='settingsText position-absolute' to={'/'}>لورم ایپسوم</Link>
										<MdArrowRight size={28} className='arrowRight' style={ { position: 'absolute', right: 4, opacity: 0 } } />
									</div>
								</li>
								<li className='p-2'>
									<div className='settings position-relative'>
										<Link className='settingsText position-absolute' to={'/'}>لورم ایپسوم</Link>
										<MdArrowRight size={28} className='arrowRight' style={ { position: 'absolute', right: 4, opacity: 0 } } />
									</div>
								</li>
								<li className='p-2'>
									<div className='settings position-relative'>
										<Link className='settingsText position-absolute' to={'/'}>لورم ایپسوم</Link>
										<MdArrowRight size={28} className='arrowRight' style={ { position: 'absolute', right: 4, opacity: 0 } } />
									</div>
								</li>
								<li className='p-2'>
									<div className='settings position-relative'>
										<Link className='settingsText position-absolute' to={'/'}>لورم ایپسوم</Link>
										<MdArrowRight size={28} className='arrowRight' style={ { position: 'absolute', right: 4, opacity: 0 } } />
									</div>
								</li>
							</ul>
						</div>
					</Box>
				</div>
			</div>
		</div>
	)
}

export default Blog