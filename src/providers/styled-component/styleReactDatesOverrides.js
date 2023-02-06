import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  .CalendarDay__selected_span {
  background: ${({ theme }) => theme.colors.primaryLight}; 
  color: ${({ theme }) => theme.colors.primary}; 
  border: 1px solid ${({ theme }) => theme.colors.primary};
}

.CalendarDay__selected_span:hover{
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};;
  color: white;  
}

.CalendarDay__selected {
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};;
  color: white;
}


.CalendarDay__selected:hover {
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary};;
  color: white;
}


.CalendarDay__hovered_span:hover,
.CalendarDay__hovered_span {
  background: ${({ theme }) => theme.colors.primaryLight}; 
  color: ${({ theme }) => theme.colors.primary}; 
  border: 1px solid ${({ theme }) => theme.colors.primary};
}
`
