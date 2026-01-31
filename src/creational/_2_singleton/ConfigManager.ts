
export class ConfigManager {
    private static instance: ConfigManager;
    private connectionId: number;

    private constructor() {
        // Heavy initialization logic, e.g., establishing a database connection
        this.connectionId = Math.random();
        console.log(`Database connection opened. ID: ${this.connectionId}`);
    }

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    public getConnectionId(): number {
        return this.connectionId;
    }
}