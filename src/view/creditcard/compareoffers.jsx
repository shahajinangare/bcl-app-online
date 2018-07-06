import React from 'react';
import '../../assets/stylesheets/list.css';
import Modal from 'react-modal';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
};

const modalStyle = {
  backgroundColor: '#EBF5FD',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30
};
const MODAL_A = 'modal_a';
const MODAL_B = 'modal_b';

const CompareoffersContent = ({ CompareoffersInput }) => (


  <div id='Compareoffersdiv'>

      <button type="button" className="btn btn-primary" onClick={CompareoffersInput.toggleModal(MODAL_B)}>Open Modal A</button>
      <Modal
          ref="mymodal2"
          id="test2"
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}
          closeTimeoutMS={1}
          contentLabel="modalB"
          isOpen={CompareoffersInput.state.currentModal == MODAL_B}
          shouldCloseOnOverlayClick={true}
          onAfterOpen={CompareoffersInput.handleOnAfterOpenModal}
           onRequestClose={CompareoffersInput.toggleModal(MODAL_B)}
         
           >
              
          <h1 id="heading" ref={h1 => this.heading = h1}>This is the modal 2!</h1>
          <div id="fulldescription" tabIndex="0" role="document">
            <p>This is a description of what it does: nothing :)</p>
          </div>
        </Modal>
      
      <Modal
      id="test"
      contentLabel="modalA"
      closeTimeoutMS={150}
      isOpen={CompareoffersInput.props.isOpen}
      onAfterOpen={CompareoffersInput.props.onAfterOpen}
      onRequestClose={CompareoffersInput.props.onRequestClose}
      backdropOpacity= {0}
     >
    
      <table>

        <tr>
          <td></td>
          {CompareoffersInput.state.DistinctOfferData.map(header => {
            return (
              <td> <img src={header} /> </td>
            )
          })}
        </tr>

        {CompareoffersInput.state.DistinctFeaturesDataunique.map(featureslabeldata => {
          return (
            <tr>
              <td><span> {featureslabeldata} </span></td>
              <td>
                {CompareoffersInput.state.CompareOfferData.filter(featureslabelvalue =>
                  featureslabelvalue.features === featureslabeldata && featureslabelvalue.offerid === 1).map(featuresvaluedata => {
                    return (
                      <span> {featuresvaluedata.value} </span>

                    )
                  })}
              </td>
              <td>
                {CompareoffersInput.state.CompareOfferData.filter(featureslabelvalue =>
                  featureslabelvalue.features === featureslabeldata && featureslabelvalue.offerid === 7).map(featuresvaluedata => {
                    return (
                      <span> {featuresvaluedata.value} </span>

                    )
                  })}
              </td>
              <td>
                {CompareoffersInput.state.CompareOfferData.filter(featureslabelvalue =>
                  featureslabelvalue.features === featureslabeldata && featureslabelvalue.offerid === 8).map(featuresvaluedata => {
                    return (
                      <span> {featuresvaluedata.value} </span>

                    )
                  })}
              </td>

            </tr>
          )
        })}
      </table>

   </Modal>
    </div>
 


);



export default CompareoffersContent;