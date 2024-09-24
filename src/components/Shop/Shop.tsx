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
			<div className="shop__cart">
				<h2 className="shop__cart__title">Cart</h2>
				<div className="shop__cart__content">
					<img
						className="shop__cart__content__img"
						src={articleImg}
						alt={articleName}
					/>
					<div className="shop__cart__content__info">
						<p className="shop__cart__content__info__text">{articleName}</p>
						<p className="shop__cart__content__info__price">
							${articlePrice} x {nb} <span>${totalPrice}</span>
						</p>
					</div>
				</div>
			</div>
			<div className="checkout">
				<button className="shop__btn">Checkout</button>
			</div>
		</div>
	);
}