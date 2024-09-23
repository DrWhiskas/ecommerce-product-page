import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import './add.css';

interface AddProps{
	nb: number
	handleAddToCart: () => void
	setNb: React.Dispatch<React.SetStateAction<number>>
}


export default function Add({
	nb,
	setNb,
	handleAddToCart,

}: AddProps) {
	
	function AddArticle() {
		setNb((prevNb) => {
			const newNb = prevNb + 1;
			console.log('nb = ', newNb); 
			return newNb;
		});
	}

	function RemoveArticle() {
		setNb((prevNb) => {
			if (prevNb > 0) {
				const newNb = prevNb - 1; 
				console.log('nb = ', newNb); 
				return newNb; 
			}
			return prevNb; 
		});
	}

		return (
			<div className="add">
				<div className="add__content">
					<button className="add__btn" onClick={RemoveArticle}>
						-
					</button>
					{nb}
					<button className="add__btn" onClick={AddArticle}>
						+
					</button>
				</div>
				<button className="add__shop" onClick={handleAddToCart}>
					<ShoppingCart /> Add to cart
				</button>
			</div>
		);
	}
