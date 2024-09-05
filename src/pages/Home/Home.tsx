import React from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Infos from '../../components/Infos/Infos';
import './home.css'
export default function Home() {
	return (
		<section className="home">
			<Header />
			<div className="home__container">
				<Slider />
				<Infos />
			</div>
		</section>
	);
}
