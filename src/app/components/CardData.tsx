import React from 'react';
import Card from './Card';


// data fatching 

const fetchData = async () => {
    const response = await fetch ("https://api.abcz.workers.dev/api/fitlog")
    const data = await response.json()
    return data ;
 
}


const CardData =async () => {
    "use cache"
const allData = await fetchData()

    return (
        <div className='container mx-auto'>
           <div>
             <h2 className='text-4xl text-white font-bold'>THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group.</p>


{/* card  */}

<div className='grid grid-cols-3 gap-5'>

{
allData.map((card: React.ComponentProps<typeof Card>['card']) => <Card key={card.id} card = {card}></Card>)
} 

</div>

           </div>




        </div>
    );
};

export default CardData;