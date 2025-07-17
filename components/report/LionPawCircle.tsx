import React from "react";

interface LionPawCircleProps {
  className?: string;
  style?: React.CSSProperties;
}

const LionPawCircle: React.FC<LionPawCircleProps> = ({ className = "", style = {} }) => (
  <div className={`lion-paw-circle ${className}`} style={style}>
    <img src="/images/report/lion_pow.png" alt="Lion Paw" />
  </div>
);

export default LionPawCircle;
