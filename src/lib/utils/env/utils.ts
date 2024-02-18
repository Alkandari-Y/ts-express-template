export function env(key: string, defaultValue: null | string = null): string {
    return process.env[key] ?? (defaultValue as string);
  }
  
  export function envOrFail(key: string): string {
    if (typeof process.env[key] === 'undefined') {
      throw new Error(`Environment variable ${key} is not set.`);
    }
  
    return process.env[key] as string;
  }
  
  export function envToBool(value: string): boolean {
    return value === 'true';
  }
  
  export function envToNumber(value: string): number {
    return parseInt(value, 10);
  }
  
  export function getEnvArray(key: string, delimiter: string = ','): string[] {
    return process.env[key]?.split(delimiter) || [];
  }