import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Infos from '../../components/Infos/Infos';
import './home.css'
import IMG from '../../media/images/image-product-1-thumbnail.jpg';


export default function Home() {
 
	const [nb, setNb] = useState(0); // Gère l'état du nombre d'articles
	const [total, setTotal] = useState(0)
 	const articleName = 'Fall Limited Edition Sneaker';
 	const articlePrice = 125;
	function handleAddToCart(){		
		setTotal(nb * articlePrice)	
	}

	return (
		<section className="home">
			<Header
				nb={nb}
				articleImg={IMG}
				articleName={articleName}
				articlePrice={articlePrice}
				totalPrice={total}
			/>
			<div className="home__container">
				<Slider />
				<Infos
					nb={nb}
					setNb={setNb}
					handleAddToCart={handleAddToCart}
				/>
			</div>
		</section>
	);
}
