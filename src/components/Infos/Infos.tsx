import React from "react";
import './infos.css'
import Add from "../Add/Add";

interface InfosProps{
	nb: number,
	handleAddToCart: () => void
	setNb: React.Dispatch<React.SetStateAction<number>>
}

export default function Infos({ nb, setNb, handleAddToCart }: InfosProps) {
		return (
		<section className="infos">
			<h2 className="infos__subtitle">SNEAKER COMPANY</h2>
			<h1 className="infos__title">Fall Limited Edition Sneakers</h1>
			<p className="infos__text">
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they'll withstand eveything the
				weather can offer.
			</p>
			<div className="infos__price">
				<div className="infos__price__current">
					$125.00
					<span className="infos__price__current__promotion">50%</span>
				</div>
				<div className="infos__price__old">$250.00</div>
			</div>
			<Add 
			
				nb={nb}
				handleAddToCart={handleAddToCart}
				setNb={setNb}
			/>
		</section>
	);
}