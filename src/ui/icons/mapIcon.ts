import type { IconifyIcon } from '@iconify/types'

export type AllowedIcons =
  | 'edit'
  | 'delete'
  | 'add'
  | 'search'
  | 'close'
  | 'back'
  | 'lock'

export function mapIcon(name: AllowedIcons): IconifyIcon {
  switch (name) {
    case 'edit':
      return ''

    default:
      return null
  }
}
