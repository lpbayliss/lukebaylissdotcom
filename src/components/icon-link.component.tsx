"use client";

import {
  Icon,
  IconProps,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  LinkOverlayProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

import Link from "./link.component";

const IconLink = ({
  icon,
  boxSize,
  href,
  isExternal,
  target,
  ...props
}: { icon: IconType } & Pick<IconProps, "boxSize"> &
  Pick<LinkOverlayProps, "href" | "isExternal" | "target"> &
  LinkBoxProps) => (
  <LinkBox {...props}>
    <LinkOverlay
      as={Link}
      display="flex"
      href={href}
      isExternal={isExternal}
      target={target}
    >
      <Icon as={icon} boxSize={boxSize} />
    </LinkOverlay>
  </LinkBox>
);

export default IconLink;
