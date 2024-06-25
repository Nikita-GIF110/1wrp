import { Box, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import type { ServerEntity } from "features/home/models";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { ServerTile } from "../ui/server-tile";

interface ServersBlockProps {
  servers: Array<ServerEntity>;
}

export const ServersBlock = ({ servers = [] }: ServersBlockProps) => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery();

  if (isDesktop) {
    return (
      <Flex gap="64px 103px" flexWrap="wrap">
        {servers.map((server) => (
          <ServerTile
            id={server.id}
            name={server.name}
            link={server.link}
            onlineCount={server.onlineCount}
            registeredCount={server.registeredCount}
          />
        ))}
      </Flex>
    );
  }

  if (isMobile) {
    return (
      <Flex rowGap="4px" flexDirection="column">
        {servers.map((server) => (
          <ServerTile
            id={server.id}
            name={server.name}
            link={server.link}
            onlineCount={server.onlineCount}
            registeredCount={server.registeredCount}
          />
        ))}
      </Flex>
    );
  }

  return (
    <Swiper
      grid={{ rows: 2, fill: "row" }}
      allowTouchMove={isTablet}
      slidesPerView={2.2}
      spaceBetween={isDesktop ? "64px 100px" : "14px"}
      modules={[Grid]}
    >
      {servers.map((server) => {
        return (
          <SwiperSlide key={server.id}>
            <Box
              marginRight={{ base: 0, md: "17px", xl: 0 }}
              marginBottom={{ base: "4px", md: 0 }}
            >
              <ServerTile
                id={server.id}
                name={server.name}
                link={server.link}
                onlineCount={server.onlineCount}
                registeredCount={server.registeredCount}
              />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
