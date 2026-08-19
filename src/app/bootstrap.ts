import { env } from "../config/env.js";
import { logger } from "../logger/logger.js";

logger.info(
    {
        environment: env.NODE_ENV,
    },
    "🚀 Double Signal Bot iniciando",
);

logger.info("✅ Configuração carregada com sucesso");