import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import type { ServerEntity } from "features/home/models";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { ServerTile } from "../ui/server-tile";

interface ServersBlockProps {
  servers: Array<ServerEntity>;
}

export const ServersBlock = ({ servers = [] }: ServersBlockProps) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Swiper
      grid={{ rows: 2, fill: "row" }}
      slidesPerView={isDesktop ? 3 : 2.2}
      spaceBetween={isDesktop ? "64px 100px" : "14px"}
      modules={[Grid]}
      // className="overflow-visible"
    >
      {servers.map((server) => (
        <SwiperSlide key={server.id}>
          <Box marginRight={isDesktop ? 0 : "17px"}>
            <ServerTile
              id={server.id}
              name={server.name}
              link={server.link}
              onlineCount={server.onlineCount}
              registeredCount={server.registeredCount}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
