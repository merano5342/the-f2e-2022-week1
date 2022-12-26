import { useRef } from 'react'
import useElementOnScreen from '../hooks/useElementOnScreen'


const AnimateIn = ({ from, to, children }) => {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles = {
    transition: "400ms ease-in-out"
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
            ...defaultStyles,
            ...to
          }
          : {
            ...defaultStyles,
            ...from
          }
      }
    >
      {children}
    </div>
  );
};

export const ScaleIn1 = ({ children }) => (
  <AnimateIn
    from={{ opacity: '0%', scale: "1", translate: "-300px 0" }}
    to={{ opacity: '100%', scale: "1", translate: "0 0" }}>
    {children}
  </AnimateIn>
);

export const ScaleIn2 = ({ children }) => (
  <AnimateIn
    from={{ opacity: '0%', scale: "1", translate: "300px 0" }}
    to={{ opacity: '100%', scale: "1", translate: "0 0" }}>
    {children}
  </AnimateIn>
);
export const ScaleIn3 = ({ children }) => (
  <AnimateIn
    from={{ opacity: '0', translate: "0 -100px", transition: "300ms ease" }}
    to={{ opacity: '100%', translate: "0 0", transition: "300ms ease" }}>
    {children}
  </AnimateIn>
);

export const Opacity1 = ({ children }) => (
  <AnimateIn
    from={{ opacity: '0', transition: "400ms ease" }}
    to={{ opacity: '100%', transition: "400ms ease" }}>
    {children}
  </AnimateIn>
);

const Animate = {
  ScaleIn1,
  ScaleIn2,
  ScaleIn3,
  Opacity1
};

export default Animate