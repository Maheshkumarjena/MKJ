"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

// cn utility function (assuming it's provided elsewhere or a simple concatenation)
// For the purpose of this component, we'll define a basic cn if not available.
// In a real Next.js project, this would typically come from a library like 'clsx' or 'tailwind-merge'.

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

interface MobileNavItemProps {
  item: NavItem;
  onClose: () => void;
  depth?: number;
}

interface NavItem {
  name: string;
  link?: string; // Make link optional since dropdown items won't have links
  items?: NavItem[]; // Nested items for dropdown
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-0 z-40 w-full", className)} // Changed top-20 to top-0 for better sticky behavior
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        // Adjusted boxShadow to match the theme's subtle glow
        boxShadow: visible
          ? "0 0 24px rgba(0, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 255, 255, 0.04), 0 0 4px rgba(0, 255, 255, 0.08), 0 16px 68px rgba(0, 0, 0, 0.05)"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex",
        // Changed background to a darker shade matching the theme
        visible && "bg-gray-900/80 dark:bg-gray-900/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        setActiveDropdown(null);
      }}
      className={cn(
        // Changed text color to match the theme's text-gray-300/text-gray-200
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-gray-200 transition duration-200 hover:text-cyan-400 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div key={`nav-item-${idx}`} className="relative">
          {item.link ? (
            <a
              href={item.link}
              onMouseEnter={() => setHovered(idx)}
              onClick={() => {
                onItemClick?.();
                setActiveDropdown(null);
              }}
              className="relative flex items-center px-4 py-2 text-gray-200 dark:text-gray-200" // Adjusted text color
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  // Changed hover background to match theme's subtle highlight
                  className="absolute inset-0 h-full w-full rounded-full bg-cyan-500/10 dark:bg-cyan-500/10"
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </a>
          ) : (
            <div
              onMouseEnter={() => {
                setHovered(idx);
                setActiveDropdown(idx);
              }}
              onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
              className="relative flex cursor-pointer items-center px-4 py-2 text-gray-200 dark:text-gray-200" // Adjusted text color
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  // Changed hover background to match theme's subtle highlight
                  className="absolute inset-0 h-full w-full rounded-full bg-cyan-500/10 dark:bg-cyan-500/10"
                />
              )}
              <span className="relative z-20">{item.name}</span>
              {item.items && (
                <svg
                  className="ml-1 h-4 w-4 text-gray-200" // Adjusted icon color
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>
          )}

          {item.items && (
            <Dropdown items={item.items} isOpen={activeDropdown === idx} />
          )}
        </div>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(0, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 255, 255, 0.04), 0 0 4px rgba(0, 255, 255, 0.08), 0 16px 68px rgba(0, 0, 0, 0.05)"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        visible && "bg-gray-900/80 dark:bg-gray-900/80",
        className,
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { 
              visible,
              className: cn(child.props.className, visible ? "backdrop-blur-md" : "")
            })
          : child
      )}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-cyan-400 dark:text-cyan-400" onClick={onClick} /> // Adjusted icon color
  ) : (
    <IconMenu2 className="text-cyan-400 dark:text-cyan-400" onClick={onClick} /> // Adjusted icon color
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      {/* Adjusted text color to match the theme */}
      <span className="font-medium text-gray-200 dark:text-cyan-400">Startup</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    // Primary variant now uses the cyan-blue gradient from HeroSection
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30",
    // Secondary variant now uses the border style from HeroSection
    secondary: "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 shadow-none",
    // Dark variant mimics the social icon buttons
    dark: "bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-none",
    // Gradient variant is kept as it already aligns well
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export const Dropdown = ({ items, isOpen }: { items: NavItem[]; isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          // Adjusted background and shadow for the dropdown
          className="absolute left-0 top-full z-50 mt-2 w-48 origin-top-left rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-gray-700 focus:outline-none"
        >
          {items.map((item, idx) => (
            <a
              key={`dropdown-${idx}`}
              href={item.link || "#"}
              // Adjusted text and hover colors for dropdown items
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavItem = ({ item, onClose, depth = 0 }: MobileNavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Added state for hover effect

  return (
    <div
      className="relative w-full" // Ensure relative positioning for absolute hover effect
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.items ? (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`relative z-20 flex w-full items-center justify-between py-2 px-4 rounded-md ${ // Added px-4 and rounded-md
              depth > 0 ? 'pl-8' : '' // Increased padding for nested items
            } text-gray-200`}
          >
            {isHovered && ( // Render hover effect for button
                <motion.div
                    layoutId="mobile-hovered" // Unique layoutId for mobile
                    className="absolute inset-0 h-full w-full rounded-md bg-cyan-500/10"
                />
            )}
            <span className="relative z-20 text-gray-200 dark:text-gray-200">
              {item.name}
            </span>
            <svg
              className={`relative z-20 h-4 w-4 transform transition-transform text-gray-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4 overflow-hidden" // Added overflow-hidden for smooth height transition
            >
              {item.items.map((subItem, subIdx) => (
                <MobileNavItem
                  key={`mobile-subitem-${subIdx}`}
                  item={subItem}
                  onClose={onClose}
                  depth={depth + 1}
                />
              ))}
            </motion.div>
          )}
        </>
      ) : (
        <a
          href={item.link || '#'}
          onClick={onClose}
          className={`relative z-20 block py-2 px-4 rounded-md ${ // Added px-4 and rounded-md
            depth > 0 ? 'pl-8' : '' // Increased padding for nested items
          } text-gray-200 dark:text-gray-200`}
        >
          {isHovered && ( // Render hover effect for link
              <motion.div
                  layoutId="mobile-hovered" // Unique layoutId for mobile
                  className="absolute inset-0 h-full w-full rounded-md bg-cyan-500/10"
              />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      )}
    </div>
  );
};
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
  visible, // Add visible prop
}: MobileNavMenuProps & { visible?: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg px-4 py-8",
            "bg-gray-900/80 backdrop-blur-lg border border-white/20 shadow-lg shadow-cyan-500/10", // Always show glassmorphism
            className,
          )}
          style={{
            // Force glassmorphism effect regardless of scroll state
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(17, 24, 39, 0.8)'
          }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.props.items) {
              return child.props.items.map((item: NavItem, idx: number) => (
                <MobileNavItem
                  key={`mobile-nav-item-${idx}`}
                  item={item}
                  onClose={onClose}
                />
              ));
            }
            return child;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};