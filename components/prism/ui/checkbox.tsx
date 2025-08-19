import * as React from "react";
import { cn } from "@lib/utils";
import { Icon } from "@prism/icon";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Callback when the checkbox state changes */
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, indeterminate, disabled, onCheckedChange, ...props }, ref) => {
    const internalRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate]);

    const handleRef = (element: HTMLInputElement | null) => {
      if (element) {
        // Handle internal ref
        (internalRef as React.MutableRefObject<HTMLInputElement>).current = element;
        // Handle forwarded ref
        if (typeof ref === 'function') {
          ref(element);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement>).current = element;
        }
      }
    };

    return (
      <div className={cn("pendo-checkbox", className)}>
        <input
          type="checkbox"
          ref={handleRef}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="pendo-checkbox__input"
          aria-checked={indeterminate ? 'mixed' : checked}
          {...props}
        />
        <div className="pendo-checkbox__box">
          {checked && (
            <Icon 
              name="Check" 
              size="small" 
              className="text-white" 
              aria-hidden="true"
            />
          )}
          {indeterminate && (
            <Icon 
              name="Minus" 
              size="small" 
              className="text-white" 
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };