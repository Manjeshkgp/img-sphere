/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdn.pixabay.com",
            },{
                protocol:"https",
                hostname:"pixabay.com"
            }
        ]
    },
    reactStrictMode: false,
}

module.exports = nextConfig
