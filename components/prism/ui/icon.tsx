import * as React from "react"
import * as LucideIcons from "lucide-react"

type IconSizeMap = {
  small: 14;
  medium: 16;
  large: 24;
  nav: 20;
}

type StrokeMap = {
  small: 2;
  medium: 2.66;
  large: 3;
  nav: 2;
}

type IconProps = {
  name: keyof typeof LucideIcons;
  size?: keyof IconSizeMap;
  color?: string;
  className?: string;
}

const sizeMap: IconSizeMap = {
  small: 14,
  medium: 16,
  large: 24,
  nav: 20,
}

const strokeMap: StrokeMap = {
  small: 2,
  medium: 2.66,
  large: 3,
  nav: 2,
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'medium', color = 'currentColor', className }, ref) => {
    const LucideIcon = LucideIcons[name] as React.FC<LucideIcons.LucideProps>
    const sizeInPixels = sizeMap[size]
    const strokeWidth = strokeMap[size]

    if (!LucideIcon) {
      console.warn(`Icon "${name}" not found in Lucide icons`)
      return null
    }

    return (
      <LucideIcon
        ref={ref}
        color={color}
        size={sizeInPixels}
        strokeWidth={strokeWidth}
        className={className}
      />
    )
  }
)

Icon.displayName = "Icon"

export { Icon }