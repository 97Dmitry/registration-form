import * as React from "react";

function RadioButtonIndicator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={12}
      fill="#0880AE"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.634.634a.8.8 0 011.132 1.132l-9.6 9.6a.8.8 0 01-1.132 0l-4-4a.8.8 0 011.132-1.132L5.6 9.67 14.634.634z" />
    </svg>
  );
}

export default RadioButtonIndicator;
