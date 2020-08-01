import React from 'react';

const display = {
    gridColumn: 'span 4',
    backgroundColor: '#0004',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '20px',
    fontSize: '2.1em'
}

export default props => 
    <div style={display}>{props.value}</div>
