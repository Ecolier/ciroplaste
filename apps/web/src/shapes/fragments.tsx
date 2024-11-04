const assetsUrl = import.meta.env.VITE_ASSETS_BASE_URL;

function Fragments() {
  return (
    <svg viewBox="0 0 1328 885" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="svgmask1">
        <path
          d="M458 16H885C885 16 685.5 16 685.5 221.5C685.5 427 885 427 885 427H458V16Z"
          fill="#D9D9D9"
        />
        <path
          d="M870 870L443 870C443 870 642.5 870 642.5 664.5C642.5 459 443 459 443 459L870 459L870 870Z"
          fill="#D9D9D9"
        />
        <rect x="901" y="16" width="411" height="411" fill="#D9D9D9" />
      </mask>
      <mask id="svgmask2">
        <rect
          x="427"
          y="870"
          width="411"
          height="411"
          transform="rotate(-180 427 870)"
          fill="#D9D9D9"
        />
        <path
          d="M1029.5 587.5L901 870L901 459L1312 459L1029.5 587.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M298.5 298.5L427 16L427 427L16 427L298.5 298.5Z"
          fill="#D9D9D9"
        />
      </mask>
      <image
        width="200%"
        x="-40%"
        y="-75%"
        preserveAspectRatio="xMinYMin slice"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkHref={`${assetsUrl}/fragment_2.webp`}
        mask="url(#svgmask1)"
      ></image>
      <image
        width="200%"
        x="-82%"
        y="-65%"
        preserveAspectRatio="xMinYMin slice"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkHref={`${assetsUrl}/fragment_1.webp`}
        mask="url(#svgmask2)"
      ></image>
    </svg>
  );
}

export default Fragments;
