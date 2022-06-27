import PropTypes from 'prop-types';

function Label({ htmlFor, children, className }) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

Label.propTypes = { htmlFor: PropTypes.string, };
Label.defaultProps = { htmlFor: '' };

export default Label;
