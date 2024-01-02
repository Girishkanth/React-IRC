import React, { useState } from 'react';
import './products.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
import apple from './apple.png';
import carrot from './carrot.jpg';
import capsicum from './capsicum.webp';
import orange from './orange.jpg'
import strawberry from './strawberry.jpg'
import lipstick from './lipstick.webp';
import palette from './palette.bmp';
import foundation from './foundation.jpg';
import moisturizer from './moisturizer.webp';
import Talcum from './talcum.webp';
import tv from './tv.webp';
import frige from './frige.webp';
import ac from './ac.jpg';
import wm from './wm.webp';
import bs from './speaker.jpg';
import shirt from './shirt.jpg';
import pant from './pant.webp';
import shoe from './shoe.webp';
import js from './jumpsuit.jpg';
import skirt from './skirt.webp';

function App() {
  //Fruits and Vegetables Products
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'Apple', 
		price: 50, 
		image: apple
		},
		{ id: 2, 
		name: 'Carrot', 
		price: 40, 
		image: carrot
    },
		{ id: 3, 
		name: 'Capsicum', 
		price: 30, 
		image: capsicum
    },
		{ id: 4, 
		name: 'Orange', 
		price: 65, 
		image: orange
    },
		{ id: 5, 
		name: 'Strawberry', 
		price: 80, 
		image: strawberry
    },
		{ id: 6, 
		name: 'Lipstick', 
		price: 200, 
		image: lipstick
		},
		{ id: 7, 
		name: 'Palette Kit', 
		price: 500, 
		image: palette
    },
		{ id: 8, 
		name: 'Foundation', 
		price: 250, 
		image: foundation
    },
		{ id: 9, 
		name: 'Moisturizer', 
		price: 175, 
		image: moisturizer
    },
		{ id: 10, 
		name: 'Talcum Powder', 
		price: 100, 
		image: Talcum
    },
		{ id: 11, 
		name: 'TV', 
		price: 45000, 
		image: tv
		},
		{ id: 12, 
		name: 'Refrigerator', 
		price: 80000, 
		image: frige
    },
		{ id: 13, 
		name: 'Air Conditioner', 
		price: 50000, 
		image: ac
    },
		{ id: 14, 
		name: 'Washing Machine', 
		price: 65000, 
		image: wm
    },
		{ id: 15, 
		name: 'Speaker', 
		price: 15000, 
		image: bs
    },
		{ id: 16, 
		name: 'shirt', 
		price: 800, 
		image: shirt
		},
		{ id: 17, 
		name: 'pant', 
		price: 1200, 
		image: pant
    },
		{ id: 18, 
		name: 'shoes', 
		price: 9000, 
		image: shoe
    },
		{ id: 19, 
		name: 'Jumpsuit', 
		price: 1500, 
		image: js
    },
		{ id: 20, 
		name: 'Skirt', 
		price: 1200, 
		image: skirt
    }
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} 
    else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">

				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
