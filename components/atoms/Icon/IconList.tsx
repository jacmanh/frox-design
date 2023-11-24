import SVG from '*.svg'

import ArrowLeft from './assets/arrow-left.svg'
import Checkmark from './assets/checkmark.svg'
import Email from './assets/email.svg'
import Eye from './assets/eye.svg'
import Moon from './assets/moon.svg'
import Phone from './assets/phone.svg'
import Sun from './assets/sun.svg'
import User from './assets/user.svg'

export const IconComponents: Record<IconList, typeof SVG> = {
  user: User,
  email: Email,
  eye: Eye,
  phone: Phone,
  checkmark: Checkmark,
  moon: Moon,
  sun: Sun,
  arrowLeft: ArrowLeft
}

export enum IconList {
  user = 'user',
  email = 'email',
  eye = 'eye',
  phone = 'phone',
  checkmark = 'checkmark',
  moon = 'moon',
  sun = 'sun',
  arrowLeft = 'arrowLeft'
}
