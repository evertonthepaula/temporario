import React, { useRef, useEffect, useState } from 'react';
import PropTypes, { func } from 'prop-types';

function ImageUpload(props) {
  const [file, setFile] = useState();
  const [imagePreviewUrl, setimagePreviewUrl] = useState(null);

  function _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', file);
  }

  function _handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setimagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }

  const preview = () => {
    return imagePreviewUrl? <img src={imagePreviewUrl} alt="" /> : <div className="previewText">Please select an Image for Preview</div>;
  }

  return (
    <>
      <div className="previewComponent">
        <form onSubmit={e => _handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => _handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={e => _handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
        <div className="imgPreview">{preview()};</div>
      </div>
    </>
  );
}

ImageUpload.propTypes = {};

export default ImageUpload;
