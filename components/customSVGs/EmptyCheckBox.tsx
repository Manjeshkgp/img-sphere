import { FC, SVGProps } from 'react'

interface EmptyCheckBoxProps extends SVGProps<SVGSVGElement> {
  
}

const EmptyCheckBox: FC<EmptyCheckBoxProps> = ({...props}) => {
  return (<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="0.553407" y="0.73871" width="13.3283" height="13.3283" rx="6.66414" fill="white"/>
  <rect x="0.553407" y="0.73871" width="13.3283" height="13.3283" rx="6.66414" stroke="#DEE8F4" stroke-width="0.888552"/>
  </svg>
  )
}

export default EmptyCheckBox;