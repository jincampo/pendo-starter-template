import '../index.css'
import { Button } from '../../components/prism/ui/button'
import { ArrowRight, Plus } from 'lucide-react'

const buttonSizes = ['default', 'small', 'mini'] as const
const buttonStates = ['Default', 'Disabled', 'With Icon', 'Icon Only'] as const

export default function Prism() {
  return (
    <div className="prism-preview">
      <h1>Buttons</h1>
      <p className="description">Our button components come in different variants and states to help create clear and consistent actions throughout the interface.</p>
      
      <section id="buttons">
        <div className="grid grid-cols-2 gap-8">
          {/* Headers */}
          <div className="text-center font-semibold">Primary</div>
          <div className="text-center font-semibold">Secondary</div>
          
          {/* Button Grid */}
          <div className="space-y-8">
            {buttonSizes.map((size) => (
              <div key={size} className="space-y-4"> 
                <h4 className="text-sm font-medium text-[var(--color-gray-100)] capitalize">{size}</h4>
                <div className="space-y-4">
                  {buttonStates.map((state) => (
                    <div key={state} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-500">{state}</div>
                      {state === 'Default' && <Button size={size}>Button</Button>}
                      {state === 'Disabled' && <Button size={size} disabled>Button</Button>}
                      {state === 'With Icon' && (
                        <Button size={size}>
                          Button
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                      {state === 'Icon Only' && (
                        <Button size="mini">
                          <Plus className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            {buttonSizes.map((size) => (
              <div key={size} className="space-y-4"> 
                <h4 className="text-sm font-medium text-[var(--color-gray-100)] capitalize">{size}</h4>
                <div className="space-y-4">
                  {buttonStates.map((state) => (
                    <div key={state} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-500">{state}</div>
                      {state === 'Default' && <Button variant="secondary" size={size}>Button</Button>}
                      {state === 'Disabled' && <Button variant="secondary" size={size} disabled>Button</Button>}
                      {state === 'With Icon' && (
                        <Button variant="secondary" size={size}>
                          Button
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                      {state === 'Icon Only' && (
                        <Button variant="secondary" size="mini">
                          <Plus className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}