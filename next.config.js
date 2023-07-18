/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports ={ 
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lineone.piniastudio.com',
            port: '',
            pathname: 'images/travel/hotel-1.jpg,images/travel/hotel-2.jpg,images/travel/hotel-3.jpg,images/travel/hotel-4.jpg,images/travel/hotel-5.jpg,images/travel/hotel-6.jpg,images/travel/hotel-7.jpg,images/travel/hotel-8.jpg',
          },
        ],
      },
}
