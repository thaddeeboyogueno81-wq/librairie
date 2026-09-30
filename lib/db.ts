import {createPool} from '@vercel/postgres';
const pool=createPool({connectionString:process.env.POSTGRES_URL});
export const sql={query:(text:string,values?:unknown[])=>pool.query(text,values as any)};