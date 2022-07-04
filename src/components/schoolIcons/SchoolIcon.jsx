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
  school_name = school_name.toLowerCase();

  switch (school_name) {
    case 'abjuration':
      componentToRender = <Abjuration />
      break
    case 'conjuration':
      componentToRender = <Conjuration />
      break
    case 'divination':
      componentToRender = <Divination />
      break
    case 'enchantment':
      componentToRender = <Enchantment />
      break
    case 'evocation':
      componentToRender = <Evocation />
      break
    case 'illusion':
      componentToRender = <Illusion />
      break
    case 'necromancy':
      componentToRender = <Necromancy />
      break
    case 'transmutation':
      componentToRender = <Transmutation />
      break
  }

  return (
    <div className='school-icon'>
      {componentToRender}
    </div>
  )
}
