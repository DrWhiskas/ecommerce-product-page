import React, { useState } from "react";
import { ShoppingCart } from 'lucide-react';


export default function Add(){
    
    const [nb, setNb] = useState(0)
    function AddArticle(){
        setNb(nb + 1)
        console.log('nb = ', nb);
    }
    function RemoveArticle(){
        if(nb == 0){
            setNb(0)
        }else{
            setNb(nb - 1)
        }
    }

    return (
			<div className="add">
				<div>
					<button onClick={RemoveArticle}>-</button>
					{nb}
					<button onClick={AddArticle}>+</button>
				</div>
                <button> <ShoppingCart/> Add to cart</button>
			</div>
		);
}