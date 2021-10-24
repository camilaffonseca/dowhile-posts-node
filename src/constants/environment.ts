export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
export const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET not defined'

if (!GITHUB_CLIENT_SECRET) {
  throw new Error(`required environment variable ${GITHUB_CLIENT_SECRET} was not found`)
}

if (!GITHUB_CLIENT_ID) {
  throw new Error(`required environment variable ${GITHUB_CLIENT_ID} was not found`)
}

if (!process.env.JWT_SECRET) {
  throw new Error(`required environment variable ${JWT_SECRET} was not found`)
}
