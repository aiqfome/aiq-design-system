const { css } = require('stitches')

module.exports = css`
  .CalendarDay__selected_span {
    background: {$colors.primaryLight}; 
    color: {$colors.primary}; 
    border: 1px solid {$colors.primary};
  }

  .CalendarDay__selected_span:hover {
    border: 1px solid {$colors.primary};
    background: {$colors.primary};
    color: white;  
  }

  .CalendarDay__selected {
    border: 1px solid {$colors.primary};
    background: {$colors.primary};
    color: white;
  }

  .CalendarDay__selected:hover {
    border: 1px solid {$colors.primary};
    background: {$colors.primary};
    color: white;
  }

  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: {$colors.primaryLight}; 
    color: {$colors.primary}; 
    border: 1px solid {$colors.primary};
  }
`
