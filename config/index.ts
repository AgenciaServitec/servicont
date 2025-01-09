import { includes } from "lodash";
import { config } from "@/config/config";

const hostName = "servicont.com";

const hostsProduction = ["servicont.com"];

export const currentEnvironment = includes(hostsProduction, hostName)
  ? "production"
  : "development";

export const isProduction = currentEnvironment === "production";
export const currentConfig = config[currentEnvironment];
