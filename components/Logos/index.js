import Image from 'next/image'

import DomestikaLight from 'public/logos/light/domestika.png'
import DomestikaDark from 'public/logos/dark/domestika.png'
import NetbynetLight from 'public/logos/light/netbynet.png'
import NetbynetDark from 'public/logos/dark/netbynet.png'
import CdmonLight from 'public/logos/light/cdmon.png'
import CdmonDark from 'public/logos/dark/cdmon.png'
import QustodioLight from 'public/logos/light/qustodio.png'
import QustodioDark from 'public/logos/dark/qustodio.png'
import MortensenLight from 'public/logos/light/mortensen.png'
import MortensenDark from 'public/logos/dark/mortensen.png'
import ElsaperettiLight from 'public/logos/light/elsaperetti.png'
import ElsaperettiDark from 'public/logos/dark/elsaperetti.png'
import McdonaldsLight from 'public/logos/light/mcdonalds.png'
import McdonaldsDark from 'public/logos/dark/mcdonalds.png'
import TapngoLight from 'public/logos/light/tapngo.png'
import TapngoDark from 'public/logos/dark/tapngo.png'
import CyneekLight from 'public/logos/light/cyneek.png'
import CyneekDark from 'public/logos/dark/cyneek.png'

export default function Logos() {
  const places = [
    { name: 'Domestika', lightIcon: DomestikaLight, darkIcon: DomestikaDark },
    { name: 'Netbynet', lightIcon: NetbynetLight, darkIcon: NetbynetDark },
    { name: 'CDmon', lightIcon: CdmonLight, darkIcon: CdmonDark },
    { name: 'Qustodio', lightIcon: QustodioLight, darkIcon: QustodioDark },
    { name: 'Mortensen', lightIcon: MortensenLight, darkIcon: MortensenDark },
    { name: 'Elsa Peretti Foundation', lightIcon: ElsaperettiLight, darkIcon: ElsaperettiDark },
    { name: 'McDonalds', lightIcon: McdonaldsLight, darkIcon: McdonaldsDark },
    { name: 'TapNGo', lightIcon: TapngoLight, darkIcon: TapngoDark },
    { name: 'Cyneek', lightIcon: CyneekLight, darkIcon: CyneekDark },
  ]

  return (<>
    {places.map((place, index) => (
      <li key={index} className="place-logo h-8 sm:h-12 relative opacity-80 hover:opacity-100 transition-opacity">
        <Image
          src={place.lightIcon}
          alt={place.name}
          className="h-8 sm:h-12 w-auto dark:opacity-0"
        />
        <Image
          src={place.darkIcon}
          alt={place.name}
          className="h-8 sm:h-12 w-auto opacity-0 dark:opacity-100 absolute inset-0"
        />
      </li>
    ))}


  </>)
}
