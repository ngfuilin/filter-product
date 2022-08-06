import React from "react";

function DisplayProduct(props) {
   
    const filteredData = props.products.filter((el) => {
        
        if (props.input === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(props.input);
        }      
  
    })

    function filteredDatabyStocked (data) {
        if (props.stocked === true) {
            return data.filter(param => param.stocked === props.stocked);
        }
        else {
            return data;
        }
    }
         
    const uniqueCats = [];

      const uniqueCategory = filteredDatabyStocked(filteredData).filter(element => {
        const isDuplicate = uniqueCats.includes(element.category);

        if (!isDuplicate) {
            uniqueCats.push(element.category);
            return true;
        }
        return false;
      });

      const header = uniqueCategory.map((post) =>
      <div>
            <h4>{post.category}</h4>
            <ul>
          {filteredDatabyStocked(filteredData).filter(param => param.category === post.category).map((element) =>
            <li key={element.key}><span style ={{color:element.stocked === false && "red"}}>{element.name}</span>{"\u00a0\u00a0"}<span>{element.price}</span>
            </li>
          )}
            </ul>
       </div>
   
        
      );

    return (
        <div>
        <h3>Name{"\u00a0\u00a0"}Price</h3>
        {header }
        </div>
    )
}

export default DisplayProduct;