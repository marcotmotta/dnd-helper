import React from 'react'

import { ReactComponent as Abjuration } from '../../assets/schoolIcons/abjuration.svg';
import { ReactComponent as Conjuration } from '../../assets/schoolIcons/conjuration.svg';
import { ReactComponent as Divination } from '../../assets/schoolIcons/divination.svg';
import { ReactComponent as Enchantment } from '../../assets/schoolIcons/enchantment.svg';
import { ReactComponent as Evocation } from '../../assets/schoolIcons/evocation.svg';
import { ReactComponent as Illusion } from '../../assets/schoolIcons/illusion.svg';
import { ReactComponent as Necromancy } from '../../assets/schoolIcons/necromancy.svg';
import { ReactComponent as Transmutation } from '../../assets/schoolIcons/transmutation.svg';

//styles
import "./SchoolIcon.scss"

export default function SchoolIcon({ school_name }) {

  let componentToRender

  switch (school_name) {
    case 'Abjuration':
      componentToRender = <Abjuration />
      break
    case 'Conjuration':
      componentToRender = <Conjuration />
      break
    case 'Divination':
      componentToRender = <Divination />
      break
    case 'Enchantment':
      componentToRender = <Enchantment />
      break
    case 'Evocation':
      componentToRender = <Evocation />
      break
    case 'Illusion':
      componentToRender = <Illusion />
      break
    case 'Necromancy':
      componentToRender = <Necromancy />
      break
    case 'Transmutation':
      componentToRender = <Transmutation />
      break
  }

  return (
    <div className='school-icon'>
      {componentToRender}
    </div>
  )
}
