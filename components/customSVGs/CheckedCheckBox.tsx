import { FC, SVGProps } from 'react'

interface CheckedCheckBoxProps extends SVGProps<SVGSVGElement> {
  
}

const CheckedCheckBox: FC<CheckedCheckBoxProps> = ({...props}) => {
  return (<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="0.553407" y="0.865174" width="13.3283" height="13.3283" rx="6.66414" fill="#4BC34B"/>
  <rect x="0.553407" y="0.865174" width="13.3283" height="13.3283" rx="6.66414" stroke="#4BC34B" stroke-width="0.888552"/>
  <path d="M10.0709 5.19971L5.99837 9.27224L4.14722 7.42109" stroke="white" stroke-width="1.48092" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  )
}

export default CheckedCheckBox