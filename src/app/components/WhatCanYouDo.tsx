import {
  faClipboardUser,
  faFileImport,
  faFolderTree,
  faMagnifyingGlass,
  faMapLocationDot,
  faRepeat,
  faRoad,
  faRoute,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { P14, P18, P24, P38 } from '@/shared/ui/Typography'

export const WhatCanYouDo = () => {
  return (
    <section
      className="bg-sbm-neutral-800 text-center py-8 laptop:py-16"
      id="FEATURES"
    >
      <div className="container">
        <P38
          weight="font-normal"
          as="h2"
          color="text-sbm-secondary"
          className=" text-center"
        >
          What can you do with School Bus Manager?
        </P38>
        <P24
          className="text-center mt-4 maxTablet:text-[16px] maxTablet:leading-[24px] laptop:mx-36"
          weight="font-normal"
          color="text-sbm-neutral"
          as="h2"
        >
          School Bus Manager is designed specifically to take rider data from
          any student information system and create efficient bus routes and
          trips with turn-by-turn directions, stop times, maps and more!{' '}
        </P24>

        <div className="grid laptop:grid-cols-2 justify-center w-fit gap-x-4 gap-y-8 desktop:gap-y-[50px] my-12 laptop:my-20 mx-auto">
          {items.map((item, index) => (
            <article
              key={index}
              className="flex text-start items-start gap-x-4"
            >
              <div className="flex items-center justify-center w-[80px] h-[80px] tablet:w-[80px] tablet:h-[80px] rounded-full flex-shrink-0 bg-sbm-white">
                <FontAwesomeIcon
                  className="text-sbm-secondary text-[32px] tablet:text-[32px]"
                  icon={item.image}
                />
              </div>
              <div className="max-w-[320px]">
                <P18 weight="font-bold" color="text-sbm-secondary" as="h4">
                  {item.title}
                </P18>
                <P14 color="text-sbm-neutral-100" className="mt-2">
                  {item.subtitle}
                </P14>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const items = [
  {
    image: faMapLocationDot,
    title: 'Build routes',
    subtitle:
      'Build and organize Optimized routes efficiently. Easily keep track of children, buses and drivers.',
  },

  {
    image: faRoad,
    title: 'Tools for load balancing',
    subtitle:
      'Easily compare and analyze your routes to identify intersections and overlaps, allowing you to adjust stops and reassign riders for better route balance and efficiency.',
  },

  {
    image: faClipboardUser,
    title: 'Take attendance',
    subtitle: 'Simply log attendance and monitor who’s onboard!',
  },

  {
    image: faRoute,
    title: 'Turn-by-turn directions',
    subtitle:
      'Automatically incorporate turn-by-turn directions into every route and trip.',
  },

  {
    image: faFileImport,
    title: 'Simple data import',
    subtitle:
      'Instantly import CSV or XLSX files and easily manage daily updates.',
  },
  {
    image: faMagnifyingGlass,
    title: 'Search riders',
    subtitle: 'Quickly look up rider information contact info, profile… etc.',
  },
  {
    image: faFolderTree,
    title: 'Organize school sessions',
    subtitle:
      'Instantly import department of education files and easily manage daily updates.',
  },

  {
    image: faRepeat,
    title: 'Annual rollover',
    subtitle: 'Easily roll over routes from year to year.',
  },
]
