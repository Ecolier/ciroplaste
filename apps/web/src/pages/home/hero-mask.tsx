function HeroMask() {
  return (
    <svg viewBox="0 0 1328 885" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="svgmask1">
        <circle cx="1101" cy="664" r="215" fill="#fff" />
        <path
          d="M670.919 436C552.223 436 456 339.741 456 221C456 102.259 552.223 6 670.919 6H1101.08C1219.78 6 1316 102.259 1316 221C1316 339.741 1219.78 436 1101.08 436H670.919Z"
          fill="#fff"
        />
      </mask>
      <mask id="svgmask2">
        <circle cx="228" cy="221" r="215" fill="#fff" />
        <path
          d="M227.919 879C109.223 879 13 782.741 13 664C13 545.259 109.223 449 227.919 449H658.081C776.777 449 873 545.259 873 664C873 782.741 776.777 879 658.081 879H227.919Z"
          fill="#fff"
        />
      </mask>
      <image
        width="200%"
        x="-40%"
        y="-75%"
        preserveAspectRatio="xMinYMin slice"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkHref="landing_1.jpg"
        mask="url(#svgmask1)"
      ></image>
      <image
        width="200%"
        x="-82%"
        y="-65%"
        preserveAspectRatio="xMinYMin slice"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkHref="landing_2.jpg"
        mask="url(#svgmask2)"
      ></image>
    </svg>
  );
}

export default HeroMask;
