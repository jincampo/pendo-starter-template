import * as React from "react"
import { Link } from 'react-router-dom'
import { cn } from "@lib/utils"
import { Icon } from "@prism/icon"

type NavigationItemType = 
  | 'home'
  | 'dashboards'
  | 'product'
  | 'people'
  | 'analytics'
  | 'nps'
  | 'guides'
  | 'orchestrate'
  | 'listen'
  | 'replay'
  | 'notifications'
  | 'settings'

type NavigationItemProps = {
  icon: React.ReactNode;
  label: string;
  itemKey: NavigationItemType;
  selectedItem?: NavigationItemType;
  isOpen?: boolean;
  to?: string;
  disableNavigation?: boolean;
}

type PendoNavigationProps = {
  isOpen?: boolean;
  selectedItem?: NavigationItemType;
  onCollapseClick?: () => void;
  disableNavigation?: boolean;
  /** Whether the navigation should be fixed to the left side of the page */
  fixed?: boolean;
}

const NavigationItem = React.forwardRef<HTMLDivElement, NavigationItemProps>(
  ({ icon, label, itemKey, selectedItem, isOpen = true, to, disableNavigation }, ref) => {
    const isSelected = itemKey === selectedItem;
    
    const content = (
      <div
        ref={ref}
        className={cn(
          "flex items-center box-content h-[26px] px-[6px] py-[6px] transition-colors rounded-[5px] overflow-hidden",
          !disableNavigation && "cursor-pointer",
          isSelected ? "bg-transparent" : "hover:bg-[#432277]"
        )}
      >
        <div className={cn(
          "w-5 h-5 m-0 flex items-center justify-center flex-shrink-0 p-1 rounded-[3px] box-content",
          isSelected ? "bg-[#ff48764d] border-2 border-[var(--color-pink-110)] text-[var(--color-gray-0)]" : "text-[#D1CDDB]",
          "hover:text-[var(--color-gray-0)]"
        )}
      >
          {icon}
        </div>
        <span className={cn(
          "ml-2 whitespace-nowrap transition-opacity",
          isSelected ? "text-[var(--color-gray-0)] font-semibold" : "text-[#D1CDDB]",
          "hover:text-[var(--color-gray-0)] hover:font-semibold",
          isOpen ? "opacity-100" : "opacity-0"
        )}>
          {label}
        </span>
      </div>
    );

    return to ? (
      <Link to={to} className="no-underline">
        {content}
      </Link>
    ) : content;
  }
);
NavigationItem.displayName = "NavigationItem";

const PendoNavigation = React.forwardRef<HTMLElement, PendoNavigationProps>(
  ({ isOpen = true, selectedItem = 'product', onCollapseClick, disableNavigation, fixed = true }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "h-screen bg-[#17044a] flex flex-col pl-3 pr-2 py-4 transition-[width] z-50",
          fixed && "fixed top-0 left-0",
          isOpen ? "w-[244px]" : "w-16"
        )}
      >
        <div className={cn(
          "pb-5 flex justify-start overflow-hidden transition-all",
          !isOpen && "pb-5 pl-0.5 svg:w-9 svg:h-9"
        )}>
          <button className="bg-none border-none p-0 cursor-pointer flex items-center justify-start">
            {isOpen ? (
              <svg width="98" height="36" viewBox="0 0 98 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3279_112004)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7 19.4146H16.4791V28.7747L25.9583 19.4146V10.0547H16.4791L7 19.4146Z" fill="#FF4876" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M77.8035 22.1695C80.1488 22.1695 82.0565 20.2813 82.0565 17.9604C82.0565 15.6395 80.1488 13.7513 77.8035 13.7513C75.4585 13.7513 73.5505 15.6395 73.5505 17.9604C73.5505 20.2813 75.4585 22.1695 77.8035 22.1695ZM82.0565 7.5H82.1719H84.0715V24.1778H82.0565V22.5126C80.8937 23.5792 79.3943 24.1636 77.8035 24.1636C74.3476 24.1636 71.5359 21.3808 71.5359 17.9604C71.5359 14.5398 74.3476 11.7572 77.8035 11.7572C79.3943 11.7572 80.8937 12.3414 82.0565 13.4082V7.5ZM36.0179 22.096C38.363 22.096 40.2709 20.2079 40.2709 17.8869C40.2709 15.5661 38.363 13.6779 36.0179 13.6779C33.6727 13.6779 31.7649 15.5661 31.7649 17.8869C31.7649 20.2079 33.6727 22.096 36.0179 22.096ZM31.7649 13.3349C32.9277 12.2682 34.4274 11.6838 36.0179 11.6838C39.4739 11.6838 42.2857 14.4666 42.2857 17.8869C42.2857 21.3074 39.4739 24.0901 36.0179 24.0901C34.4274 24.0901 32.9277 23.5059 31.7649 22.439V28.3473H29.75V11.6695H31.7649V13.3349ZM46.1301 16.9184C46.5836 15.0335 48.2733 13.68 50.2006 13.68C52.1027 13.68 53.6961 15.0046 54.1207 16.9184H46.1301ZM50.2006 11.6695C46.7963 11.6695 44.0268 14.4752 44.0268 17.9236C44.0268 21.3722 46.7963 24.1778 50.2006 24.1778C52.1069 24.1778 53.8566 23.4548 55.0017 22.1942L55.5965 21.5389L55.6732 21.4544L55.5898 21.3764L54.2964 20.1712L54.213 20.0933L54.1359 20.1779L53.541 20.8332C52.7823 21.6686 51.5335 22.1674 50.2006 22.1674C48.2733 22.1674 46.5837 20.8139 46.1301 18.9289H56.2141V17.9236C56.2141 14.4166 53.5726 11.6695 50.2006 11.6695ZM95.9849 17.9237C95.9849 20.2636 94.0773 22.1673 91.732 22.1673C89.387 22.1673 87.479 20.2636 87.479 17.9237C87.479 15.5836 89.387 13.6799 91.732 13.6799C94.0773 13.6799 95.9849 15.5836 95.9849 17.9237ZM91.732 11.6695C88.2761 11.6695 85.4643 14.4751 85.4643 17.9237C85.4643 21.3722 88.2761 24.1778 91.732 24.1778C95.1883 24.1778 98 21.3722 98 17.9237C98 14.4751 95.1883 11.6695 91.732 11.6695ZM63.7006 11.6695C62.3006 11.6695 60.9668 12.2079 59.9169 13.1912V11.6695H57.9554V24.1778H59.9169V17.7946C59.9169 15.5172 61.6143 13.6643 63.7006 13.6643C65.7873 13.6643 67.4851 15.5172 67.4851 17.7946V24.1778H69.4462V17.7946C69.4462 14.4172 66.8687  11.6695 63.7006 11.6695Z" fill="white" />
                </g>
              </svg>
            ) : (
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3279_112003)">
                  <rect width="36" height="36" rx="7" fill="#FF4876" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.4999 10L7.5 19.4999H16.4999V29L25.5 19.4999V10H16.4999Z" fill="white" />
                </g>
              </svg>
            )}
          </button>
        </div>
        
        <div className="flex-1 flex flex-col gap-1">
          <NavigationItem icon={<Icon name="Home" size="nav" />} label="Home" itemKey="home" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="LayoutDashboard" size="nav" />} label="Dashboards" itemKey="dashboards" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="Package2" size="nav" />} label="Product" itemKey="product" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="Users" size="nav" />} label="People" itemKey="people" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="BarChart2" size="nav" />} label="Analytics" itemKey="analytics" selectedItem={selectedItem} isOpen={isOpen} to="/chat" disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="Heart" size="nav" />} label="NPS" itemKey="nps" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="MessageSquare" size="nav" />} label="Guides" itemKey="guides" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="PlaySquare" size="nav" />} label="Orchestrate" itemKey="orchestrate" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="Headphones" size="nav" />} label="Listen" itemKey="listen" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
        </div>
        
        <div className="mt-auto flex flex-col gap-1">
          <NavigationItem icon={<Icon name="Bell" size="nav" />} label="Notifications" itemKey="notifications" selectedItem={selectedItem} isOpen={isOpen} disableNavigation={disableNavigation} />
          <NavigationItem icon={<Icon name="Settings" size="nav" />} label="Settings" itemKey="settings" selectedItem={selectedItem} isOpen={isOpen} to="/settings" disableNavigation={disableNavigation} />
        </div>

        <div 
          className={cn(
            "mt-3 pt-3 px-[6px] cursor-pointer flex items-center text-[var(--color-gray-0)] border-t border-t-[rgba(255,255,255,0.1)]",
            "hover:font-semibold",
            !isOpen && "justify-center",
            "relative"
          )}
          onClick={onCollapseClick}
        >
          <div className="w-5 h-5 m-1 flex items-center justify-center">
            <Icon 
              name="ChevronLeft" 
              size="nav"
              className={cn(
                "transition-transform",
                !isOpen && "rotate-180"
              )}
            />
          </div>
          <span className={cn(
            "transition-opacity whitespace-nowrap",
            isOpen ? "opacity-100" : "opacity-0"
          )}>
            {isOpen ? "Collapse" : ""}
          </span>
        </div>
      </nav>
    );
  }
);
PendoNavigation.displayName = "PendoNavigation";

export { PendoNavigation, NavigationItem };