import type { FunctionComponent } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import type { SocialLinkEntity } from "features/home/models";
import { colors } from "shared/config/colors";
import DiscordSmall from "assets/icons/discord-small.svg?react";
import VkSmall from "assets/icons/vk-small.svg?react";
import YouTubeSmall from "assets/icons/youtube-small.svg?react";
// import YouTubeIcon from "assets/icons/logo-youtube.svg?react";
// import DiscordIcon from "assets/icons/logo-discord.svg?react";
// import VkIcon from "assets/icons/logo-vk.svg?react";

const IconsMap: Record<
  SocialLinkEntity["id"],
  FunctionComponent<React.SVGAttributes<SVGElement>>
> = {
  discord: DiscordSmall,
  youTube: YouTubeSmall,
  vk: VkSmall,
};

export const SocialLink = ({ to, label, id }: SocialLinkEntity) => {
  const IconComponent = IconsMap[id];

  return (
    <Link
      as={ReactRouterLink}
      to={to}
      variant="medium"
      title={label}
      padding="24px"
      color={colors.black}
    >
      <IconComponent width={28} height={28} />
    </Link>
  );
};
