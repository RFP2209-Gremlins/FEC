import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';
import styled from 'styled-components';

var testProduct = {
  "id": 40344,
  "campus": "hr-rfp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-08-13T14:38:44.509Z",
  "updated_at": "2021-08-13T14:38:44.509Z"
};

const RelatedItems = () => {
  const [currentItem, setCurrentItem] = useState(testProduct);
  const [relatedItems, setRelatedItems] = useState([]);

  // console.log('currentItem Id', currentItem.id);
  useEffect(() => {
    axios.get(`/products/${currentItem.id}/related`) //actually want currentItem.id/related
    .then((results) => {
      setRelatedItems(results.data);
      // console.log('results in relatedItems', results.data)
    })
    .catch((err) => console.log('error', err));

  }, [currentItem]);


  return (
    <div id="related-items-panel">
      <h2>Related Items</h2>
        <div>
          {relatedItems.map((relatedItem) =>
          <RelatedItem relatedItem={relatedItem} key={relatedItem.id}/>)}
        </div>
      </div>
  )

}

export default RelatedItems;



