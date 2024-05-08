
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Push', 'Dragon Ball']);

const onAddCategory = (newCategory) => {
  if(categories.includes(newCategory)) return;
setCategories([ newCategory,...categories]);
 }

  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory 
        onNewCategory={(event) => onAddCategory(event)}
      />
      
        {
          categories.map((category) => (

              <GifGrid 
                  key={category}
                  category={category}/>
          ))
        }
        {/* <li>ABC</li> */}
     
    </>
  )
}

export default GifExpertApp
