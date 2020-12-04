import React from 'react'
import PropTypes from 'prop-types';


const Fotos = ({name}) => <h2>(name)</h2>

Fotos.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Fotos