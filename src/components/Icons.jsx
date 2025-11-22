import { Icon } from '@iconify/react'

// Icon registry to keep a single source of truth for icon identifiers.
const iconNames = {
  lightbulb: 'solar:lightbulb-bold-duotone',
  clock: 'solar:clock-circle-bold-duotone',
  star: 'solar:star-bold-duotone',
  cap: 'solar:graduation-cap-2-bold-duotone',
  book: 'solar:notebook-bold-duotone',
  bell: 'solar:bell-bing-bold-duotone',
  sparkles: 'solar:sparkles-bold-duotone',
  home: 'solar:home-2-bold-duotone',
  edit: 'solar:pen-new-round-bold-duotone',
}

// Shared icon component so components only pass semantic names.
export const AppIcon = ({ name, size = 32, className }) => {
  return <Icon className={className} icon={iconNames[name] || name} width={size} height={size} />
}

export { iconNames }
