import React, { useState, useEffect } from 'react';
import './lightbox.css';

interface LightboxProps {
	images: string[];
	initialIndex: number;
	onClose: () => void;
}
export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	function openLightbox(index: number) {
		setCurrentImageIndex(index);
		setIsOpen(true);
	}
	function closeLightbox() {
		setIsOpen(false);
	}
	function handleClickNext() {
		setCurrentImageIndex((currentImageIndex + 1) % images.length);
	}
	function handleClickPrev() {
		setCurrentImageIndex(
			(currentImageIndex - 1 + images.length) % images.length
		);
	}
      useEffect(() => {
				setCurrentImageIndex(initialIndex);
			}, [initialIndex]);
	return (
		<section className="lightbox">
			<div className="lightbox__thumbails">
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`Thumbnail ${index + 1}`}
						onClick={() => openLightbox(index)}
						className="lightbox__thumbnail"
					/>
				))}
			</div>
			{isOpen && (
				<div className="lightbox__overlay" onClick={closeLightbox}>
					<div
						className="lightbox__content"
						onClick={(e) => e.stopPropagation()}
					>
						<button className="lightbox__close" onClick={closeLightbox}>
							&times;
						</button>
						<button className="lightbox__prev" onClick={handleClickPrev}>
							&#10094;
						</button>
						<img
							src={images[currentImageIndex]}
							alt={`Image ${currentImageIndex + 1}`}
							className="lightbox__image"
						/>
						<button className="lightbox__next" onClick={handleClickNext}>
							&#10095;
						</button>
					</div>
				</div>
			)}
		</section>
	);
}
