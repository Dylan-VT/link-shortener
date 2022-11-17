import db, {links} from './database'
import { sql } from './database'

export const insertLink = async (shortened_link: string, original_link: string) => {
    const original_link_lower = original_link.toLowerCase()
    await links(db).insert({shortened_link, original_link: original_link_lower})
}


export const getLink = async (shortened_link: string) => {
    return await links(db).findOne({shortened_link: shortened_link})
}

export const getAllLinks = async () => {
    return await links(db).untypedQuery(sql`SELECT * FROM links;`)
}