import path from "path"
import { fileURLToPath } from "url"
import million from "million/compiler"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
}

const millionConfig = {
  auto: { rsc: true },
  mute: true
}

export default million.next(nextConfig, millionConfig)
