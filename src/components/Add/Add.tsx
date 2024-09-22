import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import './add.css';

export default function Add() {
	const [nb, setNb] = useState(0);
	function AddArticle() {
		setNb(nb + 1);
		console.log('nb = ', nb);
	}
	function RemoveArticle() {
		if (nb === 0) {
			setNb(0);
		} else {
			setNb(nb - 1);
		}
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
			<button className="add__shop">
				{' '}
				<ShoppingCart /> Add to cart
			</button>
		</div>
	);
}
