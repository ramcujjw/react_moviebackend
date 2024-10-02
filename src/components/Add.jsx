import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  
  const [formData, setFormData] = useState({
    movieName: '',
    category: '',
    director: '',
    releaseYear: '',
    language: ''
  });

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);  
  };

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} 
    >
      <TextField
        id="movieName"
        label="Movie Name"
        variant="outlined"
        value={formData.movieName}
        onChange={handleChange}
      /><br />
      <TextField
        id="category"
        label="Category"
        variant="outlined"
        value={formData.category}
        onChange={handleChange}
      /><br />
      <TextField
        id="director"
        label="Director"
        variant="outlined"
        value={formData.director}
        onChange={handleChange}
      /><br />
      <TextField
        id="releaseYear"
        label="Release Year"
        variant="outlined"
        value={formData.releaseYear}
        onChange={handleChange}
      /><br />
      <TextField
        id="language"
        label="Language"
        variant="outlined"
        value={formData.language}
        onChange={handleChange}
      /><br />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default Add;