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

      const styles = {
        display: 'flex',
        justifyContent: 'center',
             
      };

      const ProductRow = uniqueCategory.map((post) =>
            <>
            <h3>{post.category}</h3>
            <ul>
            
          {filteredDatabyStocked(filteredData).filter(param => param.category === post.category).map((element) =>
           <React.Fragment key={element.key}>
                <dt style ={{color:element.stocked === false && "red"}}>{element.name}{"\u00a0\u00a0"}<span>{element.price}</span></dt>
                
           </React.Fragment>
          
          )}
         </ul>
        </>
          
        
      );

    return (
        <div>
        <h3>Name{"\u00a0\u00a0"}Price</h3>
        {ProductRow }
        </div>
    )
}

export default DisplayProduct;