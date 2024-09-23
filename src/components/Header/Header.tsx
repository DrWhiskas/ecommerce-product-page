import React, { useState } from "react";
import "./header.css"
import Logo from "../../media/images/logo.svg"
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Profil from '../../media/images/image-avatar.png';
import Shop from "../Shop/Shop";

interface HeaderProps {
	nb: number;
	articleImg: string;
	articleName: string;
	articlePrice: number;
	totalPrice: number
}

export default function Header({
	nb,
	articleImg,
	articleName,
	articlePrice,
	totalPrice
}: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);
	totalPrice = nb + articlePrice
	function toggleShopCart() {
		setIsOpen(!isOpen);
	}
	return (
		<header className="header">
			<Link to="/">
				<img src={Logo} alt="Website's logo" />
			</Link>
			<ul className="header__links">
				<Link to="/">
					<li className="header__links__link">Collections</li>
				</Link>
				<Link to="/">
					<li className="header__links__link">Men</li>
				</Link>
				<Link to="/">
					<li className="header__links__link">Women</li>
				</Link>
				<Link to="/">
					<li className="header__links__link">About</li>
				</Link>
				<Link to="/">
					<li className="header__links__link">Contact</li>
				</Link>
			</ul>
			<ul className="header__userPanel">
				<li className="header__userPanel__link" onClick={toggleShopCart}>
					<ShoppingCart />
				</li>
				{isOpen && (
					<Shop
						nb={nb}
						articleImg={articleImg}
						articleName={articleName}
						articlePrice={articlePrice}
						totalPrice={totalPrice}
					/>
				)}
				<Link to="/">
					<li className="header__userPanel__link">
						<img
							className="header__userPanel__link__img"
							src={Profil}
							alt="profil's image"
						/>
					</li>
				</Link>
			</ul>
		</header>
	);
}