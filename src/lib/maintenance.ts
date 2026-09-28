// "Under construction" mode. Toggled from Vercel with the environment variable
// MAINTENANCE_MODE=true (any other value, or unset, means off).
// Next resolves it at build time, so a redeploy is needed after changing it.
export const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === 'true'

export const MAINTENANCE_PATH = '/en-construccion'
