import React, { useState } from 'react';
import './slider.css';
import Product1 from '../../media/images/image-product-1.jpg';
import Product2 from '../../media/images/image-product-2.jpg';
import Product3 from '../../media/images/image-product-3.jpg';
import Product4 from '../../media/images/image-product-4.jpg';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Slider() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [open, setOpen] = React.useState(false);
	const data = [
		{ img: Product1, id: 0 },
		{ img: Product2, id: 1 },
		{ img: Product3, id: 2 },
		{ img: Product4, id: 3 },
	];
	const slides = data.map((item) => ({ src: item.img }));

	return (
		<div className="slider">
			<div className="slider__active" onClick={() => setOpen(true)}>
				<img
					className="slider__active__img"
					src={data[activeIndex].img}
					alt={`Product ${data[activeIndex].id}`}
				/>
			</div>

			<div className="slider__thumbnails">
				{data.map((media, index) => (
					<div
						className={`slider__thumbnail ${
							index === activeIndex ? 'active' : ''
						}`}
						key={media.id}
						onClick={() => setActiveIndex(index)}
					>
						<img
							className="slider__thumbnails__img"
							src={media.img}
							alt={`Thumbnail ${media.id}`}
						/>
					</div>
				))}
			</div>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={slides}
				index={activeIndex}
			/>
		</div>
	);
}
