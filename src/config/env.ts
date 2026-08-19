import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z
        .enum(["development", "test", "production"])
        .default("development"),

    DATABASE_URL: z.string().min(1),

    TELEGRAM_BOT_TOKEN: z.string().optional(),

    ADMIN_TELEGRAM_IDS: z.string().default(""),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error(
        "❌ Variáveis de ambiente inválidas:",
        parsedEnv.error.flatten().fieldErrors,
    );

    process.exit(1);
}

export const env = {
    ...parsedEnv.data,

    ADMIN_TELEGRAM_IDS: parsedEnv.data.ADMIN_TELEGRAM_IDS
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean),
};