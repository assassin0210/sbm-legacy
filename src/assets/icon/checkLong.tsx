export const CheckLong = (props: any) => {
  const className = 'text-[#33AFF7]'

  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={props?.className ? props.className : className}
    >
      <path
        d="M6.41622 22.0194L2.81622 12.1554L1.04022 12.8994L0.416219 11.2434L4.59222 9.53936L6.96822 16.5954C7.06422 16.9154 7.15222 17.2434 7.23222 17.5794C7.32822 17.9154 7.40822 18.2434 7.47222 18.5634H7.56822C7.61622 18.2434 7.67222 17.9154 7.73622 17.5794C7.80022 17.2434 7.86422 16.9154 7.92822 16.5954L11.6962 0.419364H14.0482L8.86422 22.0194H6.41622ZM6.41622 62.0194L2.81622 52.1554L1.04022 50 0.41622 48Z"
        fill="currentColor"
      />
    </svg>
  )
}
