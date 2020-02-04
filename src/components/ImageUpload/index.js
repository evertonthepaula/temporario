import React, { useState, useRef} from 'react';
import {Container, Image,  Submit} from './styles';
import { toast } from 'react-toastify';

export default function ImageUpload() {
  const ref = useRef(null);
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setimagePreviewUrl] = useState(null);

  function handleDragOver(e) {
    stopEvents(e);
    e.dataTransfer.dropEffect = 'copy';
  }

  function handleDropFieldSelected(e) {
    stopEvents(e);
    load(e.dataTransfer.files[0], e);
  }

  function handleImageChange(e) {
    stopEvents(e);
    load(e.target.files[0], e);
  }

  function load(file, event){
    if ( !(/\.(jpe?g|png|gif)$/i.test(file.name)) ) {
      toast.info(`${file.name} Não é um tipo de arquivo válido!`);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onprogress = (progressEvt) => {
      const { loaded = 0, total = 0 } = progressEvt;
      const progress = (loaded / total) * 100;

      if (onStartProgress) {
        onStartProgress(progress, progressEvt);
      }
    };

    fileReader.onload = () => {
      setImage(file);
      setimagePreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    stopEvents(e);
    console.log('handleSubmit :: ', file);
  }

  function stopEvents(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function clearImg(e) {
    stopEvents(e);
    setImage(null);
    ref.current.value = '';
  }
  function preview() {
    return imagePreviewUrl ? <Image src={imagePreviewUrl} alt="" /> : '';
  }

  return (
    <Container onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDropFieldSelected(e)}>
      <input ref={ref} type="file" onChange={e => handleImageChange(e)} />

      {preview()}

      {
        imagePreviewUrl ?
          <form onSubmit={e => handleSubmit(e)}>
            <Submit onClick={e => handleSubmit(e)}>Upload Image</Submit>
            <button onClick={e => clearImg(e)}>Delete Image</button>
          </form>
          : ''
      }
    </Container>
  );
}
