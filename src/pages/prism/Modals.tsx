import React, { useState } from 'react';
import { Modal, ModalFooter } from '@prism/modal';
import { Button } from '@prism/button';
import { Input } from '@prism/input';
import ComponentShowcase, { ComponentInfo, ComponentStory } from '@/components/ComponentShowcase/ComponentShowcase';

// Component data for usage guidelines
const componentInfo: ComponentInfo = {
  id: 'modals',
  name: 'Modal Dialogs',
  category: 'Feedback',
  description: 'Modals are dialog overlays that interrupt the current workflow to capture user attention for focused tasks. They provide a way to display content on top of the main interface without navigating away.',
  usage: {
    whenToUse: [
      'For focused tasks that require user attention',
      'To confirm destructive actions',
      'For forms that create or edit data',
      'To display detailed information without leaving the page'
    ],
    whenNotToUse: [
      'For simple notifications (use alerts or toast)',
      'For complex workflows (use dedicated pages)',
      'When content can be displayed inline',
      'For non-essential information'
    ],
    anatomy: [
      { element: 'Overlay/Backdrop', description: 'Semi-transparent layer covering the main content' },
      { element: 'Modal container', description: 'The main dialog box with content' },
      { element: 'Header', description: 'Title area with optional close button' },
      { element: 'Body', description: 'Main content area' },
      { element: 'Footer', description: 'Action buttons area' }
    ],
    accessibility: [
      'Use role="dialog" and aria-modal="true"',
      'Trap focus within the modal',
      'Return focus to trigger element when closed',
      'Support Escape key to close',
      'Use aria-labelledby to reference the title'
    ],
    dosDonts: {
      dos: ['Use for focused, single-purpose tasks', 'Provide clear cancel/close options', 'Keep content concise'],
      donts: ['Stack modals on top of each other', 'Use for complex multi-step workflows', 'Auto-open modals without user action']
    }
  }
};

// Component stories with live examples
const ModalsDemo = (): ComponentStory[] => {
  const [showBasic, setShowBasic] = useState(false);
  const [showSmall, setShowSmall] = useState(false);
  const [showLarge, setShowLarge] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showScrollable, setShowScrollable] = useState(false);

  const componentStories: ComponentStory[] = [
    {
      id: 'basic',
      name: 'Basic Modal',
      description: 'Standard modal with title, content, and footer actions',
      code: `const [showModal, setShowModal] = useState(false);

<Button onClick={() => setShowModal(true)}>
  Open Modal
</Button>

<Modal
  open={showModal}
  onClose={() => setShowModal(false)}
  title="Basic Modal"
  size="medium"
>
  <p>This is a basic modal with default settings.</p>
  
  <ModalFooter>
    <Button variant="secondary" onClick={() => setShowModal(false)}>
      Cancel
    </Button>
    <Button onClick={() => setShowModal(false)}>
      Save Changes
    </Button>
  </ModalFooter>
</Modal>`,
      component: (
        <div>
          <Button onClick={() => setShowBasic(true)}>
            Open Basic Modal
          </Button>
          
          <Modal
            open={showBasic}
            onClose={() => setShowBasic(false)}
            title="Basic Modal"
            size="medium"
          >
            <p>This is a basic modal with default settings. It includes a title, body content, and can be closed by clicking the X button or pressing the Escape key.</p>
            <p>The modal automatically handles focus management, returning focus to the trigger element when closed.</p>
            
            <ModalFooter>
              <Button variant="secondary" onClick={() => setShowBasic(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowBasic(false)}>
                Save Changes
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    },
    {
      id: 'sizes',
      name: 'Modal Sizes',
      description: 'Different modal sizes for various content needs',
      code: `{/* Small Modal */}
<Modal open={showSmall} onClose={closeSmall} title="Small Modal" size="small">
  <p>Perfect for simple confirmations or quick actions.</p>
  <ModalFooter>
    <Button variant="secondary" onClick={closeSmall}>Cancel</Button>
    <Button onClick={closeSmall}>Confirm</Button>
  </ModalFooter>
</Modal>

{/* Large Modal */}
<Modal open={showLarge} onClose={closeLarge} title="Large Modal" size="large">
  <p>Useful for complex forms, detailed information, or multiple sections.</p>
  <ModalFooter>
    <Button variant="secondary" onClick={closeLarge}>Close</Button>
  </ModalFooter>
</Modal>`,
      component: (
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <Button onClick={() => setShowSmall(true)} variant="secondary">
            Small Modal
          </Button>
          <Button onClick={() => setShowLarge(true)} variant="secondary">
            Large Modal
          </Button>
          
          {/* Small Modal */}
          <Modal
            open={showSmall}
            onClose={() => setShowSmall(false)}
            title="Small Modal"
            size="small"
          >
            <p>This is a small modal, perfect for simple confirmations or quick actions.</p>
            
            <ModalFooter>
              <Button variant="secondary" onClick={() => setShowSmall(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowSmall(false)}>
                Confirm
              </Button>
            </ModalFooter>
          </Modal>

          {/* Large Modal */}
          <Modal
            open={showLarge}
            onClose={() => setShowLarge(false)}
            title="Large Modal"
            size="large"
          >
            <div>
              <p>This is a large modal that can accommodate more content. It's useful for complex forms, detailed information, or multiple sections of content.</p>
              
              <h3>Section 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
              <h3>Section 2</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              
              <h3>Section 3</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            
            <ModalFooter>
              <Button variant="secondary" onClick={() => setShowLarge(false)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    },
    {
      id: 'form-modal',
      name: 'Form Modal',
      description: 'Modal containing a form for data input',
      code: `<Modal
  open={showForm}
  onClose={() => setShowForm(false)}
  title="Create New Project"
  size="medium"
>
  <div className="space-y-4">
    <Input 
      label="Project Name"
      placeholder="Enter project name"
      required
    />
    <Input 
      label="Description"
      placeholder="Enter project description"
      multiline
      rows={3}
    />
    <Input 
      label="Team Size"
      type="number"
      placeholder="Number of team members"
    />
  </div>
  
  <ModalFooter>
    <Button variant="secondary" onClick={() => setShowForm(false)}>
      Cancel
    </Button>
    <Button onClick={() => setShowForm(false)}>
      Create Project
    </Button>
  </ModalFooter>
</Modal>`,
      component: (
        <div>
          <Button onClick={() => setShowForm(true)} variant="secondary">
            Form Modal
          </Button>
          
          <Modal
            open={showForm}
            onClose={() => setShowForm(false)}
            title="Create New Project"
            size="medium"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <Input 
                label="Project Name"
                placeholder="Enter project name"
                required
              />
              <Input 
                label="Description"
                placeholder="Enter project description"
                multiline
                rows={3}
              />
              <Input 
                label="Team Size"
                type="number"
                placeholder="Number of team members"
              />
            </div>
            
            <ModalFooter>
              <Button variant="secondary" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowForm(false)}>
                Create Project
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    },
    {
      id: 'confirmation',
      name: 'Confirmation Modal',
      description: 'Modal for confirming destructive actions',
      code: `<Modal
  open={showConfirmation}
  onClose={() => setShowConfirmation(false)}
  title="Confirm Deletion"
  size="small"
>
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  
  <ModalFooter>
    <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
      Cancel
    </Button>
    <Button variant="destructive" onClick={() => setShowConfirmation(false)}>
      Delete
    </Button>
  </ModalFooter>
</Modal>`,
      component: (
        <div>
          <Button onClick={() => setShowConfirmation(true)} variant="destructive">
            Delete Item
          </Button>
          
          <Modal
            open={showConfirmation}
            onClose={() => setShowConfirmation(false)}
            title="Confirm Deletion"
            size="small"
          >
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            
            <ModalFooter>
              <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => setShowConfirmation(false)}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    },
    {
      id: 'scrollable',
      name: 'Scrollable Content',
      description: 'Modal with long content that scrolls within the modal body',
      code: `<Modal
  open={showScrollable}
  onClose={() => setShowScrollable(false)}
  title="Terms and Conditions"
  size="medium"
>
  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
    {/* Long content that scrolls */}
    <h3>1. Introduction</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    {/* More content... */}
  </div>
  
  <ModalFooter>
    <Button variant="secondary" onClick={() => setShowScrollable(false)}>
      Decline
    </Button>
    <Button onClick={() => setShowScrollable(false)}>
      Accept
    </Button>
  </ModalFooter>
</Modal>`,
      component: (
        <div>
          <Button onClick={() => setShowScrollable(true)} variant="tertiary">
            View Terms
          </Button>
          
          <Modal
            open={showScrollable}
            onClose={() => setShowScrollable(false)}
            title="Terms and Conditions"
            size="medium"
          >
            <div style={{ maxHeight: '300px', overflowY: 'auto', padding: 'var(--spacing-sm)' }}>
              <h3>1. Introduction</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              
              <h3>2. User Agreement</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              
              <h3>3. Privacy Policy</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              
              <h3>4. Data Collection</h3>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              
              <h3>5. Termination</h3>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              
              <h3>6. Contact Information</h3>
              <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
            </div>
            
            <ModalFooter>
              <Button variant="secondary" onClick={() => setShowScrollable(false)}>
                Decline
              </Button>
              <Button onClick={() => setShowScrollable(false)}>
                Accept
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    }
  ];

  return componentStories;
};

// Props table component
const PropsTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-50">
          <th className="border border-gray-300 px-4 py-2 text-left">Property</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">open</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Controls modal visibility</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onClose</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">() =&gt; void</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm"><strong>Required.</strong> Callback to close modal</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Modal title displayed in header</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">"small" | "medium" | "large" | "xlarge"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">"medium"</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Modal size variant</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">showCloseButton</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Show X close button in header</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">closeOnOverlayClick</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">boolean</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Close when clicking backdrop</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">ReactNode</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Modal content</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">string</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
          <td className="border border-gray-300 px-4 py-2 text-sm">Additional CSS classes</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function Modals() {
  const modalsDemo = ModalsDemo();
  
  return (
    <ComponentShowcase 
      component={componentInfo}
      stories={modalsDemo}
      propsTable={<PropsTable />}
    />
  );
}