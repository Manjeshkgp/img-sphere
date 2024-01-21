import { FC, SVGProps } from "react"

interface CloseSvgProps extends SVGProps<SVGSVGElement> {}

const CloseSvg: FC<CloseSvgProps> = ({...props}) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" {...props}>
  <path d="M11.8451 20.3409L20.2303 11.9557M20.2303 20.3409L11.8451 11.9557M11.5933 30.9631H20.4822C27.8896 30.9631 30.8525 28.0002 30.8525 20.5928V11.7039C30.8525 4.29646 27.8896 1.3335 20.4822 1.3335H11.5933C4.18586 1.3335 1.2229 4.29646 1.2229 11.7039V20.5928C1.2229 28.0002 4.18586 30.9631 11.5933 30.9631Z" stroke="#3B4043" stroke-width="2.22138" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default CloseSvg;