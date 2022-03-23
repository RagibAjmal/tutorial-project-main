import React, { useState } from 'react';
import { Container, Row, FormControl } from 'react-bootstrap';

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <Container>
      <Row>
        <FormControl
          type="search"
          placeholder="Search"
          value={wordEntered}
          className="search-button mx-auto"
          aria-label="Search"
          onChange={handleFilter}
        />
      </Row>
      {filteredData.length !== 0 && (
        <Row className="justify-content-center">
          <div className="data-result">
            {filteredData.slice(0, 10).map((value, key) => {
              return (
                <a className="data-item" href={value.name} target="_blank">
                  <p>{value.name}</p>
                </a>
              );
            })}
          </div>
        </Row>
      )}
    </Container>
  );
}

export default SearchBar;
