import React from 'react';
import Modal from 'react-modal';

import CommonUtil from 'util/CommonUtil';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

interface ModalIndexProps {
    modalInfo : any,
    closeModal : any
}

const ModalIndex = ( props : ModalIndexProps) => {
    return(
        <div>
            <Modal
                isOpen={ CommonUtil.objectIsNotNull(props.modalInfo)}
                // onAfterOpen={afterOpenModal}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                <button onClick={props.closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
                </form>
            </Modal>
        </div>
    )
}

export default ModalIndex;