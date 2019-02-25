// TODO will change this later, for now it's fine 
export const HOSTNAME: string = 'http://lddtech.digitalscholar.rochester.edu';
export const BASENAME: string = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '';
export const PORT: string = '8080';
export const TRANSLATIONS_BACKEND: string = `${HOSTNAME}:${PORT}/db/translations`;
export const AUDIO_BACKEND: string = `${HOSTNAME}:${PORT}/db/audio`;