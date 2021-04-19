import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing="4" align="flex-start">
      <NavLink
        icon="/icons/home-icon.svg"
        href="/"
        shouldMathExactHref
      >
        Home
      </NavLink>
      <NavSection title="JOURNEY MANAGEMENT">
        <NavLink
          icon="/icons/journeys-icon.svg"
          href="/journeys"
          shouldMathExactHref
        >
          Journeys
        </NavLink>
      </NavSection>

      <NavSection title="CONTENT MANAGEMENT">
        <NavLink
          icon="/icons/messages-icon.svg"
          href="/messages"
          shouldMathExactHref
        >
          Messages
        </NavLink>
        <NavLink
          icon="/icons/assets-icon.svg"
          href="/assets"
          shouldMathExactHref
        >
          Assets
        </NavLink>
      </NavSection>
      <NavSection title="DATA MANAGEMENT">
        <NavLink
          icon="/icons/segments-icon.svg"
          href="/segments"
        >
          Segments
        </NavLink>
        <NavLink
          icon="/icons/data-icon.svg"
          href="/data"
          shouldMathExactHref
        >
          Data
        </NavLink>
      </NavSection>
      <NavSection title="ADMINSTRATION">
        <NavLink
          icon="/icons/settings-icon.svg"
          href="/admin"
          shouldMathExactHref
        >
          Admin
        </NavLink>
      </NavSection>
    </Stack>
  );
}
