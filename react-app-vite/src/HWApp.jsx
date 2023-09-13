import PropTypes from "prop-types";

// componente
export const App = ({ title, subTitle, age }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <span>Age:{age} años</span>
    </>
  );
};

// PropTypes
App.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

// defaultProptypes
App.defaultProps = {
    title: 'No hay title',
    subTitle: 'No hay subtitle',
}

