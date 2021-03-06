import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [imageUrl, setImageURL] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0])
    setImageURL(URL.createObjectURL(e.target.files[0]))

  }
  const handleSubmit = () => {
    const source = {
      uri: '../assets/images/graphic1.webp',
      type: imageFile.type,
      namee: imageFile.name
    }
    let formData = new FormData()
    formData.append('image',source)
    
    //  api call
    axios({
      method: "post",
      url: "",   // enter url
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });



  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={imageUrl} style={{ width: '250px', height: '250px' }} alt="logo" />
        <p>
          Upload Image Example
        </p>
        <input type='file' placeholder='Upload Image' onChange={e => handleImageChange(e)} />
        <input type='submit' placeholder='Submit' style={{ marginTop: '20px', fontSize: '16px' }} onClick={handleSubmit} />

      </header>
    </div>
  );
}

export default App;
