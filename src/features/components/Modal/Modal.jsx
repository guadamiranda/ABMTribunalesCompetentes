import { Modal } from 'antd';
import React from 'react';

const ModalComp = ({
  tituloModal, 
  abrirModal, 
  setAbrirModal, 
  children}) => {

  const handleCancel = () => {
    setAbrirModal(false);
  };

  return (
    <>
      <Modal 
        title={tituloModal} 
        open={abrirModal} 
        onCancel={handleCancel} 
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComp;