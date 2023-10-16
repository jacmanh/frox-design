import SVG from '*.svg'

import Checkmark from './assets/checkmark.svg'
import Email from './assets/email.svg'
import Eye from './assets/eye.svg'
import Phone from './assets/phone.svg'
import User from './assets/user.svg'

export const IconComponents: Record<IconList, typeof SVG> = {
  user: User,
  email: Email,
  eye: Eye,
  phone: Phone,
  checkmark: Checkmark
}

export enum IconList {
  user = 'user',
  email = 'email',
  eye = 'eye',
  phone = 'phone',
  checkmark = 'checkmark'
}
