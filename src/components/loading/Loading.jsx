import React from 'react'

//styles
import './Loading.scss'

import { CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <div className='loading'><CircularProgress /></div>
  )
}
