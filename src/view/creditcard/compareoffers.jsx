import React from 'react';
import '../../assets/stylesheets/list.css';

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

const CompareoffersContent = ({ CompareoffersInput }) => (


  <div id='Compareoffersdiv' className="backdrop" style={{ backdropStyle }}>
    <div className="modal" style={{ modalStyle, display: 'block' }}>
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

      <div className="footer">
           <button onClick={e => CompareoffersInput.closepopup()}>
          Close
            </button>
      </div>
    </div>
  </div>


);



export default CompareoffersContent;