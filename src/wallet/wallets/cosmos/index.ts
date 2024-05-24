import Agoric from "./agoric.json";
import Nibiru from "./cataclysm.json";
import Comdex from "./comdex.json";
import Archway from "./archway.json";
import Omniflix from "./omniflixhub.json";
import Secret from "./secret.json";
import Osmosis from "./osmosis.json";
import Prajna from "./hypersign-testnet.json";

const Chains = Object.freeze({
  "agoric-3": { ...Agoric } as never,
  "cataclysm-1": { ...Nibiru } as never,
  "comdex-1": { ...Comdex } as never,
  "archway-1": { ...Archway } as never,
  "omniflixhub-1": { ...Omniflix } as never,
  "secret-4": { ...Secret } as never,
  "osmosis-1": { ...Osmosis } as never,
  prajna: { ...Prajna },
});

export { Chains };
