import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps, memo } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <Svg width={22} height={12} viewBox="0 0 22 12" fill="none">
    <Path
      d="M21.7076 11.7073C21.6147 11.8003 21.5044 11.874 21.383 11.9244C21.2616 11.9747 21.1315 12.0006 21.0001 12.0006C20.8687 12.0006 20.7385 11.9747 20.6171 11.9244C20.4957 11.874 20.3854 11.8003 20.2926 11.7073L11.0001 2.41356L1.70757 11.7073C1.51993 11.895 1.26543 12.0004 1.00007 12.0004C0.734704 12.0004 0.480208 11.895 0.292568 11.7073C0.104927 11.5197 -0.000488276 11.2652 -0.000488281 10.9998C-0.000488286 10.7344 0.104927 10.4799 0.292568 10.2923L10.2926 0.29231C10.3854 0.199333 10.4957 0.125575 10.6171 0.0752506C10.7385 0.0249263 10.8687 -0.000976562 11.0001 -0.000976562C11.1315 -0.000976562 11.2616 0.0249263 11.383 0.0752506C11.5044 0.125575 11.6147 0.199333 11.7076 0.29231L21.7076 10.2923C21.8005 10.3852 21.8743 10.4955 21.9246 10.6169C21.975 10.7383 22.0009 10.8684 22.0009 10.9998C22.0009 11.1312 21.975 11.2614 21.9246 11.3828C21.8743 11.5041 21.8005 11.6144 21.7076 11.7073Z"
      fill="#343330"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
