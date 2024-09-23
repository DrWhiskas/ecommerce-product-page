import React from "react";
import './shop.css'

interface ShopProps{
    nb: number
    articleImg: string
    articleName: string
    articlePrice: number
    totalPrice: number
}
export default function Shop({
	nb,
	articleImg,
	articleName,
	articlePrice,
	totalPrice,
}: ShopProps) {

    totalPrice = nb * articlePrice

	return (
		<div className="shop">
			<div className="shop__number">{nb}</div>
			<div className="shop__cart">
				<h2 className="shop__cart__title">Cart</h2>
				<div className="shop__cart__content">
					<img
						className="shop__cart__content"
						src={articleImg}
						alt={articleName}
					/>
				</div>
				<div>
					{' '}
					{articlePrice} * {nb} = {totalPrice}{' '}
				</div>
			</div>
		</div>
	);
}