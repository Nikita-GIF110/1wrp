import { extendTheme } from "@chakra-ui/react";
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Textarea } from "./components/textarea";
import { Modal } from "./components/modal";
import { Select } from "./components/select";
import { Link } from "./components/link";
import { Tooltip } from "./components/tooltip";
import { Checkbox } from "./components/checkbox";
import { sizes } from "./sizes";
import { breakpoints } from "./breakpoints";
import { colors } from "shared/config/colors";

export const theme = extendTheme({
  breakpoints,
  fonts: {
    body: "Halvar Breitschrift, system-ui, sans-serif",
    heading: "Halvar Breitschrift, system-ui, sans-serif",
  },
  // Border radius
  radii: {
    none: "0",
    // sm: "0.125rem",
    base: "300px",
    md: "12px",
    // lg: "0.5rem",
    // xl: "0.75rem",
    // "2xl": "1rem",
    // "3xl": "1.5rem",
    // full: "9999px",
  },
  sizes,
  colors,
  components: {
    Badge,
    Button,
    Input,
    Textarea,
    Modal,
    Select,
    Link,
    Tooltip,
    Checkbox,
  },
});
