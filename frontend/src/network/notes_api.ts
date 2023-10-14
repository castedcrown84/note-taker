import { Note } from "../models/notes"

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init)
  if (response.ok) {
    return response
  } else {
    throw new Error('Error Message')
  }
}

export const fetchNotes = async ():Promise<Note[]> => {

    const response = await fetchData('/apiroute', {method: 'GET'})
    return response.json()
}