import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import type { ServerEntity } from "features/home/models";
import { useTranslate } from "shared/lib/useTranslate";
import { ServerTile } from "../ui/server-tile";
import { serversSliderBrekpoints } from "../config/base";

interface ServersBlockProps {
  servers: Array<ServerEntity>;
}

export const ServersBlock = ({ servers = [] }: ServersBlockProps) => {
  const translate = useTranslate();

  return (
    <Swiper
      grid={{ fill: "row" }}
      modules={[Grid]}
      className="overflow-visible"
      breakpoints={serversSliderBrekpoints}
    >
      {servers.map((server, index) => {
        return (
          <SwiperSlide key={server.id} className="test">
            <ServerTile
              index={index}
              id={server.id}
              name={`${translate("lending.servers_server_name")} ${server.name}`}
              link={server.link}
              onlineCount={server.onlineCount}
              registeredCount={server.registeredCount}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
