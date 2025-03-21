export const Spinner = (props: any) => {
  return (
    <svg
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.15"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 20C16.9183 20 20.5 16.4183 20.5 12C20.5 7.58172 16.9183 4 12.5 4C8.08172 4 4.5 7.58172 4.5 12C4.5 16.4183 8.08172 20 12.5 20ZM12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 4C8.08172 4 4.5 7.58172 4.5 12C4.5 16.4183 8.08172 20 12.5 20C13.0523 20 13.5 20.4477 13.5 21C13.5 21.5523 13.0523 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 12.5523 22.0523 13 21.5 13C20.9477 13 20.5 12.5523 20.5 12C20.5 7.58172 16.9183 4 12.5 4Z"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1425_2753"
          x1="12.5"
          y1="12.5"
          x2="12.5"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
