import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from 'common/statusIndicators/Spinner';


const Image = (props) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  if (!props.source) return null;

  const divStyle = {};
  const imageStyle = {
    height: 'auto',
    maxWidth: '100%',
  };

  if (props.height) {
    divStyle.height = props.height;
    imageStyle.maxHeight = props.height;
  }

  if (props.width) {
    divStyle.width = props.width;
    imageStyle.width = props.width;

    if (props.height) {
      imageStyle.height = props.height;
    }
  }


  return (
    <div
      style={divStyle}
    >
      {!imgLoaded && (
        <Spinner size="lg" />
      )}
      <img
        src={props.source}
        alt={props.alt}
        style={imageStyle}
        onLoad={() => setImgLoaded(true)}
        className={props.className}
      />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  source: PropTypes.any,
  width: PropTypes.string,
};

Image.defaultProps = {
  alt: 'Image',
};


export default Image;
