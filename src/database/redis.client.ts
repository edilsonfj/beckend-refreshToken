import Redis from 'ioredis';

export const redis = new Redis();

redis.on('connect', () => {
    console.log('💼 Cache is connected!');
});

redis.on('error', (error: Error) => {
    console.error('Erro ao conectar ao cache:', error);
});

export default redis;
