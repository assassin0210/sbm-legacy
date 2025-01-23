import {
  faBell,
  faClipboardUser,
  faComments,
  faFileImport,
  faGlobe,
  faLocationArrow,
  faLocationDot,
  faMapLocationDot,
  faRoad,
  faRoute,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { P16, P24, P30, P48 } from '@/shared/ui/Typography'

export const WhatCanYouDo = () => {
  return (
    <section className="features-cta text-center" id="FEATURES">
      <div className="container">
        <P48
          weight="font-normal"
          as="h2"
          color="text-sbm-secondary"
          className=" text-center"
        >
          What Can You Do With School Bus Manager?
        </P48>
        <P30
          className="text-center mt-4"
          weight="font-normal"
          color="text-sbm-neutral"
        >
          School Bus Manager is designed specifically to take rider data from
          any student information system and create efficient bus routes and
          trips with turn-by-turn directions, stop times, maps and more!{' '}
        </P30>

        <div className="grid laptop:grid-cols-2 justify-center w-fit gap-x-12 gap-y-8 desktop:gap-y-[50px] my-12 laptop:my-20 mx-auto">
          {items.map((item, index) => (
            <article key={index} className="flex text-start items-start gap-10">
              <div className="flex items-center justify-center w-[80px] h-[80px] tablet:w-[134px] tablet:h-[134px] rounded-full flex-shrink-0 bg-sbm-white">
                <FontAwesomeIcon
                  className="text-sbm-secondary text-[38px] tablet:text-[52px]"
                  icon={item.image}
                />
              </div>
              <div className="max-w-[370px]">
                <P24 weight="font-bold" color="text-sbm-secondary" as="h4">
                  {item.title}
                </P24>
                <P16 color="text-sbm-neutral-100" className="mt-2">
                  {item.subtitle}
                </P16>
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
    image: faRoute,
    title: 'Automated Route Building',
    subtitle:
      'Build and organize routes efficiently. Easily keep track of children, buses and drivers.',
  },
  {
    image: faMapLocationDot,
    title: 'Route Optimization',
    subtitle:
      'Quickly look up children’s information contact info, profile… etc.',
  },
  {
    image: faRoad,
    title: 'Tool Sets for load balancing',
    subtitle:
      'Automatically incorporate turn-by-turn directions into every route and trip.',
  },
  {
    image: faGlobe,
    title: 'Worldwide Maps at no charge',
    subtitle: 'Simply log children’s attendance all on one screen.',
  },
  {
    image: faLocationDot,
    title: 'Live vehicle tracking',
    subtitle: 'Clearly organize your routes by years and sessions.',
  },
  {
    image: faClipboardUser,
    title: 'Live attendance taking',
    subtitle:
      'Instantly import department of education files and easily manage daily updates.',
  },
  {
    image: faRoute,
    title: 'Riders / Parents Communications',
    subtitle:
      'Multi channel Riders/parents communications (Email, Texting, ...)',
  },
  {
    image: faComments,
    title: 'Riders / Parents Request Handling',
    subtitle:
      'GPS’s plug and play GPS is installed in 3 easy steps. It’s durable, secure and entirely self-maintained. Avoid any hard wiring or installation costs by simply locating.',
  },
  {
    image: faBell,
    title: 'ETA notification',
    subtitle: 'Clearly organize your routes by years and sessions.',
  },
  {
    image: faFileImport,
    title: 'Manage Field Trips',
    subtitle:
      'Instantly import department of education files and easily manage daily updates.',
  },
  {
    image: faLocationArrow,
    title: 'Annual Rollover',
    subtitle:
      'GPS’s 3G, GPS technologies allow you to watch your vehicles in real-time and communicate new routes or stops directly to their on-board GARMIN navigation.',
  },
  {
    image: faRoute,
    title: 'Integration with data sources',
    subtitle:
      'GPS’s plug and play GPS is installed in 3 easy steps. It’s durable, secure and entirely self-maintained. Avoid any hard wiring or installation costs by simply locating.',
  },
  {
    image: faRoute,
    title: 'Search Riders',
    subtitle: 'Clearly organize your routes by years and sessions.',
  },

  {
    image: faRoute,
    title: 'Organize School Sessions',
    subtitle:
      'Instantly import department of education files and easily manage daily updates.',
  },
  {
    image: faRoute,
    title: 'Turn-by-Turn Directions',
    subtitle:
      'GPS’s 3G, GPS technologies allow you to watch your vehicles in real-time and communicate new routes or stops directly to their on-board GARMIN navigation.',
  },
  {
    image: faRoute,
    title: 'Simple Data Import',
    subtitle:
      'GPS’s plug and play GPS is installed in 3 easy steps. It’s durable, secure and entirely self-maintained. Avoid any hard wiring or installation costs by simply locating.',
  },
]
