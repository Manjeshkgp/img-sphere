import { FC, SVGProps } from "react"

interface MoonSvgProps extends SVGProps<SVGSVGElement> {}

const MoonSvg: FC<MoonSvgProps> = ({...props}) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 11 12" fill="none" {...props}>
  <path d="M3.71755 3.40343L2.44134 2.43343L4.05047 2.38843L4.58517 0.888428L5.11987 2.38843L6.729 2.43343L5.45279 3.40343L5.91183 4.93343L4.58517 4.02843L3.25852 4.93343L3.71755 3.40343Z" fill="currentColor"/>
  <path d="M1.50309 6.51343L0.675823 5.88843L1.71495 5.86343L2.06301 4.88843L2.41107 5.86343L3.4502 5.88843L2.62293 6.51343L2.92054 7.50343L2.06301 6.91843L1.20548 7.50343L1.50309 6.51343Z" fill="currentColor"/>
  <path d="M7.86387 3.3884C7.86387 6.4284 5.38206 8.8884 2.31512 8.8884C2.04777 8.8884 1.78547 8.8684 1.52821 8.8334C2.34034 10.0684 3.74266 10.8884 5.34171 10.8884C7.84873 10.8884 9.88159 8.8734 9.88159 6.3884C9.88159 4.8034 9.05432 3.4134 7.80838 2.6084C7.84369 2.8634 7.86387 3.1234 7.86387 3.3884Z" stroke="currentColor" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default MoonSvg;