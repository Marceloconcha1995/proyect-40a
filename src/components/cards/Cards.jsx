import Card from '../card/Card';
import './cards.css'

export default function Cards({characters, onClose}) {

   return <div className='cards'>

      {characters.map(({name,species,gender,image,id,status},indice) =>{
            
          return (
           <Card 
            key={indice}
            id={id}
            name={name}
            species={species}
            gender={gender}
            status={status}
            image={image}
            onClose={onClose}
            />
          )  
         })}
      
   </div>;
}
