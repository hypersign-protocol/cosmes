import Agoric from "./agoric.json";
import Nibiru from "./cataclysm.json";
import Comdex from "./comdex.json";
import Archway from "./archway.json";
import Omniflix from "./omniflixhub.json";
import Secret from "./secret.json";
import Osmosis from "./osmosis.json";
import Prajna from "./hypersign-testnet.json";
const Chains = Object.freeze({
    "agoric-3": { ...Agoric },
    "cataclysm-1": { ...Nibiru },
    "comdex-1": { ...Comdex },
    "archway-1": { ...Archway },
    "omniflixhub-1": { ...Omniflix },
    "secret-4": { ...Secret },
    "osmosis-1": { ...Osmosis },
    prajna: { ...Prajna },
});
export { Chains };
//# sourceMappingURL=index.js.map