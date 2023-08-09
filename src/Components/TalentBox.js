import React, { useState, useEffect } from 'react';

const TalentsBox = ({id}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://9r114.wiremockapi.cloud/thing/${id}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setData(data);
        } else if (typeof data === 'object') {
          setData([data]); // Wrap single object in an array
        } else {
          console.error('Fetched data is not in the expected format:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);
    return (
    <div className="talents">
      <div className="data-content">
        {data.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Knowledge: {item.knowledge}</p>
            <p>Field: {item.field}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TalentsBox;